<?php
require_once __DIR__ . '/config.php';

// Ensure events table exists
try {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS retreat_events (
            id TEXT PRIMARY KEY,
            month TEXT NOT NULL,
            dates TEXT NOT NULL,
            type TEXT NOT NULL,
            director TEXT NOT NULL,
            timing TEXT NOT NULL,
            fee TEXT NOT NULL,
            image TEXT,
            is_active INTEGER DEFAULT 1,
            sort_order INTEGER DEFAULT 0,
            created_at TEXT NOT NULL
        );
    ");

    // Seed default retreats if empty
    $count = $pdo->query("SELECT COUNT(*) FROM retreat_events")->fetchColumn();
    if ($count == 0) {
        $defaults = [
            ['ev-101', 'august', 'August 07 - 10', 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', 'Fr. Director & ARC Team', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 1],
            ['ev-102', 'august', 'August 14 - 17', 'Marian & Family Deliverance Retreat (കുടുംബ നവീകരണ ധ്യാനം)', 'Capuchin Fathers', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 2],
            ['ev-103', 'august', 'August 21 - 24', 'Charismatic Spiritual Renewal (കരിസ്മാറ്റിക് ധ്യാനം)', 'Fr. Director & Team', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 3],
            ['ev-104', 'august', 'August 28 - 31', 'Youth & Vocation Discernment Retreat (യുവജന ധ്യാനം)', 'Capuchin Youth Ministry', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 4],
            ['ev-201', 'september', 'September 04 - 07', 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', 'Fr. Director & ARC Team', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 5],
            ['ev-202', 'september', 'September 11 - 14', 'Holy Spirit & Deliverance Retreat (വിശുദ്ധാത്മാവിൽ നവീകരണം)', 'Capuchin Fathers', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 6],
            ['ev-203', 'september', 'September 18 - 21', 'Couples & Family Sanctity Retreat (ദമ്പതി ധ്യാനം)', 'Fr. Director & Team', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 7],
            ['ev-204', 'september', 'September 25 - 28', 'Inner Peace & Healing Retreat (ശാന്തിയും സൗഖ്യവും)', 'Capuchin Preachers', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 8],
            ['ev-301', 'october', 'October 02 - 05', 'St. Francis Feast Special Retreat (ഫ്രാൻസിസ്കൻ തിരുനാൾ ധ്യാനം)', 'Provincial & Capuchin Fathers', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 9],
            ['ev-302', 'october', 'October 09 - 12', 'Inner Healing Retreat (ആന്തരിക സൗഖ്യ ധ്യാനം)', 'Fr. Director & ARC Team', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 10],
            ['ev-303', 'october', 'October 16 - 19', 'Rosary & Marian Intercession Retreat (ജപമാല മാസ ധ്യാനം)', 'Capuchin Fathers', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 11],
            ['ev-304', 'october', 'October 23 - 26', 'Deliverance & Grace Renewal (വിടുതൽ ധ്യാനം)', 'Fr. Director & Team', 'Thursday 4:30 PM to Sunday 1:30 PM', '₹700', 1, 12]
        ];

        $ins = $pdo->prepare("INSERT INTO retreat_events (id, month, dates, type, director, timing, fee, is_active, sort_order, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $now = date('c');
        foreach ($defaults as $d) {
            $ins->execute([$d[0], $d[1], $d[2], $d[3], $d[4], $d[5], $d[6], $d[7], $d[8], $now]);
        }
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try {
            $stmt = $pdo->query("SELECT * FROM retreat_events ORDER BY sort_order ASC, created_at ASC");
            $rows = $stmt->fetchAll();
            
            $formatted = array_map(function($r) {
                return [
                    'id' => $r['id'],
                    'month' => $r['month'],
                    'dates' => $r['dates'],
                    'type' => $r['type'],
                    'director' => $r['director'],
                    'timing' => $r['timing'],
                    'fee' => $r['fee'],
                    'image' => $r['image'] ?? '',
                    'isActive' => (bool)$r['is_active'],
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
            if (!$input || empty($input['dates']) || empty($input['type'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Dates and Type are required']);
                exit;
            }

            $id = $input['id'] ?? ('ev-' . time() . '-' . rand(100, 999));
            $createdAt = date('c');
            $month = strtolower(trim($input['month'] ?? 'august'));

            $stmt = $pdo->prepare("
                INSERT INTO retreat_events (id, month, dates, type, director, timing, fee, image, is_active, sort_order, created_at)
                VALUES (:id, :month, :dates, :type, :director, :timing, :fee, :image, :is_active, :sort_order, :created_at)
            ");

            $stmt->execute([
                ':id' => $id,
                ':month' => $month,
                ':dates' => $input['dates'],
                ':type' => $input['type'],
                ':director' => $input['director'] ?? 'Fr. Director & Team',
                ':timing' => $input['timing'] ?? 'Thursday 4:30 PM to Sunday 1:30 PM',
                ':fee' => $input['fee'] ?? '₹700',
                ':image' => $input['image'] ?? '',
                ':is_active' => isset($input['isActive']) && !$input['isActive'] ? 0 : 1,
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

    case 'PUT':
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            if (!$input || empty($input['id'])) {
                http_response_code(400);
                echo json_encode(['error' => 'ID missing']);
                exit;
            }

            $stmt = $pdo->prepare("
                UPDATE retreat_events
                SET month = COALESCE(:month, month),
                    dates = COALESCE(:dates, dates),
                    type = COALESCE(:type, type),
                    director = COALESCE(:director, director),
                    timing = COALESCE(:timing, timing),
                    fee = COALESCE(:fee, fee),
                    image = COALESCE(:image, image),
                    is_active = COALESCE(:is_active, is_active)
                WHERE id = :id
            ");

            $stmt->execute([
                ':id' => $input['id'],
                ':month' => isset($input['month']) ? strtolower(trim($input['month'])) : null,
                ':dates' => $input['dates'] ?? null,
                ':type' => $input['type'] ?? null,
                ':director' => $input['director'] ?? null,
                ':timing' => $input['timing'] ?? null,
                ':fee' => $input['fee'] ?? null,
                ':image' => $input['image'] ?? null,
                ':is_active' => isset($input['isActive']) ? ($input['isActive'] ? 1 : 0) : null
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

            $stmt = $pdo->prepare("DELETE FROM retreat_events WHERE id = :id");
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
