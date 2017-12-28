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

        console.log(animals[i]);  
        //add them to div   
        $("#button-holder").append(animals[i]);

        //add the data-attribute

        //make it a clickable button 
        

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