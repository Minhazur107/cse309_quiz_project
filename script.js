const quizData = [
 {
  question: "Which of the following is used to structure content on the web?",
  options: ["CSS", "JavaScript", "HTML", "Python"],
  answer: "HTML"
 },
 {
  question: "Which language r Which tag is used to create a hyperlink in HTML?uns in a web browser?",
  options: ["<link>", "<a>", "<href>", "<hyperlink>"],
  answer: "<a>"
 },
 {
  question: "What Which of the following is a JavaScript framework? CSS stand for?",
  options: ["Django","Flask","Laravel","React"],
  answer: "React"
 },
 {
  question: "Which What is the default port number for HTTP? element do we use to include JavaScript?",
  options: ["<22>", "<443>", "<80>", "<21>"],
  answer: "<80>"
},
{
  question: "Which tag is used to insert an image in HTML??",
  options: ["<pic>","<img>","<image>","<media>"],
  answer: "<img>"
}
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
 const current = quizData[currentQuestion];
 questionEl.textContent = current.question;
 answersEl.innerHTML = "";

 current.options.forEach(option => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "answer";
  input.value = option;
  label.appendChild(input);
  label.appendChild(document.createTextNode(option));
  answersEl.appendChild(label);
 });
}

function getSelectedAnswer() {
 const options = document.getElementsByName("answer");
 for (let option of options) {
  if (option.checked) return option.value;
 }
 return null;
}

function showScore() {
 questionEl.textContent = "Quiz Finished!";
 answersEl.innerHTML = "";
 nextBtn.style.display = "none";
 scoreEl.textContent = `You scored ${score} out of ${quizData.length}.`;
 localStorage.setItem("lastQuizScore", score);
}

nextBtn.addEventListener("click", () => {
 const selected = getSelectedAnswer();
 if (!selected) {
  alert("Please select an answer!");
  return;
 }

 if (selected === quizData[currentQuestion].answer) {
  score++;
 }

 currentQuestion++;
 if (currentQuestion < quizData.length) {
  showQuestion();
 } else {
  showScore();
 }
});

showQuestion();


window.onload = () => {
 const lastScore = localStorage.getItem("lastQuizScore");
 if (lastScore !== null) {
   scoreEl.textContent = `Last Score: ${lastScore}`;
 }
};
