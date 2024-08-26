$(document).keydown(function(e){
    var letter = e.key;
    $("h1").text(letter);
})