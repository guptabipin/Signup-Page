function validate()
{
    var userName=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    if(userName=="admin" && pass=="12345"){
        alert("Login successfully");
    }
    else if(userName=="" && pass==""){
        alert("Please enter Username and Password")
    }
    else if(userName==""){
        alert("Please enter a Username")
    }
    else if(pass==""){
        alert("Password can't be empty !")
    }
    else if(pass.length>=5){
        alert("Length of password not be more than 6 digit")
    }
    else{
        alert("Please enter correct Username or password");
    }

}