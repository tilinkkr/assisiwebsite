<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try {
            $stmt = $pdo->query("SELECT * FROM retreat_bookings ORDER BY created_at DESC");
            $rows = $stmt->fetchAll();
            
            $formatted = array_map(function($r) {
                return [
                    'id' => $r['id'],
                    'name' => $r['name'],
                    'phone' => $r['phone'],
                    'retreatDates' => $r['retreat_dates'],
                    'retreatTitle' => $r['retreat_title'],
                    'personsCount' => (int)$r['persons_count'],
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
            if (!$input || empty($input['name']) || empty($input['phone']) || empty($input['retreatDates'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Required fields missing']);
                exit;
            }

            $id = 'bk-' . time() . '-' . rand(100, 999);
            $createdAt = date('c');

            $stmt = $pdo->prepare("
                INSERT INTO retreat_bookings (id, name, phone, retreat_dates, retreat_title, persons_count, status, notes, created_at)
                VALUES (:id, :name, :phone, :retreat_dates, :retreat_title, :persons_count, 'pending', '', :created_at)
            ");

            $stmt->execute([
                ':id' => $id,
                ':name' => $input['name'],
                ':phone' => $input['phone'],
                ':retreat_dates' => $input['retreatDates'],
                ':retreat_title' => $input['retreatTitle'] ?? '',
                ':persons_count' => $input['personsCount'] ?? 1,
                ':created_at' => $createdAt
            ]);

            http_response_code(201);
            echo json_encode(['success' => true, 'id' => $id]);
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
                UPDATE retreat_bookings
                SET status = :status
                WHERE id = :id
            ");

            $stmt->execute([
                ':id' => $input['id'],
                ':status' => $input['status'] ?? 'pending'
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

            $stmt = $pdo->prepare("DELETE FROM retreat_bookings WHERE id = :id");
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
