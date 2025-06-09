const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correctAnswer: "JavaScript"
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
  }
];


let currentQuestionIndex = 0;
const currentQuestionIndexNumber = 1;
let score = 0;

function startQuiz() {
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

