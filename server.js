function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";   
}

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
                                            

