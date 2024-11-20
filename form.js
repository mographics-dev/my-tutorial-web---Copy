var attempt = 3;

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "moses"&& password == "1234567") {
        alert("Login successfully");
        window.Location = "success.html";
        return false;
    }
    else{
        attempt--;
        alert("you have left" + attempt + "attepmt;");
        if(attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}