//dolozyc kod zwiazany z wyswietlaniem kwadratow w zaleaznosci od poziomu trudnosci


var isCorrect = false;

function gameStart(){
    var table = document.querySelector("#contentContainer");
    var easy = document.querySelector("li:nth-of-type(2)");
    var hard = document.querySelector("li:nth-of-type(3)");
    var playButton = document.querySelector("li:nth-of-type(1)");
    easy.style.display ="none";
    hard.style.display = "none";
    playButton.style.margin = "auto";
    playButton.style.paddingRight = "2.5%";
    playButton.addEventListener("click", function(){
        if(playButton.textContent == "PLAY"){
        easy.style.display = "inline";
        hard.style.display = "inline";
        hard.style.paddingRight = "2%";
        playButton.style.display = "none";
        }
    })
    easy.addEventListener("click", function(){
        playButton.style.display = "inline";
        playButton.textContent = "NEW COLORS";
        easy.style.display = "none";
        hard.style.display = "none";
        testColor(1);
        randomizeColor(1);
    })
    hard.addEventListener("click", function(){
        playButton.style.display = "inline";
        playButton.textContent = "NEW COLORS";
        hard.style.display = "none";
        easy.style.display = "none";
        testColor(0);
        randomizeColor(0);
    })
  
}
function randomizeColor(isEasy){
    var squares = document.querySelectorAll("td");
    var redScale = Math.floor((Math.random()*255)+1);
    var greenScale = Math.floor((Math.random()*255)+1);
    var blueScale = Math.floor((Math.random()*255)+1);
    var rgbDisplayer = document.querySelector("h1");
    var colorTester = document.querySelector("h3");
    var randomSquare;
    var playAgainButton = document.querySelector("li:first-of-type");
    if(isEasy){
        randomSquare = Math.floor((Math.random() * 3)+0);
    }
    else if(!isEasy){
        randomSquare = Math.floor((Math.random() *5)+0);
    }
    
    colorTester.style.color = "rgb(" + redScale + ", " + greenScale + ", " + blueScale + ")";

    for(var i = 0; i < squares.length; i++){
        if(isEasy){
         squares[4].style.display = "none";
         squares[5].style.display = "none";
        }
         squares[i].style.backgroundColor ="rgb(" + Math.floor((Math.random()*255)+1) + ", " + Math.floor((Math.random()*255)+1) + ", " + Math.floor((Math.random()*255)+1) + ")";
         console.log(randomSquare);
     
        squares[randomSquare].style.backgroundColor ="rgb(" + redScale + ", " + greenScale + ", " + blueScale + ")";    
        squares[i].addEventListener("click", function(){
            if(this.style.backgroundColor === colorTester.style.color && playAgainButton.textContent !=="GREAT! PLAY AGAIN?"){
                isCorrect = true;
                if(isEasy){
                testColor(1);
                }
                else{
                testColor(0);
                }
                console.log("To chyba ten!");
            }
            else if(this.style.backgroundColor !== colorTester.style.color){
                this.style.backgroundColor = "#000000";
            }
                
        });
        
    }
    rgbDisplayer.textContent = "RGB(" + redScale + ", " + greenScale + ", " + blueScale + ")";
    console.log(colorTester.style.color);
}
function testColor(isEasy){
var colorTester1 = document.querySelector("h3");
var squares = document.querySelectorAll("td");
var playAgainButton = document.querySelector("li:first-of-type");
playAgainButton.addEventListener("click", function(){
this.textContent = "NEW COLORS";
if(isEasy){
    randomizeColor(1);
}
else{
    randomizeColor(0);
}
    isCorrect = false;
})
for(var i = 0; i < squares.length; i++){
    if(isCorrect == true){
    squares[i].style.backgroundColor=colorTester1.style.color;
    }
}
    if(isCorrect == true){
         playAgainButton.textContent = "GREAT! PLAY AGAIN?"; 
    }
    
}
function buttonsHover(){
var lis = document.querySelectorAll("li");
var navUl = document.querySelector("#navBar > ul")

for(var i = 0; lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.style.color = "#ffffff";
        
        
    })
    lis[i].addEventListener("mouseout", function(){
        this.style.color = "#4286f4";
    })
}
}

gameStart();
buttonsHover();
        