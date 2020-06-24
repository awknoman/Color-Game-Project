var numSquare = 6;
var colors = [];
var pickedColor = pickRandomColor();

//SELECTORS LIST
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");
//END OF SELECTORS LIST.

init();

// FUNCTIONS LIST.
function init() {
    modeButtonsInit();
    setUpSquares();
    reset();
}

function modeButtonsInit() {
    for(var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquare = 3 : numSquare = 6;
            reset();    
        });
    }
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor)
            {
                // console.log("RIGHT!");
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    colors = colorGenerator(numSquare);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++)
    {
        squares[i].style.display = "inline-block";
        colors[i] ? squares[i].style.backgroundColor = colors[i] : squares[i].style.display = "none";
    }

    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    this.textContent = "New Colors?";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    for(var i = 0; i < colors.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function colorGenerator(numColors) {
    var arr = [];

    for(let i = 0; i < numColors; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return( "rgb(" + red + ", " + green + ", " + blue + ")" );
}