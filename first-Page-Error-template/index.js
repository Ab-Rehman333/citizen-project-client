// // for icon 
// let password = document.querySelector(".password");
// let getIcon = document.querySelector(".icon")
// let getIconCross = document.querySelector(".cross")
// let getuserNameinput = document.querySelector(".userNameinput");
// let getButton = document.querySelector(".button");

// getIcon.addEventListener("click", (e) => {
//     if (password.type === "password") {
//         getIcon.classList.add("fa-eye-slash")
//         getIcon.classList.remove("fa-eye")
//         password.type = "text"
//     } else {
//         getIcon.classList.remove("fa-eye-slash")
//         getIcon.classList.add("fa-eye")
//         password.type = "password"

//     }
// })
// // to remove text in input field  
// getIconCross.addEventListener("click", () => {
//     getuserNameinput.value = "";

// })
// let disable = getButton.disabled = true;
// let passVal = password.value;
// let passLenght = passVal.length;

// password.onkeyup = () => {
//     if (passLenght > 7) {
//         //Enable button
//         getButton.disabled = false;
//     } else {
//         getButton = disable;
//     }
// }
// // for input 
// $(".js-form-item").on("click", function () {
//     $(this).addClass('form-item--input-filled');
// });

// $(".js-form-item > input").on("blur", function () {
//     $(this).parent().removeClass('form-item--input-filled');
// });

function locationChange() {
    window.location.assign("../email-first/index.html");

}
let getButton = document.querySelector(".btn");
let password = document.querySelector(".password");
let label = document.querySelector(".form-item__label");
let labelpass = document.querySelector(".label-password");



//  username validaiton 
function myFunction() {
    let username = document.querySelector(".userNameinput");
    let usererror = document.getElementById("error-user");

    
    if (username.value === "") {
        usererror.textContent = "ops Please addd Surename"
        usererror.style.color = "red";
        username.style.borderBottomColor = "red"
        label.style.color = "red"
        image.style.display= "block"
        getButton.disabled = true

    } else if (username.value.length <= 5) {
        usererror.textContent = "Surename must required 8 char"
        usererror.style.color = "red"
        username.style.borderBottomColor = "red"
        label.style.color = "red"

    } else {
        usererror.textContent = ""
        label.style.color = "#6c757d"
        username.style.borderBottomColor = "#6c757d"


    }

}
// password validation 
function myFunctionpass() {
    let passerror = document.getElementById("error-pass");
    if (password.value === "") {
        passerror.textContent = "ops Please enter password"
        passerror.style.color = "red"
        password.style.borderBottomColor = "red"
        labelpass.style.color = "red"

    } else if (password.value.length <= 5) {
        passerror.textContent = "password must required 8 char"
        passerror.style.color = "red"
        password.style.borderBottomColor = "red"
        labelpass.style.color = "red"

    } else {
        passerror.textContent = "";
        labelpass.style.color = "#6c757d"
        password.style.borderBottomColor = "#6c757d"


    }
   
  
}

//    for loading  
$('body').append('<div  class="loader-container"><img src="images/loading.png" class="img-laoding" /></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".loader-container" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".loader-container" ).remove(); //makes page more lightweight 
  });  
}