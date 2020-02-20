// code for adding burger, eating burger

// on click event

// get ID 

// switch 

// case id = order ---- send a post API

// else send a put API with ID as parameter

$(function () {
  $(".devourmouth").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("id");
    console.log("this: " + JSON.stringify(this));
    console.log("id: " + id);

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      // data: newSleepState
    }).then(
      function () {
        console.log("changed devoured=");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(document).on("submit", ".create-form", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
console.log("create-form click event started");
  var newBurger = {
    burger_name: $("#order").val().trim()
  };
console.log("newBurger: " + JSON.stringify(newBurger));
  // Send the POST request.
  $.ajax("/", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});