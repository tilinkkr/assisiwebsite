<?php
require_once __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try {
            $stmt = $pdo->query("SELECT * FROM testimonies ORDER BY created_at DESC");
            $rows = $stmt->fetchAll();
            
            $formatted = array_map(function($r) {
                return [
                    'id' => $r['id'],
                    'firstName' => $r['first_name'],
                    'lastName' => $r['last_name'],
                    'contact' => $r['contact'],
                    'email' => $r['email'],
                    'subject' => $r['subject'],
                    'description' => $r['description'],
                    'agreePublish' => (bool)$r['agree_publish'],
                    'isApproved' => (bool)$r['is_approved'],
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
            if (!$input || empty($input['firstName']) || empty($input['contact']) || empty($input['description'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Required fields missing']);
                exit;
            }

            $id = 'test-' . time() . '-' . rand(100, 999);
            $createdAt = date('c');

            $stmt = $pdo->prepare("
                INSERT INTO testimonies (id, first_name, last_name, contact, email, subject, description, agree_publish, is_approved, created_at)
                VALUES (:id, :first_name, :last_name, :contact, :email, :subject, :description, :agree_publish, 0, :created_at)
            ");

            $stmt->execute([
                ':id' => $id,
                ':first_name' => $input['firstName'],
                ':last_name' => $input['lastName'] ?? '',
                ':contact' => $input['contact'],
                ':email' => $input['email'] ?? '',
                ':subject' => $input['subject'] ?? '',
                ':description' => $input['description'],
                ':agree_publish' => isset($input['agreePublish']) && $input['agreePublish'] ? 1 : 0,
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
                UPDATE testimonies
                SET is_approved = :is_approved
                WHERE id = :id
            ");

            $stmt->execute([
                ':id' => $input['id'],
                ':is_approved' => isset($input['isApproved']) && $input['isApproved'] ? 1 : 0
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

            $stmt = $pdo->prepare("DELETE FROM testimonies WHERE id = :id");
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
