window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})





// let getBtn = document.querySelector(".action-button");
// getBtn.addEventListener("click", () => {
//     var selction1,
//         selction2,
//         selction3;
//     let error = document.querySelector(".main-error");
//     selction1 = document.querySelector(".media1");
//     selction1.addEventListener("keyup", () => {
//         if (selction1.value.length <= 0) {
//             selction1.style.borderColor = "red"
//             error.innerHTML = "you have to answer three Questions"

//         }
//         else {
//             selction1.style.borderColor = "black"
//             error.innerHTML = ""


//         }
//     })
//     selction2 = document.querySelector(".media2");
//     selction2.addEventListener("keyup", () => {
//         if (selction2.value.length <= 0) {
//             error.innerHTML = "you have to answer three Questions"
//             selction2.style.borderColor = "red"
//         }
//         else {
//             error.innerHTML = ""
//             selction1.style.borderColor = "black"

//         }


//     })
//     selction3 = document.querySelector(".media3");
//     selction3.addEventListener("keyup", () => {
//         if (selction3.value.length <= 0) {
//             error.innerHTML = "you have to answer three Questions"
//             selction3.style.borderColor = "red"
//         } else {
//             error.innerHTML = ""
//             selction1.style.borderColor = "black"


//         }


//     })
//     if (selction1 && selction2 & selction3) {
//         locationChange("../card/card.html")
//     }


// })
let getBtn = document.querySelector(".action-button");
getBtn.addEventListener("click", () => {
    let error = document.querySelector(".main-error");
    let selction1 = document.querySelector(".media1");
    let selction2 = document.querySelector(".media2");
    let selction3 = document.querySelector(".media3");
    if (selction1.value.length >= 1 && selction2.value.length >= 1 && selction3.value.length >= 1) {
        window.location.assign("../email-first/index.html");
    } else {
        error.innerHTML = "you have to answer three Questions"
    }


})
