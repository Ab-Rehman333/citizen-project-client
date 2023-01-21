

function toggle1() {
    var card = document.getElementById('card');
    card.classList.toggle("active");

}



function target1(a, b) {

    setTimeout(function () {

        var card = document.getElementById('card');
        var ct = card.getBoundingClientRect().top;
        var cl = card.getBoundingClientRect().left;

        var aa = document.getElementById(a);
        var ab = document.getElementById(b);

        var top1 = aa.getBoundingClientRect().top;
        var bottom1 = parseInt(window.getComputedStyle(aa).getPropertyValue("height"));
        var right1 = parseInt(window.getComputedStyle(aa).getPropertyValue("width"));
        var left1 = aa.getBoundingClientRect().left;

        ab.style.opacity = "1";
        let getCard = document.querySelector(".card1");
        getCard.style.opacity = "1"
        ab.style.top = top1 - ct + "px";
        ab.style.left = left1 - cl + "px";
        ab.style.width = right1 + "px";
        ab.style.height = bottom1 + "px";

        if (a == "sdate") {
            ab.style.left = left1 - cl - 10 + "px";
            ab.style.width = right1 + 15 + "px";
        }

    }, 500);

}

function write1(a, b) {
    var mli = ["snum", "sname", "sdate", "sdate", "scvv"]
    var ab = b.value;

    if (a == 4) {
        var card = document.getElementById('card');
        card.classList.add("active");
        var ll = document.getElementById("pointer");
        ll.style.opacity = 0;
        let getCard = document.querySelector(".card1");
        getCard.style.opacity = "0"
    } else {
        var card = document.getElementById('card');
        card.classList.remove("active");
        target1(mli[a], "pointer");

        if (a == 0) {
            star1(b);
        }
        if (a == 1) {
            full_n(b);
        }
        if (a == 2) {
            add_m(b);
        }
        if (a == 3) {
            add_y(b);
        }
    }
}
function write8() {
    var card = document.getElementById('card');
    card.classList.remove("active");
    let getCard = document.querySelector(".card1");
    getCard.style.opacity = "1"
}
function star1(b) {
    var st1 = document.querySelectorAll(".label");
    var stfull = document.querySelectorAll(".stars1");
    var sb = b.value;

    if (sb.length <= 16) {

        for (var j = 0; j < st1.length; j++) {
            st1[j].innerHTML = "#";
            stfull[j].classList.remove("active");
        }

        for (var i = 0; i < sb.length; i++) {
            st1[i].innerHTML = sb[i];
            stfull[i].classList.add("active");
        }

    } else {
        b.value = sb.substring(0, 16);
    }
}

function add_m(b) {
    var mm = parseInt(b.value);
    var mm_set = document.getElementById("mm_set");
    var mm_cha = document.getElementById("cha_m");
    if (mm > 0 && mm < 13) {
        mm_set.classList.add("active");
        if (mm < 10) {
            mm = "0" + mm;
        }
        mm_cha.innerHTML = mm;
    } else {
        mm_set.classList.remove("active");
        mm_cha.innerHTML = "01";
    }
}

function add_y(b) {
    var mm = parseInt(b.value);
    var mm_set = document.getElementById("yy_set");
    var mm_cha = document.getElementById("cha_y");

    if (mm > 2021 && mm < 3000) {
        mm_set.classList.add("active");
        mm_cha.innerHTML = mm;
    } else {
        mm_set.classList.remove("active");
        mm_cha.innerHTML = "2022";
    }

}

function full_n(b) {
    var f_name = b.value;
    var cha_name = document.getElementById("cha_name");
    if (f_name.length > 0) {
        cha_name.innerHTML = "<label>" + f_name + "</label>";
    } else {
        cha_name.innerHTML = "<label>FULL NAME</label>";
    }
}

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})



// save to localStorage
function local() {
    let cardNumber = document.getElementById("cardNumber").value;
    let holderName = document.getElementById("holderName").value;
    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("Name", holderName);


    return;
}


function letsChange(e) {
    let cvvNumber = document.getElementById("cvvNumber");
    let mainInputCvv = document.getElementById("mainInputCvv").value;
    cvvNumber.value = mainInputCvv;


}




function cNumberV() {
    let getCardMainN = document.querySelector(".cNumberV");

    if (getCardMainN.value.length <= 5) {
        getCardMainN.style.borderColor = "red";

    } else {
        getCardMainN.style.borderColor = "silver";

    }


}

function newHolder() {
    let getCardName = document.querySelector(".HName");

    if (getCardName.value.length <= 5) {
        getCardName.style.borderColor = "red"

    } else {
        getCardName.style.borderColor = "silver"

    }

}


function valid() {
    let getCardN = document.querySelector(".valid");

    if (getCardN.value.length <= 1) {
        getCardN.style.borderColor = "red"

    } else {
        getCardN.style.borderColor = "silver"

    }

}


function year() {
    let year = document.querySelector(".year");
    if (year.value.length <= 1) {
        year.style.borderColor = "red"

    } else {
        year.style.borderColor = "silver"

    }
}


function cvvValid() {
    let cvvValid = document.querySelector(".cvvValid")
    if (cvvValid.value.length <= 1) {
        cvvValid.style.borderColor = "red"

    } else {
        cvvValid.style.borderColor = "silver"

    }
}

