<?php
    include 'Cyrk/Usuwanie.php';

    $host = "localhost";
    $dbname = "cyrk";
    $user = "root";
    $pass = "";
    
    $conn = mysqli_connect($host, $user, $pass, $dbname);

    $query2 = "DELETE $row FROM pracownicy;";
    mysqli_query($conn, $query2);
    
    echo "<h1>Rekord usunięty pomyślnie</h1>  <br> <a href='Usuwanie.php'><button>Powrót</button></a>";
            
    mysqli_close($conn);  
?>