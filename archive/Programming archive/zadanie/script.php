<?php
$servername = "localhost";
$username = "root";
$dbname = "2c";
$password = "";

$conn = new mysqli($servername, $username, $password, $dbname);

$imie = $_POST["imie"];
$nazwisko = $_POST["nazwisko"];
$tel = $_POST["tel"];

$sql = "INSERT INTO pracownicy (imie, nazwisko, numer_tel) VALUES ('$imie','$nazwisko','$tel')";

if ($conn->query($sql) === TRUE) {
    ECHO "Rekord dodany";
} else {
    ECHO "BŁĄDDDDD!!!!!";
}
?>