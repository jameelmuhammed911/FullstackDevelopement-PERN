var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var l = 0;


$(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});

function nextSequence() {
    userClickedPattern = [];
    $("#level-title").html("Level " + l);
    l++;
    var randomNumber = Math.floor(Math.random()*3);
    var randomChosenColor =  buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function playSound(key) {
    var audio = new Audio("./sounds/" + key + '.mp3');
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed")
  }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
          }, 1000);
        }
    }else{
        console.log("wrong");
        playSound("wrong");
        $("#level-title").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
}

function startOver() {
    l = 0;
    started = false;
    gamePattern = [];
}