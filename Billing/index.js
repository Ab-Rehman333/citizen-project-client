window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

//    for loading
$("body").append(
    '<div  class="loader-container"><img src="images/loading.png" class="img-laoding" /></div>'
);
$(window).on("load", function () {
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader() {
    $(".loader-container").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $(".loader-container").remove(); //makes page more lightweight
    });
}

function valid() {
    let getLetters = document.querySelector(".letters")
    let old = document.querySelector(".old");
    let okay = document.querySelector(".okay");
    let lets = document.querySelector(".lets");
    let trY = document.querySelector(".try");
    let another = document.querySelector(".another");

    let letters = /^[A-Z][a-z][A-z\s]*$/;
    if (getLetters.value.match(letters)) {
        getLetters.style.borderColor = "silver";
        //   return true;
    }
    else {
        getLetters.style.borderColor = "red";

        //   return false;
    }

    if (old.value.length <= 3) {
        old.style.borderColor = "red";
    }
    else {
        old.style.borderColor = "#ccc"
    }

    if (okay.value.length <= 3) {
        okay.style.borderColor = "red";
    }
    else {
        okay.style.borderColor = "#ccc"
    }

    if (lets.value.length <= 3) {
        lets.style.borderColor = "red";
    }
    else {
        lets.style.borderColor = "#ccc"
    }

    if (trY.value.length <= 3) {
        trY.style.borderColor = "red";
    }
    else {
        trY.style.borderColor = "#ccc"
    }

    if (another.value.length <= 3) {
        another.style.borderColor = "red";
    }
    else {
        another.style.borderColor = "#ccc"
    }

}

let autocomplete;
let address1Field;
let address2Field;
let postalField;

function initAutocomplete() {
  address1Field = document.querySelector("#ship-address");
  address2Field = document.querySelector("#address2");
  postalField = document.querySelector("#postcode");
  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    componentRestrictions: { country: ["us", "ca"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  address1Field.focus();
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  for (const component of place.address_components) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        break;
      }

      case "route": {
        address1 += component.short_name;
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      }
      case "locality":
        document.querySelector("#locality").value = component.long_name;
        break;
      case "administrative_area_level_1": {
        document.querySelector("#state").value = component.short_name;
        break;
      }
      case "country":
        document.querySelector("#country").value = component.long_name;
        break;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  address2Field.focus();
}

window.initAutocomplete = initAutocomplete;

$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );