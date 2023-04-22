var noOfDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        var buttonInnerHtml = this.innerHTML;
        addAudio(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
        // switch (buttonInnerHtml) {
        //     case "w":
        //         var tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //         break;
        //     case "s":
        //         var tom2 = new Audio('sounds/tom-2.mp3');
        //         tom2.play();
        //         break;
        //     case "j":
        //         var tom3 = new Audio('sounds/tom-3.mp3');
        //         tom3.play();
        //         break;

        //     case "l":
        //         var tom4 = new Audio('sounds/crash.mp3');
        //         tom4.play();
        //         break;

        //     case "d":
        //         var tom5 = new Audio('sounds/tom-4.mp3');
        //         tom5.play();
        //         break;

        //     case "a":
        //         var tom6 = new Audio('sounds/snare.mp3');
        //         tom6.play();
        //         break;
        //     case "k":
        //         var tom7 = new Audio('sounds/kick-bass.mp3');
        //         tom7.play();
        //         break;
        // }

    });

}
document.addEventListener("keypress",function(event){
    //console.log(event);
    addAudio(event.key);
    addAnimation(event.key);
});
function addAudio(key){
    switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "s":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case "j":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

    case "l":
        var tom4 = new Audio('sounds/crash.mp3');
        tom4.play();
        break;

    case "d":
        var tom5 = new Audio('sounds/tom-4.mp3');
        tom5.play();
        break;

    case "a":
        var tom6 = new Audio('sounds/snare.mp3');
        tom6.play();
        break;
    case "k":
        var tom7 = new Audio('sounds/kick-bass.mp3');
        tom7.play();
        break;
}
}
function addAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
}