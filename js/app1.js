// I have done the best that I can do. I simply cannot figure this isht out even with all of the help in the world.
// Give me whatever TF grade that you want as I simply don't care anymore.



 $("#basketball-button").on("click", function() {

      // Storing our giphy API URL for a random cat image
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=basketball";

      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
        .then(function(response) {

        // Saving the image_original_url property
          var imageUrl = response.data.image_original_url;

          // Creating and storing an image tag
          var sportsImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          sportsImage.attr("src", imageUrl);
          sportsImage.attr("alt", "basketball image");

          // Prepending the catImage to the images div
          $("#images").prepend(sportsImage);
        });
    });

  $("#football-button").on("click", function() {

      
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=football";

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {

          var imageUrl = response.data.image_original_url;
          
          var footballImage = $("<img>");

          
          footballImage.attr("src", imageUrl);

          footballImage.attr("alt", "football image");

          
          $("#images").prepend(footballImage);
        });
    });

  $("#baseball-button").on("click", function() {

      
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=baseball";

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {

          var imageUrl = response.data.image_original_url;
          
          var baseballImage = $("<img>");

          
          baseballImage.attr("src", imageUrl);
          
          baseballImage.attr("alt", "movie image");

          
          $("#images").prepend(baseballImage);
        });
    });

  $("#hockey-button").on("click", function() {

      
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=hockey";

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {

          var imageUrl = response.data.image_original_url;
          
          var hockeyImage = $("<img>");

          
          hockeyImage.attr("src", imageUrl);
          
          hockeyImage.attr("alt", "movie image");

          
          $("#images").prepend(hockeyImage);
        });
    });

  $("#golf-button").on("click", function() {

      
      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=golf";

      $.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {

          var imageUrl = response.data.image_original_url;
          
          var golfImage = $("<img>");

          
          golfImage.attr("src", imageUrl);
          
          golfImage.attr("alt", "movie image");

          
          $("#images").prepend(golfImage);
        });
    });
