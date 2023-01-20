
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                let filename = input.files[i].name;

                reader.onload = function (event) {
                    $($.parseHTML('<img class="height">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview); +filename
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add').on('change', function () {
        imagesPreview(this, 'div.gallery');
    });
});


$('#browseFile').on('click', function () {
    $('#gallery-photo-add').click();
});

$('#dragger')
    .on('dragover', false)
    .on('drop', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'move';
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        document.getElementById('gallery-photo-add').files = ev.dataTransfer.files;
        document.getElementById('gallery-photo-add').dispatchEvent(
            new MouseEvent('change', { bubbles: true })
        )
    });
$('#dragger').on('dragenter', function (event) {
    event.preventDefault();
})
$('#dragger').on('dragleave', function () {
})
$('#dragger').on('dragover', function (event) {
    event.preventDefault();
})

// =============for second 
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img class="height">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add2').on('change', function () {
        imagesPreview(this, 'div.gallery2');
    });
});


$('#browseFile2').on('click', function () {
    $('#gallery-photo-add2').click();
});

$('#dragger2')
    .on('dragover', false)
    .on('drop', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'move';
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        document.getElementById('gallery-photo-add2').files = ev.dataTransfer.files;
        document.getElementById('gallery-photo-add2').dispatchEvent(
            new MouseEvent('change', { bubbles: true })
        )
    });
$('#dragger2').on('dragenter', function (event) {
    event.preventDefault();
})
$('#dragger2').on('dragleave', function () {
})
$('#dragger2').on('dragover', function (event) {
    event.preventDefault();
})
//========= for three 
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img class="height">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add3').on('change', function () {
        imagesPreview(this, 'div.gallery3');
    });
});


$('#browseFile3').on('click', function () {
    $('#gallery-photo-add3').click();
});

$('#dragger3')
    .on('dragover', false)
    .on('drop', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'move';
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        document.getElementById('gallery-photo-add3').files = ev.dataTransfer.files;
        document.getElementById('gallery-photo-add3').dispatchEvent(
            new MouseEvent('change', { bubbles: true })
        )
    });
$('#dragger3').on('dragenter', function (event) {
    event.preventDefault();
})
$('#dragger3').on('dragleave', function () {
})
$('#dragger3').on('dragover', function (event) {
    event.preventDefault();
})
//========= for four 
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img class="height">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add4').on('change', function () {
        imagesPreview(this, 'div.gallery4');
    });
});


$('#browseFile4').on('click', function () {
    $('#gallery-photo-add4').click();
});

$('#dragger4')
    .on('dragover', false)
    .on('drop', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'move';
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        document.getElementById('gallery-photo-add4').files = ev.dataTransfer.files;
        document.getElementById('gallery-photo-add4').dispatchEvent(
            new MouseEvent('change', { bubbles: true })
        )
    });
$('#dragger4').on('dragenter', function (event) {
    event.preventDefault();
})
$('#dragger4').on('dragleave', function () {
})
$('#dragger4').on('dragover', function (event) {
    event.preventDefault();
})


//========= for five 
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img class="height">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add5').on('change', function () {
        imagesPreview(this, 'div.gallery5');
    });
});


$('#browseFile5').on('click', function () {
    $('#gallery-photo-add5').click();
});

$('#dragger5')
    .on('dragover', false)
    .on('drop', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'move';
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        document.getElementById('gallery-photo-add5').files = ev.dataTransfer.files;
        document.getElementById('gallery-photo-add5').dispatchEvent(
            new MouseEvent('change', { bubbles: true })
        )
    });
$('#dragger5').on('dragenter', function (event) {
    event.preventDefault();
})
$('#dragger5').on('dragleave', function () {
})
$('#dragger5').on('dragover', function (event) {
    event.preventDefault();
})

