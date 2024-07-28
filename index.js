// adding click event to all btn having drum class
// with the use of for loop it makes it easier 
// u can use a var to hold the num of btn and add tht var name to the loop



// ***detecting btn press

// var numofbtn=document.querySelectorAll(".drum").length
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   
    // function body

    var buttoninnerhtml = this.innerHTML;
    makeSound(buttoninnerhtml);
    btnAnimation(buttoninnerhtml);

})
}
 

//***** detecting keyboard press


document.addEventListener("keydown",function(event){ // event is para(shows which key was pressed)
    makeSound(event.key);
    btnAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
            break;
    
            case "a":
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
                case "s":
                    var tom3= new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
    
                case "d":
                    var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                     break;
    
                case "j":
                     var crash= new Audio("sounds/crash.mp3");
                     crash.play();
                    break;
                case "k":
                     var kick= new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
                 case "l":
                      var snare= new Audio("sounds/snare.mp3");
                     snare.play();
                    break;
    
    
        default:console.log(buttoninnerhtml)
            break;
    }
}


function btnAnimation(currkey){
    var activebtn=document.querySelector("."+currkey);

    activebtn.classList.add("pressed")

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}