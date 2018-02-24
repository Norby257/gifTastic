// pseudo code

//link documents

console.log("we are linked!");

//get document ready

$(document).ready(function() {
  console.log("I'm reeaaady!");

  // setting up initial  array of animals

  var topics = ["Dog", "Cat", "Owl", "Llama", "Goat"];

  //functions and events

  //create initial buttons
  function makeButton() {
    //prevent appending duplicate buttons
    $("#button-holder").empty();

    for (var i = 0; i < topics.length; i++) {
      //loop thru array items and make them into buttons
      //console logging for testing purposes
      console.log(topics[i]);
      //append a button for each element in array to the button holder div
      var a = $("<button>");
      //add class
      a.addClass("topic");
      //add attribute
      a.attr("data-animal", topics[i]);
      //append the text to the buttons
      a.text(topics[i]);
      $("#button-holder").append(a);
    }
  }

  //end for loop

  //event listener for when submit button is clicked
  $("#add-animal").on("click", function(event) {
    //prevent page refreshing
    event.preventDefault();
    //test button
    console.log("submit button has been clicked");
    //get user data and store in a variable
    var topic = $("#animal-input")
      .val()
      .trim();

    //log to console to confirm value

    console.log(topic);
    //add this variable to the array

    topics.push(topic);
    //testing to make sure that this is added to array
    console.log(topics);
    makeButton();
  });

  //now we have to make sure it's made into a button
  //see the "add a movie bro" activity
  makeButton();

  //On click event for ALL button elements
  //user clicks on button, call API to return 10 gifs

  $("button").on("click", function() {
    //test on click
    console.log("I've been clicked!");

    // get the exact button that was clicked
    var animal = $(this).attr("data-animal");

    //setting up query URL to search Giphy
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&api_key=RxCNYrr7YzOrNwbdhKAnXk4zUEIBMdPJ&limit=10";

    //start AJAX GET Req

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      //after data is back from API

      .done(function(response) {
        //storing an array of results in var called results
        var results = response.data;
        console.log(results);

        //start for loop
        for (var i = 0; i < results.length; i++) {
          //only chose g and pg related gifs
          if (results[i].rating !== "r" && results[i].rating != "pg-13") {
            //make a div
            var gifDiv = $("<div class='item'>");

            //saving result items rating (bc we append this later)
            var rating = results[i].rating;

            //display gif rating by making a <p>
            var p = $("<p>").text("Rating: " + rating);

            //create <img> for gif
            var animalImage = $("<img>");

            //add class 'gif' to each image tag
            animalImage.addClass("gif");

            ///fix the tags in the html one --as per pausing gifs assignment

            //and then grab the actual gif image, then make an event listener that swaps out the state the still images have _s -- try original
            //commenting out below line so i don't break it
            animalImage.attr("src", results[i].images.original.url);
            // animalImage.attr("data-still", "data-animate", "data-state");
            console.log(animalImage);

            gifDiv.append(p);
            gifDiv.append(animalImage);

            //pre-pending gifs to "gifs-appear-here" div
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
      });

    //end AJAX req
  });
  //end button function

  //start click function on img.gif -pause and start gif
  //have two versions and just alternate them?

  $(".gif").on("click", function() {
    //test it works  --also, let's use the $this keyword so that way we can get the exact image...
    $(this);
    console.log("yay you clicked the picture");
    var state;
    if (results[i].images.original.url) {
    }
    //check state of image
    //if state is still, animate it.
    if (state === "still") {
      $(this).attr("animate");
    } else if (state === "animate") {
      $(this).attr("still");
    }
    //otherwise if image is animated, pause it

    // animalImage.attr("src", results[i].images.fixed_height.url);
  });

  //end click function for pause and start gif
});
