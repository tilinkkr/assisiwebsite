<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try {
            $stmt = $pdo->query("SELECT * FROM prayer_requests ORDER BY created_at DESC");
            $rows = $stmt->fetchAll();
            
            // Format for frontend
            $formatted = array_map(function($r) {
                return [
                    'id' => $r['id'],
                    'name' => $r['name'],
                    'phone' => $r['phone'],
                    'place' => $r['place'],
                    'intention' => $r['intention'],
                    'status' => $r['status'],
                    'notes' => $r['notes'],
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
            if (!$input || empty($input['name']) || empty($input['phone']) || empty($input['intention'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Required fields missing']);
                exit;
            }

            $id = 'pr-' . time() . '-' . rand(100, 999);
            $createdAt = date('c');

            $stmt = $pdo->prepare("
                INSERT INTO prayer_requests (id, name, phone, place, intention, status, notes, created_at)
                VALUES (:id, :name, :phone, :place, :intention, 'new', '', :created_at)
            ");

            $stmt->execute([
                ':id' => $id,
                ':name' => $input['name'],
                ':phone' => $input['phone'],
                ':place' => $input['place'] ?? '',
                ':intention' => $input['intention'],
                ':created_at' => $createdAt
            ]);

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'data' => [
                    'id' => $id,
                    'name' => $input['name'],
                    'phone' => $input['phone'],
                    'place' => $input['place'] ?? '',
                    'intention' => $input['intention'],
                    'status' => 'new',
                    'createdAt' => $createdAt
                ]
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;

    case 'PUT':
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!$input || empty($input['id'])) {
                http_response_code(400);
                echo json_encode(['error' => 'ID missing']);
                exit;
            }

            $stmt = $pdo->prepare("
                UPDATE prayer_requests
                SET status = COALESCE(:status, status),
                    notes = COALESCE(:notes, notes)
                WHERE id = :id
            ");

            $stmt->execute([
                ':id' => $input['id'],
                ':status' => $input['status'] ?? null,
                ':notes' => $input['notes'] ?? null
            ]);

            echo json_encode(['success' => true]);
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

            $stmt = $pdo->prepare("DELETE FROM prayer_requests WHERE id = :id");
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
