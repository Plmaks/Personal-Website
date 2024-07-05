<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edycja</title>
</head>
<body>
<div class="rekordy">
        <?php
            $host = "localhost";
            $dbname = "cyrk";
            $user = "root";
            $pass = "";
    
            $conn = mysqli_connect($host, $user, $pass, $dbname);

            $query1 = "SELECT name, surname, function FROM pracownicy ORDER BY RAND();";
            $q_1 = mysqli_query($conn, $query1); 

            error_reporting(0);
            while ($row = mysqli_fetch_array($q_1)) {
                echo "<div class='rekordy'><input type='checkbox' value='$row'> '$row[name]' . '$row[surname]' . '$row[function]'</input> <br></div>";
            }
            error_reporting(1);

            mysqli_fetch_all($q_1);
            echo "<a href='cyrk.html'><button>Powrót</button></a>";

            mysqli_close($conn);  
        ?>
    </div>
</body>
</html>