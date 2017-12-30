// pseudo code 

//link documents 

console.log("we are linked!");

//get document ready 

$(document).ready(function() {
    console.log("I'm reeaaady!")
    // setting up array of animals 

    var animals = ["Dog", "Cat", "Owl", "Llama", "Goat", "chinchilla"];


    for (var i = 0; i < animals.length; i++) {
        //loop thru array items and make them into buttons 
        //console logging for testing purposes
        console.log(animals[i]);  
      

        

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
            })

        })
        

    }

    
   
});

//user clicks on button, call API to return 10 gifs 

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