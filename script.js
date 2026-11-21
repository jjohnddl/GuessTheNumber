let random_numbers;
let maxrange;


function reseter(){
maxrange = parseInt(Math.floor(Math.random() * 150));
random_numbers = Math.floor(Math.random() * (maxrange - 1 + 1)) + 1;
document.getElementById("range").innerHTML = `<strong>1 - ${maxrange}</strong>`;
document.getElementById("userguess").value = "";
}

const guessBtn = document.getElementById("guesbtn");
const userInput = document.getElementById("userguess");
const newgameBtn = document.getElementById("newgamebtn");
function popIn() {
  const el = document.getElementById('Pay');
  el.style.display = 'block'; // or flex, depending on your layout
}
reseter();
guessBtn.addEventListener("click", function(e){
    let userGuess = userInput.value;
if(userGuess.trim().length === 0){
    alert("U guess none");
}
else{
popIn();


}

    // if (userGuess === random_numbers) {
    //     alert("Correct!");
    // } else if (userGuess < random_numbers) {
    //     alert("Too low!");
    // } else {
    //     alert("Too high!");
    // }
});

newgameBtn.addEventListener("click", function(e){
    reseter();
})


