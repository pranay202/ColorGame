var numOfSquares = 6;

var colors = generateRandomColors(numOfSquares);
var square = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("rgbDisplay");
var pickedColor = pickColor();
// Check we need to default one color to be compared while we click on boxes "V1"
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
        numOfSquares = 3;
        colors = generateRandomColors(numOfSquares);
        pickedColor = pickColor();
        rgbDisplay.textContent = pickedColor;
        for (var i = 0; i < square.length; i++) {
            //	  make the 3 sauqares as we will generatre just 3 random colors ... so Colors 1 will let the square 1 = color 1
            if (colors[i]) {
                square[i].style.backgroundColor = colors[i];

            } else {
                square[i].style.display = "none";

            }

        }

    } else if (event.keyCode == 39) {
        alert('Right was pressed');
    }
}, true);
easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        //	  make the 3 sauqares as we will generatre just 3 random colors ... so Colors 1 will let the square 1 = color 1
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];

        } else {
            square[i].style.display = "none";

        }

    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        //	  make the 3 sauqares as we will generatre just 3 random colors ... so Colors 1 will let the square 1 = color 1

        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";

    }


});

resetButton.addEventListener("click", function() {
    //	AS I am going to referesh the page first thing :) & I have already make it a var so just colors =....
    colors = generateRandomColors(numOfSquares);
    //Then our target color that need to be picked 
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

rgbDisplay.textContent = pickedColor;
var message = document.getElementById("displyMessage");


for (var i = 0; i < square.length; i++) {
    //add Intial color to boxes
    square[i].style.backgroundColor = colors[i];

    // GRab color of picked  square while Click "Listener" and get it
    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        // Compare Color of Square box to picked Color
        if (clickedColor === pickedColor) {
            //			alert("Correct!");
            message.textContent = "Correct!";
            message.style.color = "green";
            chnageColors(clickedColor);
            resetButton.textContent = "Play Again?";
            para.style.background = clickedColor;

            if(resetButton=true){
                para.style.background = reset;
            }
        } else {
            		alert("Wroooooong");
            //			if wrong we will let each box the same background to be faded out!
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
            message.style.color = "#f54748"
        }
    });

}


//To make it a clean code, so function will looks better (When correct anwer, all boxes became same and h1 color as well )
function chnageColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

//For Random Color tp be choosen as the game concept and for every play again!
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++)
        //get a random color and push into array and for is used as refernce for 3 numbers of colors or 6 colors in array
        arr.push(randomColor())
    return arr;

}

function randomColor() {
    //	pick a "red" from 0 to  255  (RGB)
    var r = Math.floor(Math.random() * 256);
    //	pick a "Green" from 0 to  255  (RGB)
    var g = Math.floor(Math.random() * 256);
    //	pick a "Blue" from 0 to  255  (RGB)	
    var b = Math.floor(Math.random() * 256);
    //	return "rgb(" + r + ", " + g + ", " + b + ")";
    return `rgb(${r}, ${g}, ${b})`;
}