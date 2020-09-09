// Variables
var colorBox = document.getElementsByClassName("color-box")[0];
var colorCreatorButton = document.getElementsByClassName("color-creator")[0];

// Generates a random number
function getRandomNumber(min, max)
{
    return Math.ceil((Math.random() * (max - min)) + min - 1);
}

// Generates a color code
function getRandomColor()
{
    var color = {
        red: getRandomNumber(0, 255),
        green: getRandomNumber(0, 255),
        blue: getRandomNumber(0, 255)
    }

    colorBox.style.background = "rgb(" + color.red + "," + color.green + "," + color.blue + ")";
}

// Initialization
getRandomColor();
colorCreatorButton.onclick = getRandomColor;