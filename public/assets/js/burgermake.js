
$(function () {
  $(".devourmouth").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("id");
    // console.log("this: " + JSON.stringify(this));
    // console.log("id: " + id);

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
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
  // preventDefault on the submit event.
  event.preventDefault();
  // console.log("create-form click event started");
  var newBurger = {
    burger_name: $("#order").val().trim()
  };
  if (newBurger.burger_name.length > 70) {
    alert("That's too much burger! Try one with less than 70 characters.");
  }
  else {
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
  }
});