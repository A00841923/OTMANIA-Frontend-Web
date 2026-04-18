document.addEventListener("DOMContentLoaded", () => {

    const btnLogin = document.getElementById("btnLogin");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("Submit button clicked");
        validarLogin();
    });

    async function validarLogin(){
        const credentials = {
            Email: email.value,
            Password: password.value
        };

        const res = await fetch("http://localhost:3000/login", {
            method:"POST", 
            headers:{"Content-Type":"application/json"}, 
            body:JSON.stringify(credentials)
        });

        const data = await res.json();
        console.log(data);

        if(data.isLogin == true){
            sessionStorage.setItem("id", data.user.IDUser);
            window.location = "./home.html";
        }else{
            errorMessage.textContent = "Email or password is incorrect.";
        }
    }
});