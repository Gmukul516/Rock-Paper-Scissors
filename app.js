let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const mesg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rdidx = Math.floor(Math.random() * 3); //Math.random() will generate numbers between 0 and 1
  return options[rdidx];
};

const showwinner = (userwin, userChoice, compchoice) => {
  if (userwin) {
    console.log("YOU WON");
    userscore++;
    userscorepara.innerText = userscore;
    mesg.innerText = `YOU WON! ${userChoice} beats ${compchoice}`;
    mesg.style.backgroundColor = "green";
  } else {
    console.log("YOU LOST");
    compscore++;
    compscorepara.innerText = compscore;
    mesg.innerText = `YOU LOST! ${compchoice} beats ${userChoice}`;
    mesg.style.backgroundColor = "red";
  }
};

const playgame = (userChoice) => {
  //USERCHOICE
  console.log("userchoice = ", userChoice);
  //modular approach->way to define each work for function
  //COMPCHOICE
  const compchoice = gencompchoice();
  console.log("compchoice = ", compchoice);

  if (userChoice === compchoice) {
    //DRAW GAME
    console.log("GAME DRAW");
    mesg.innerText = "GAME DRAW! PLAY AGAIN";
    mesg.style.backgroundColor = " pink ";
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked", userChoice);
    playgame(userChoice);
  });
});
