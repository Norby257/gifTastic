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

                        $(document).ready(function()
                        {
                            $("#imgAnimate").hover(
                                function()
                                {
                                    $(this).attr("src", "GIF URL HERE");
                                },
                                function()
                                {
                                    $(this).attr("src", "STATIC IMAGE URL HERE");
                                });
                        });
                        
                        
                      

                        //display img tag and p to gifDiv 