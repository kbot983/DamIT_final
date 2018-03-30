
$(document).ready(function () {
    setInterval(CheckOnlineStatus, 3000);
});
function CheckOnlineStatus(msg) {
    console.log("test");
    var check = 0;
    // var status = document.getElementById("status");
    var condition = navigator.onLine;
    // var state = document.getElementById("state");
    // var st;
    if (!condition) {
        check = 1;
        alert("Seems like you dont have internet!");
        window.location.href = "error.html";
    }
    // if (check === 1) {
    //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
    //     function onSuccess(position) {
    //         var lat = pos.coords.latitude;
    //         var lng = pos.coords.longitude;
    //         alert("lat : " + lat + " lng : " + lng);
    //     }
    // }




    function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
}