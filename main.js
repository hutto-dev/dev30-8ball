const userName = "Tori";

const greeting = userName === "Jane" ? "Hello, Jane!" : "Hello!";

const userQuestion = "Will the Steelers win the Super Bowl this year?";

console.log(`${userName} asked the question: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

if (randomNumber === 0) {
  eightBall = "Might be!";
} else if (randomNumber === 1) {
  eightBall = "Looks like it could be!";
} else if (randomNumber === 2) {
  eightBall = "Absolutely!!";
} else if (randomNumber === 3) {
  eightBall = "Heck no! Never!";
} else if (randomNumber === 4) {
  eightBall = "Could be...but probably not.";
} else if (randomNumber === 5) {
  eightBall = "HECK YES!";
} else if (randomNumber === 6) {
  eightBall = "JUST STOP... THERE IS NO WAY.";
} else {
  eightBall = "You are funny if you think that will happen.";
}

console.log(eightBall);
