
$(document).ready(function () {
    // array to hold the random numbers for the 4 jewels
    var jewels = [];
    var wins = 0;
    var losses = 0;
    // var jewelNum = 0;
    // this is the target number
    var random = "";
    // this is the result of the addition of jewels clicked
    var result = 0;
    // this is so the user can't click after win/loss
    var isClicked = false;

    
    // create initialization function which will reset upon win/loss or at start
    

    function initializeGame() {
        $(".containerJewels").show(); 
        $("#loser").hide();
        $("#winner").hide();  
        createRandom();
        var jewelBlue = "";
        var jewelRed = "";
        var jewelWhite = "";
        var jewelGreen = "";
        var random = "";
        var result = 0;
        var isClicked = false;
        
        $("#blue, #red, #white, #green, #result").empty();
        

    }
    // create a random number for var random from 19-120
    function createRandom(min, max) {
        random = Math.floor(Math.random() * (120 - 20) + 20);

        $("#randomNum").text("The number to guess is: " + random);
        //console.log(random);


    }
    

    // need to create random numbers for jeweles from 1-12 - the jewel will keep the random number until win/loss, but will reset to a new value upon initializeGame()
     
    function makeJewelsRandom() {
        jewels = [];
        while (jewels.length < 4) {
            var randomJewelNum = Math.floor(Math.random() * 12) + 1;
            if (jewels.indexOf(randomJewelNum) === -1) { jewels.push(randomJewelNum) }
            console.log(jewels);
        }
        jewelBlue = jewels[0];
        jewelRed = jewels[1];
        jewelWhite = jewels[2];
        jewelGreen = jewels[3];
        isClicked = true;
    

    }

    makeJewelsRandom();

    
    

    if (isClicked === true) {
    // create an on click event which will add the assigned number to any click of jewels until either result equals random or goes over random - and show the value in #playerScore 
        
        $(".jewel").on("click", function () {

            var num1 = $(this).attr("id");
            
            if (num1 === "blue") {
                result += jewelBlue;
            } else if (num1 === "red") {
                result += jewelRed;
            } else if (num1 === "white") {
                result += jewelWhite;
            } else if (num1 === "green") {
                result += jewelGreen;
            }
            console.log(num1);
            
            
           
            $("#result").text("Your total so far: " + result);
            // create validation - if the result === random
            if(result === random) {
            // $("#winner").show();
            $(".containerJewels").hide();
            $("#winner").show(); 
            //alert("you won!");
            wins++;
            // wins will add to wins in HTML
            $("#wins").text("Wins: " + wins);
            isClicked = false;
            result = 0;
            setTimeout(initializeGame, 3000);
                  
            
            // if result > random
            } else if 
                (result > random) {
                    
                    
                    $(".containerJewels").hide();
                    $("#loser").show(); 
                    
                     //alert("You lose!");
                     // losses will add to losses in HTML
                    losses++
                    isClicked = false;
                    $("#losses").text("Losses: " + losses);
                    result = 0;
                    setTimeout(initializeGame, 3000);
                    
                                   
                    
                    
                }
            });

    }
    initializeGame();

   
  
    });
    



    
   

    

    


