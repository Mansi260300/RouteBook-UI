

let user = document.getElementById("user");
let loginBtn = document.getElementById("loginBtn");

user.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})

loginBtn.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Fill login Form");
    }
    else{
        alert("You logged In")
        document.querySelector(".loginPage").style.display="none"
    }
})

 
