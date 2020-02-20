// code for adding burger, eating burger

// on click event

// get ID 

// switch 

// case id = order ---- send a post API

// else send a put API with ID as parameter

$(function() {
    $(".devourmouth").on("click", function(event) {
      var id = $(this).attr("id");
      console.log("this: " + JSON.stringify(this));
      console.log("id: " + id);
  
      // Send the PUT request.
      $.ajax("/" + id, {
        type: "PUT",
        // data: newSleepState
      }).then(
        function() {
          console.log("changed devoured=");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });