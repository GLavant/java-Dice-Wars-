function rollTheDice(){
    const die = Math.floor(Math.random()*6)
    document.getElementById("roll").innerHTML = die;

}
function rollTheDice2(){
    const die2 = Math.floor(Math.random()*6)
    document.getElementById("roll2").innerHTML = die2;

    if(rollTheDice === rollTheDice2){
        alert("Draw!");
    }
    else if(rollTheDice > rollTheDice2){
        alert("Player 2 Wins!")
    }
    else{
        alert("Player 1 Wins!")
    }
    
}

