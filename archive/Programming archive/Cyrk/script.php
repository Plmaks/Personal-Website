<?php
$host = "localhost";
$dbname = "cyrk";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $dbname);

$name = $_POST["name"];
$surname = $_POST["surname"];
$function = $_POST["function"];

$query = "INSERT INTO `pracownicy` (`name`, `surname`, `function`) VALUES ('$name', '$surname', '$function');";

$conn -> query($query);
echo "<a href='cyrk.html'><button>Powrót</button></a>";
$conn -> close();    
?>