<?php
$servername = "localhost";
$username = "root";
$dbname = "2c";
$password = "";

$conn = new mysqli($servername, $username, $password, $dbname);

$numer = $_POST["numer"];
$pracownik = $_POST["pracownik"];

$sql = "INSERT INTO zamówenia (numer, pracownik) VALUES ('$numer','$pracownik')";

if ($conn->query($sql) === TRUE) {
    ECHO "Rekord dodany";
} else {
    ECHO "BŁĄDDDDD!!!!!";
}
?>