<?php
header('ACCESS-CONTROL-ALLOW-ORIGIN: *');
$email = $_POST["email"];
$query = "SELECT * FROM `usermaster` WHERE `email` = $email";
$result = mysqli_query($conn, $query);
while($res = mysqli_fetch_assoc($result)){
    $dam_id = $res["dam_id"];
}
?>