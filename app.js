// pseudo code 

//link documents 

console.log("we are linked!");

//get document ready 

$(document).ready(function() {
    console.log("I'm reeaaady!")
    // setting up array of animals 

    var topics = ["Dog", "Cat", "Owl", "Llama", "Goat"];

//this should be a function that can be called when the submit button is clicked 
        //function that takes user input, appends to array, and makes a button (that can be clicked)

function makeButton() {  
    //prevent repeat buttons
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


    //function handles event where add animal / submit is clicked
    $('#add-animal').on('click', function(event) {
        event.preventDefault();

        console.log('submit button has been clicked');
        //get user data and store in a variable 
        var topic = $("#animal-input").val().trim();
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

        $("button").on("click", function() {
            //test on click 
            console.log("I've been clicked!");

            // get the exact button that was clicked
            var animal = $(this).attr("data-animal");

            //setting up query URL to search Giphy
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=RxCNYrr7YzOrNwbdhKAnXk4zUEIBMdPJ&limit=10";
            //user clicks on button, call API to return 10 gifs 

            //start AJAX GET Req 

            $.ajax({
                url: queryURL,
                method: "GET"
            })
            
            //after data is back from API 

            .done(function(response) {
                //storing an array of results in var called results
                var results = response.data;
                

                //start for loop 
                for (var i = 0; i < results.length; i++) {
                    //only chose g and pg related gifs 
                    if(results[i].rating !== "r" && results[i].rating !="pg-13") {
                        //make a div 
                        var gifDiv = $("<div class='item'>");

                        //saving result items rating (bc we append this later)
                        var rating = results[i].rating;

                        //display gif rating by making a <p>
                        var p = $("<p>").text("Rating: " + rating);

                        //create <img> for gif 
                        var animalImage = $("<img>");
                         
                         ///fix the tags in the html one --as per pausing gifs assignment 

                         //and then grab the actual gif image, then make an event listener that swaps out the state the still images have _s -- try original 
                         //commenting out below line so i don't break it
                        animalImage.attr("src", results[i].images.original.url);
                        animalImage.attr("data-still", "data-animate", "data-state");
                        //and then, we need to set up an if condition to check data state and then change it 
                        //may have to use concatenation - easier than doing two ajax requests 
                        // animalImage.attr("src", results[i].images.fixed_height_still.url);
                        //find a class to add this even listener to 


                        // $(".class-name").on("click", function () {
                        //     if (state === "still") {
                        //         $(this).attr("src", $(this).attr("data-animate"));
                        //         $(this).attr("data-state", "animate");
                        //       } else {
                        //         $(this).attr("src", $(this).attr("data-still"));
                        //         $(this).attr("data-state", "still");
                        //       }
                        // });

                        //try this tomorrow 

                        //if state is animated, then add _s to request url above so it is still 
                        
                      

                        //display img tag and p to gifDiv 
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
        //start click function on img -pause and start gif

        $("img").on("click", function() {
            //test it works  --also, let's use the $this keyword so that way we can get the exact image... 
            console.log("yay you clicked the picture"); 
            
            // animalImage.attr("src", results[i].images.fixed_height.url);
            
            

        });

        //end click function for pause and start gif 



    

    
   
});



