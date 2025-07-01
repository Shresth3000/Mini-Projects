let compScore = 0;
let userScore = 0;
let mode = "light";

const genCompChoice = () => {
  const arr = ["rock", "paper", "scissors"];
  let indexGen = Math.floor(Math.random() * 3);
  return arr[indexGen];
};

const userscore = document.querySelector("#you");
const compscore = document.querySelector("#comp");
const msg = document.querySelector("#msg");
const circle = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const bgCircle = document.querySelector(".theme");
const bdy = document.querySelector("body");
const mdchng = document.querySelectorAll(".modechange");
const choices = document.querySelectorAll(".options");

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    userScore++;
    userscore.innerText = userScore;
  } else {
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    compScore++;
    compscore.innerText = compScore;
  }
};
 const newHistor = document.createElement("li");
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("Computer Choice is:", compChoice);
  
  let resultText = "";
  let userWin = null;

  if (userChoice === compChoice) {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "dodgerblue";
    msg.style.color = "white";
    resultText = "Draw";
  } else {
    if (userChoice === "rock") {
      userWin = compChoice !== "paper";
    } else if (userChoice === "paper") {
      userWin = compChoice !== "scissors";
    } else {
      userWin = compChoice !== "rock";
    }

    resultText = userWin ? "You Win" : "You Lose";
    showWinner(userWin);
  }

  // Add to history
 const newHistory = document.createElement("li");
  newHistory.textContent = `You: ${userChoice} | Computer: ${compChoice} → ${resultText}`;
  historyList.prepend(newHistory);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice, "was clicked");
    playGame(userChoice);
  });

  // Add hover color change based on mode
  choice.addEventListener("mouseover", () => {
    choice.style.backgroundColor = mode === "light" ? "black" : "white";
  });

  choice.addEventListener("mouseout", () => {
    choice.style.backgroundColor = mode === "light" ? "white" : "black";
  });
});
const hpnl=document.querySelector(".history-panel");
const gh=document.querySelector("h3");
// Theme toggle
circle.addEventListener("click", () => {
  if (mode === "light") {
    circle.style.transform = "translateX(106px) rotate(360deg)";
    themeIcon.src = "images.png";
    circle.style.backgroundColor = "black";
    bgCircle.style.backgroundColor = "azure";
    bdy.style.backgroundColor = "black";
    compscore.style.color = "white";
    userscore.style.color = "white";
    mdchng.forEach(el => el.style.color = "white");
    choices.forEach(el => el.style.backgroundColor = "black");
    mode = "dark";
    hpnl.style.backgroundColor="black";
    gh.style.color="white";
    newHistor.style.color="white";
    newHistor.style.backgroundColor="grey";
  } else {
    circle.style.transform = "translateX(0px) rotate(0deg)";
    themeIcon.src = "sun.png";
    circle.style.backgroundColor = "white";
    bgCircle.style.backgroundColor = "black";
    bdy.style.backgroundColor = "white";
    compscore.style.color = "black";
    userscore.style.color = "black";
    mdchng.forEach(el => el.style.color = "black");
    choices.forEach(el => el.style.backgroundColor = "white");
    mode = "light";
     hpnl.style.backgroundColor="white";
    gh.style.color="black";
    newHistor.style.color="white";
    newHistor.style.backgroundColor="grey";
  }
});
const reset = document.querySelector(".reset");
reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userscore.innerText=userScore;
    compscore.innerText=compScore;
    historyList.innerHTML = "";

});


