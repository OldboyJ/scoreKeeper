let playerOne = document.querySelector("#p1")
let playerTwo = document.querySelector("#p2")
let p1Display = document.querySelector("#p1Display")
let p2Display = document.querySelector("#p2Display")
let resetButton = document.getElementById("reset")
let numInput = document.querySelector("input")
let p = document.querySelector("#p")
let playerOneScore = 0; playerTwoScore = 0
let gameOver = false
let winningScore = 5

playerOne.addEventListener("click", function() {
  if(!gameOver) {
    playerOneScore++
    if(playerOneScore === winningScore) {
      p1Display.classList.add("winner")
      gameOver = true
    }
    p1Display.textContent = playerOneScore
  }
})
playerTwo.addEventListener("click", function() {
  if(!gameOver) {
    playerTwoScore++
    if(playerTwoScore === winningScore) {
      p2Display.classList.add("winner")
      gameOver = true
    }
    p2Display.textContent = playerTwoScore
  }
})
resetButton.addEventListener("click", function() {
  p1Display.textContent = 0
  p2Display.textContent = 0
  playerOneScore = 0; playerTwoScore = 0
  p1Display.classList.remove("winner")
  p2Display.classList.remove("winner")
  gameOver = false
})
numInput.addEventListener("change", function() {
  p.textContent = numInput.value
})
