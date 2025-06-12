const questions = [
 
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correctAnswer: "JavaScript"
  },
   {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    correctAnswer: "4"
  },
  
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style System",
      "Creative Style Syntax"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
  question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
  options: [
    "Oxygen",
    "Carbon Monoxide",
    "Nitrogen",
    "Carbon Dioxide"
  ],
  correctAnswer: "Carbon Dioxide"
},
{
  question: "In what year did Nigeria gain independence from British colonial rule?",
  options: [
    "1957",
    "1960",
    "1963",
    "1970"
  ],
  correctAnswer: "1960"
},
{
  question: "What is the main purpose of an operating system in a computer?",
  options: [
    "To provide internet access",
    "To compile programming code",
    "To manage hardware and software resources",
    "To enhance graphics quality"
  ],
  correctAnswer: "To manage hardware and software resources"
},
{
  question: "Which planet is known as the 'Red Planet'?",
  options: [
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn"
  ],
  correctAnswer: "Mars"
},
{
  question: "Who is the author of the famous play 'Romeo and Juliet'?",
  options: [
    "William Wordsworth",
    "William Shakespeare",
    "George Orwell",
    "Jane Austen"
  ],
  correctAnswer: "William Shakespeare"
},
{
  question: "What does the acronym 'URL' stand for in web terminology?",
  options: [
    "Uniform Resource Locator",
    "Universal Reference Link",
    "User Readable Language",
    "Unified Routing Layer"
  ],
  correctAnswer: "Uniform Resource Locator"
},
{
  question: "Which human organ is primarily responsible for detoxification?",
  options: [
    "Lungs",
    "Liver",
    "Kidneys",
    "Heart"
  ],
  correctAnswer: "Liver"
},
{
  question: "What is the currency of Japan?",
  options: [
    "Won",
    "Yuan",
    "Yen",
    "Ringgit"
  ],
  correctAnswer: "Yen"
},
{
  question: "Which of the following is NOT a programming language?",
  options: [
    "Python",
    "Ruby",
    "HTML",
    "Jupiter"
  ],
  correctAnswer: "Jupiter"
},
{
  question: "What is the boiling point of water at standard atmospheric pressure?",
  options: [
    "100°C",
    "90°C",
    "120°C",
    "80°C"
  ],
  correctAnswer: "100°C"
},
{
  question: "Who was the first man to step on the moon?",
  options: [
    "Buzz Aldrin",
    "Neil Armstrong",
    "Yuri Gagarin",
    "Michael Collins"
  ],
  correctAnswer: "Neil Armstrong"
},
{
  question: "What is the function of the Ctrl + Z shortcut in most computer programs?",
  options: [
    "Redo",
    "Zoom in",
    "Undo",
    "Save"
  ],
  correctAnswer: "Undo"
},
{
  question: "Which African country is the largest by land area?",
  options: [
    "Nigeria",
    "Algeria",
    "Sudan",
    "South Africa"
  ],
  correctAnswer: "Algeria"
},
{
  question: "In economics, what does GDP stand for?",
  options: [
    "Gross Domestic Product",
    "Global Development Plan",
    "General Data Protection",
    "Gross Demand Percentage"
  ],
  correctAnswer: "Gross Domestic Product"
},
{
  question: "Which of the following is a renewable source of energy?",
  options: [
    "Coal",
    "Natural Gas",
    "Solar",
    "Petroleum"
  ],
  correctAnswer: "Solar"
},
{
  question: "What is the chemical symbol for gold?",
  options: [
    "Gd",
    "Au",
    "Ag",
    "Go"
  ],
  correctAnswer: "Au"
}

];


let currentQuestionIndex = 0;
const currentQuestionIndexNumber = 1;
let score = 0;

function startQuiz() {
  alert(questions.length + " Questions are Available to be anwered");
  document.querySelector('.displayedAnswer').style.display = 'flex';
  document.querySelector('.containerPart').style.display = 'none';
  document.querySelector('.quiz-content').innerHTML = ''; // reset questions
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}


function showQuestion() {
  const questionElement = document.querySelector('.question');
  const optionsContainer = document.querySelector('.optionsContainer');
  optionsContainer.style.display ="flex"
optionsContainer.style.flexWrap = "wrap";

  optionsContainer.style.gap ="20px"
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent =`Q${currentQuestionIndex+1} : ${currentQuestion.question} `;
  optionsContainer.innerHTML = ''; // Clear old options

  currentQuestion.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.classList.add('lineAnswer');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'option';
    radio.value = option;
    radio.id = `option${index}`;

    const span = document.createElement('span');
    span.textContent = option;

    label.appendChild(radio);
    label.appendChild(span);
    optionsContainer.appendChild(label);
  });
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert("Please select an option before proceeding.");
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption.value === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  const quizContent = document.querySelector('.quiz-content');
quizContent.style.display = "flex";
quizContent.style.flexDirection = "column";
quizContent.style.gap = "10px";
quizContent.style.justifyContent = "center";
quizContent.style.alignItems = "center";

  quizContent.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
const imgaesOutput = document.createElement("img");
imgaesOutput.alt=("the image telling the user what he got")
  const message = document.createElement('p');
  message.style.color=" #FF7601"
  const img = document.createElement("img")
img.style.width = "200px";
img.style.height = "200px";
img.style.borderRadius = "50%";
img.style.objectFit = "cover";
  message.textContent =
    score >= questions.length / 2
      ? '🎉 Congratulations! You passed the quiz.'
      : '😢 Sorry, you did not pass the quiz. Better luck next time!';

    score >= questions.length / 2 ?
    img.src="happy.gif" : 
    img.src="sorry.gif"


  quizContent.appendChild(message);
  quizContent.append(img)

  const btn = document.createElement('button');
  btn.textContent = 'Restart Quiz';
  btn.style.marginTop = "10px";
  btn.style.padding = "6px 20px";
  btn.style.backgroundColor = "#16610E";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
    document.querySelector('.displayedAnswer').style.display = 'none';
  btn.addEventListener('click', () => {
    startQuiz();
  });

  quizContent.appendChild(btn);
}

// Attach to global scope so HTML button can call it

