<?php
// Reference:
// https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/

// Use this API for demonstration purposes only

// Set headers to return JSON content
header('Content-Type: application/json');

// get the HTTP method, path, and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
$input = json_decode(file_get_contents('php://input'), true);

// connect to the MySQL database
$conn = mysqli_connect('feenix-mariadb.swin.edu.au', 's103844421', '181203', 's103844421_db');

if (!$conn) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

mysqli_set_charset($conn, 'utf8');

// initialize the table name accordingly
$table = "idd_messenger";

// retrieve the search key field name and value from the path
$fld = preg_replace('/[^a-z0-9_]+/i', '', array_shift($request));
$key = array_shift($request);

// retrieve the data to prepare set values
if (isset($input)) {
    $columns = preg_replace('/[^a-z0-9_]+/i', '', array_keys($input));
    $values = array_map(function ($value) use ($conn) {
        if ($value === null) return null;
        return mysqli_real_escape_string($conn, (string)$value);
    }, array_values($input));

    $set = '';
    for ($i = 0; $i < count($columns); $i++) {
        $set .= ($i > 0 ? ',' : '') . '`' . $columns[$i] . '`=';
        $set .= ($values[$i] === null ? 'NULL' : '"' . $values[$i] . '"');
    }
}

// create SQL
switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM `$table`" . ($key ? " WHERE $fld='$key'" : '');
        break;
    case 'PUT':
        $sql = "UPDATE `$table` SET $set WHERE " . ($key ? "$fld='$key'" : "0=1");
        break;
    case 'POST':
        $sql = "INSERT INTO `$table` SET $set";
        break;
    case 'DELETE':
        $sql = "DELETE FROM `$table` WHERE " . ($key ? "$fld='$key'" : "0=1");
        break;
    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        exit;
}

// execute SQL statement
$result = mysqli_query($conn, $sql);

// check for errors in SQL execution
if (!$result) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database query failed', 'error' => mysqli_error($conn)]);
    mysqli_close($conn);
    exit;
}

// prepare the response based on the method
if ($method == 'GET') {
    $response = [];
    while ($row = mysqli_fetch_object($result)) {
        $response[] = $row;
    }
    echo json_encode($response);
} elseif ($method == 'POST') {
    echo json_encode(['success' => true, 'id' => mysqli_insert_id($conn)]);
} else {
    echo json_encode(['success' => true, 'affected_rows' => mysqli_affected_rows($conn)]);
}

// close MySQL connection
mysqli_close($conn);
?>
