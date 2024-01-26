var noteButton = document.querySelectorAll(".drum");


for(x of noteButton){
    x.addEventListener("click", function(){
        var audio = new Audio("sounds/"+this.innerText+".mp3");
        audio.play();
        buttonAnimation(this.innerText);
    })
    
}

for(x of noteButton){
    x.addEventListener("keydown", function(event){
        var audio = new Audio("sounds/"+event.key+".mp3");
        audio.play();
        buttonAnimation(event.key);
    })
    
}

function buttonAnimation(keyPressed){
    var activeButton = document.querySelector("."+ keyPressed)
    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed"); }, 100)
}