//========= for six 
$(function () {
    // Multiple images preview in browser
    var imagesPreview = function (input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                    $($.parseHTML('<img class="height">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add6').on('change', function () {
        imagesPreview(this, 'div.gallery6');
    });
});


$('#browseFile6').on('click', function () {
    $('#gallery-photo-add6').click();
});

$('#dragger6')
    .on('dragover', false)
    .on('drop', function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.originalEvent.dataTransfer.dropEffect = 'move';
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        document.getElementById('gallery-photo-add6').files = ev.dataTransfer.files;
        document.getElementById('gallery-photo-add6').dispatchEvent(
            new MouseEvent('change', { bubbles: true })
        )
    });
$('#dragger6').on('dragenter', function (event) {
    event.preventDefault();
})
$('#dragger6').on('dragleave', function () {
})
$('#dragger6').on('dragover', function (event) {
    event.preventDefault();
})



// for selecting 
// getting id 
let passport = document.getElementById("passport")
let national = document.getElementById("national")
let driving = document.getElementById("driving")

let Id_card = document.querySelector(".ID-card")
let for_one_profile = document.querySelector(".for-one-profile")

let for_first_profile = document.querySelector(".for-first-profile")


let for_second_profile = document.querySelector(".for-second-profile");


let for_third_profile = document.querySelector(".for-third-profile");

let for_main_profile = document.querySelector(".for-main-profile")

passport.addEventListener("click", () => {
    document.querySelector(".for-first-profile-second").style.display = "none";
    for_first_profile.style.display = "block";
    Id_card.style.display = "none";
    for_one_profile.style.display = "none";
    let getBtn = document.querySelector(".action-button-next");
    let getBtn2 = document.querySelector(".action-button-one");
    getBtn2.style.display = "block";
    getBtn.style.display = "none"
})
national.addEventListener("click", () => {
    for_second_profile.style.display = "block";
    document.querySelector(".for-second-profile-second").style.display = "none";
    Id_card.style.display = "none";
    for_one_profile.style.display = "none";
    let getBtn = document.querySelector(".action-button-next");
    let getBtn2 = document.querySelector(".action-button-two");
    getBtn2.style.display = "block";
    getBtn.style.display = "none"
})
driving.addEventListener("click", () => {
    for_third_profile.style.display = "block";
    document.querySelector(".for-third-profile-second").style.display = "none";
    Id_card.style.display = "none";
    for_one_profile.style.display = "none";
    let getBtn = document.querySelector(".action-button-next");
    let getBtn2 = document.querySelector(".action-button-three");
    getBtn2.style.display = "block";
    getBtn.style.display = "none"

})

function dislayBlock() {
    let for_first_profile_second = document.querySelector(".for-first-profile-second");
    let for_first_profile = document.querySelector(".for-first-profile");
    for_first_profile.style.display = "none"
    for_first_profile_second.style.display = "block";
    let getBtn = document.querySelector(".action-button-next");
    let getBtn2 = document.querySelector(".action-button-one");
    getBtn2.style.display = "none";
    getBtn.style.display = "block"
}

function dislayBlockTwo() {
    let for_second_profile_second = document.querySelector(".for-second-profile-second");
    let for_second_profile = document.querySelector(".for-second-profile");
    for_second_profile.style.display = "none";
    for_second_profile_second.style.display = "block";
    let getBtn = document.querySelector(".action-button-next");
    getBtn.style.display = "block"
    let getBtn2 = document.querySelector(".action-button-two");
    getBtn2.style.display = "none";
}
function dislayBlockThree() {
    let for_third_profile_second = document.querySelector(".for-third-profile-second");
    document.querySelector(".for-third-profile").style.display = "none";
    for_third_profile_second.style.display = "block";
    let getBtn = document.querySelector(".action-button-next");
    getBtn.style.display = "block"
    let getBtn2 = document.querySelector(".action-button-three");
    getBtn2.style.display = "none";
}

// for loading animation 
//    for loading  
$('body').append('<div  class="loader-container"><img src="images/loading.png" class="img-laoding" /></div>');
$(window).on('load', function () {
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader() {
    $(".loader-container").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $(".loader-container").remove(); //makes page more lightweight 
    });
}