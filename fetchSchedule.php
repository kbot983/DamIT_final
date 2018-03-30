<?php

header('ACCESS-CONTROL-ALLOW-ORIGIN: *');
include('connection.php');
$i = 8;
$current_date = date("Y-m-d");
$query = "SELECT * FROM `scheduler`";
$result = mysqli_query($conn, $query);
while($res = mysqli_fetch_assoc($result)){
    $date = $res["date"];
    if($date != ''){
        $data = array("id"=>$i, "working"=> 1, "name"=> "Test", "startdate"=> $current_date, "enddate"=>"", "starttime"=> "12:00", "endtime"=>"2:00", "color"=> "#EF44EF", "url"=> "");
        $i += 1;
    }
}
echo json_encode($data);
?>