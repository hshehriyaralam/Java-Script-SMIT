// console.log("Hello SMIT");
var formConatiner = document.getElementById("formContainer");
var startContiner = document.getElementById("startContainer");


function formSubmitHandler(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");


// localStorage.setItem("name", name.value); //Set Item
// console.log(localStorage.getItem("name")); // Get Item
// localStorage.removeItem("name") // Remove

if(!name.value){
    nameError.className = "show";
    nameError.style.color = "red";
    return
}

if (!email.value){
    emailError.className = "show";
    emailError.style.color = "red"
}

localStorage.setItem("name", name.value);
localStorage.setItem("email", email.value);
formConatiner.className = "hide";
startContiner.className = "Show";
console.log("FormSubmitt");
}