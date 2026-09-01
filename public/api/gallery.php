<?php
require_once __DIR__ . '/config.php';

try {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS gallery_photos (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            malayalam_title TEXT NOT NULL,
            category TEXT NOT NULL,
            src TEXT NOT NULL,
            description TEXT,
            sort_order INTEGER DEFAULT 0,
            created_at TEXT NOT NULL
        );
    ");
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try {
            $stmt = $pdo->query("SELECT * FROM gallery_photos ORDER BY sort_order ASC, created_at DESC");
            $rows = $stmt->fetchAll();
            
            $formatted = array_map(function($r) {
                return [
                    'id' => $r['id'],
                    'title' => $r['title'],
                    'malayalamTitle' => $r['malayalam_title'],
                    'category' => $r['category'],
                    'src' => $r['src'],
                    'description' => $r['description'] ?? '',
                    'sortOrder' => (int)$r['sort_order'],
                    'createdAt' => $r['created_at']
                ];
            }, $rows);
            
            echo json_encode(['data' => $formatted]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;

    case 'POST':
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!$input || empty($input['src']) || empty($input['title'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Image source and title are required']);
                exit;
            }

            $id = $input['id'] ?? ('gal-' . time() . '-' . rand(100, 999));
            $createdAt = date('c');

            $stmt = $pdo->prepare("
                INSERT INTO gallery_photos (id, title, malayalam_title, category, src, description, sort_order, created_at)
                VALUES (:id, :title, :malayalam_title, :category, :src, :description, :sort_order, :created_at)
            ");

            $stmt->execute([
                ':id' => $id,
                ':title' => $input['title'],
                ':malayalam_title' => $input['malayalamTitle'] ?? $input['title'],
                ':category' => $input['category'] ?? 'retreats',
                ':src' => $input['src'],
                ':description' => $input['description'] ?? '',
                ':sort_order' => (int)($input['sortOrder'] ?? 0),
                ':created_at' => $createdAt
            ]);

            http_response_code(201);
            echo json_encode(['success' => true, 'id' => $id]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;

    case 'DELETE':
        try {
            $id = $_GET['id'] ?? null;
            if (!$id) {
                $input = json_decode(file_get_contents('php://input'), true);
                $id = $input['id'] ?? null;
            }

            if (!$id) {
                http_response_code(400);
                echo json_encode(['error' => 'ID missing']);
                exit;
            }

            $stmt = $pdo->prepare("DELETE FROM gallery_photos WHERE id = :id");
            $stmt->execute([':id' => $id]);

            echo json_encode(['success' => true]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>
