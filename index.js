if(sessionStorage.getItem("firstLoad")){
    randomDices(); 
    }
    else {
      var firstLoad; 
      sessionStorage.setItem("firstLoad", true);
    } 

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function randomDices(){
    var randomNumber1 = Math.random(1);
    var randomNumber2 = Math.random(1);
    var image1 = document.querySelector(".player1 img");
    var image2 = document.querySelector(".player2 img");

    var source = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    

    randomNumber1 = Math.floor(randomNumber1 * 6 + 1);
    randomNumber2 = Math.floor(randomNumber2 * 6 + 1);

    for (var i = -1; i<=5; i++) {
        if (randomNumber1 === i) {
            image1.src = "./images/"+source[randomNumber1 -1];
        };
    };

    for (var r = -1; r<=5; r++) {
        if (randomNumber2 === r) {
            image2.src = "./images/"+source[randomNumber2 -1];
        };
    };

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "← Player 1 Won"
    }

    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 Won →"
    }

    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerText = "DRAW!"
    }
}