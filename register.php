<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'config.php';

// Get raw POST data
$json = file_get_contents("php://input");
$data = json_decode($json, true);

// Check if JSON data is received correctly
if (!$data) {
    echo json_encode(["error" => "Invalid JSON or empty request"]);
    exit;
}

// Validate required fields
if (!isset($data['name'], $data['email'], $data['mobile'], $data['address'])) {
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

$name = trim($data['name']);
$email = trim($data['email']);
$mobile = trim($data['mobile']);
$address = trim($data['address']);

try {
    $sql = "INSERT INTO users (name, email, mobile, address) VALUES (:name, :email, :mobile, :address)";
    $stmt = $conn->prepare($sql);
    $stmt->execute(['name' => $name, 'email' => $email, 'mobile' => $mobile, 'address' => $address]);

    echo json_encode(["message" => "User registered successfully"]);
} catch (PDOException $e) {
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>
