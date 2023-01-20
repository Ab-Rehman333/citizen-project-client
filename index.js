
function locationChange() {
    window.location.assign("./first-page-error/index.html");

}

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
