<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$connection = new mysqli("localhost", "Dylan", '^EQ9q^5La!YcJQ!Zgg2p9%463h$RST!6', "schoollijst");
$statement1 = $connection->query("SELECT * FROM studenten");
$result = $statement1->fetch_all();

echo json_encode($result)
?>