<?php
require_once __DIR__ . '/config.php';

// Brute-force protection table
try {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS login_attempts (
            ip TEXT PRIMARY KEY,
            attempts INTEGER DEFAULT 0,
            last_attempt INTEGER
        );
    ");
} catch (Exception $e) {}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$now = time();

// Check if locked out (5 failed attempts within 5 minutes)
try {
    $stmt = $pdo->prepare("SELECT * FROM login_attempts WHERE ip = :ip");
    $stmt->execute([':ip' => $ip]);
    $attempt = $stmt->fetch();

    if ($attempt) {
        if ($attempt['attempts'] >= 5 && ($now - $attempt['last_attempt']) < 300) {
            $remaining = 300 - ($now - $attempt['last_attempt']);
            http_response_code(429);
            echo json_encode([
                'error' => "സുരക്ഷ മുൻനിർത്തി ലോഗിൻ താൽക്കാലികമായി ബ്ലോക്ക് ചെയ്തിരിക്കുന്നു. ദയവായി {$remaining} സെക്കൻഡുകൾക്ക് ശേഷം വീണ്ടും ശ്രമിക്കുക.",
                'locked' => true,
                'retryAfter' => $remaining
            ]);
            exit;
        }

        // Reset if 5 mins passed
        if (($now - $attempt['last_attempt']) >= 300) {
            $stmt = $pdo->prepare("UPDATE login_attempts SET attempts = 0, last_attempt = :now WHERE ip = :ip");
            $stmt->execute([':now' => $now, ':ip' => $ip]);
        }
    }
} catch (Exception $e) {}

$input = json_decode(file_get_contents('php://input'), true);
$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');

// Secure Server-side Credentials Check
$VALID_USER = 'assisi';
$VALID_PASS = 'assisi@2026';

// Artificial delay to prevent timing attacks
usleep(300000); // 300ms

if ($username === $VALID_USER && $password === $VALID_PASS) {
    // Reset failed attempts on success
    try {
        $stmt = $pdo->prepare("DELETE FROM login_attempts WHERE ip = :ip");
        $stmt->execute([':ip' => $ip]);
    } catch (Exception $e) {}

    // Generate secure session token
    $token = bin2hex(random_bytes(32));
    $expiresAt = time() + (24 * 3600); // 24 hours

    echo json_encode([
        'success' => true,
        'token' => $token,
        'expiresAt' => $expiresAt,
        'username' => 'assisi'
    ]);
} else {
    // Record failed attempt
    try {
        $stmt = $pdo->prepare("
            INSERT INTO login_attempts (ip, attempts, last_attempt)
            VALUES (:ip, 1, :now)
            ON CONFLICT(ip) DO UPDATE SET attempts = attempts + 1, last_attempt = :now
        ");
        $stmt->execute([':ip' => $ip, ':now' => $now]);
    } catch (Exception $e) {}

    http_response_code(401);
    echo json_encode([
        'error' => 'തെറ്റായ യൂസർനെയിം അല്ലെങ്കിൽ പാസ്‌വേഡ്! (Invalid Credentials)'
    ]);
}
?>
