function login (username, password){
    if(username == "admin" && password == "P@ssw0rd"){
        console.log("login success");
    }else {
        console.log("Invalid username or password");
    }
}
let uname = prompt("Enter username");
let pass = prompt("Enter password");

login(uname,pass);