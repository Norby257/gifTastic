// pseudo code 

//link documents 

console.log("we are linked!");

//get document ready 

$(document).ready(function() {
    console.log("I'm reeaaady!")
    // setting up array of animals 

    var topics = ["Dog", "Cat", "Owl", "Llama", "Goat"];


    for (var i = 0; i < topics.length; i++) {
        //loop thru array items and make them into buttons 
        //console logging for testing purposes
        console.log(topics[i]);  
        //append a button for each element in array to the button holder div 
       var a = $("<button>");
       a.addClass("topic");
       a.attr("data-animal", topics[i]);
       a.text(topics[i]);
       $("#button-holder").append(a);
        //I need to put a unique label on each button, not the same name for all of them 

                //add data value/attribute of "animal" to each button
                //use .data method here 

        
    };

    //end for loop 

        

        //On click event for ALL button elements 

        $("button").on("click", function() {
            //test on click 
            console.log("I've been clicked!");

            // get the exact button that was clicked
            var animal = $(this).attr("data-animal");

            //setting up query URL to search Giphy
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=RxCNYrr7YzOrNwbdhKAnXk4zUEIBMdPJ&limit=10";

            //start AJAX GET Req 

            $.ajax({
                url: queryURL,
                method: "GET"
            })
            
            //after data is back from API 

            .done(function(response) {
                //storing an array of results in var called results
                var results = response.data;

                //loop thru each result 
                for (var i = 0; i < results.length; i++) {
                    //we only want g and pg rated gifs
                    if(results[i].rating !== "r" && results[i].rating !="pg-13") {
                        //make a div 
                        var gifDiv = $("<div class='item'>");

                        //saving result items rating (bc we append this later)
                        var rating = results[i].rating;

                        //create a p tag for the rating 
                        var p = $("<p>").text("Rating: " + rating);

                        //create img tag for gif 
                        var animalImage = $("<img>");
                          //the gif that is displayed is static  - needs to be fixed_height_still
                        
                         //

                        animalImage.attr("src", results[i].images.fixed_height_still.url);

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
            //test it works 
            console.log("yay you clicked the picture"); 
            
            animalImage.attr("src", results[i].images.fixed_height.url);
            
            

        });

        //end click function for paugse and start gif 


        //function that takes user input, appends to array, and makes a button (that can be clicked)

    

    
   
});

//user clicks on button, call API to return 10 gifs 

//ok so it displays the same 5 gifs twice - that's odd 


//display the gif image 
//display the gif rating 


// for each gif 
    // click to pause
    //OOH double click to start it 


//form when they submit an animal 

//add that to the array of buttons 
//make the button display on the screen 
//similar to the above, when that button is clicked, call api to return 10 gifts

//nice to have -when mouse is on a button, change it's color 