const lessons = [
  {
    title: "Variáveis",
    question: "Qual é a forma correta de declarar uma variável inteira em C#?",
    options: [
      'int numero = "10";',
      "int numero = 10;",
      "var numero : int = 10;",
    ],
    correct: 1,
    explanation: "Inteiros usam o tipo int e não levam aspas.",
  },
  {
    title: "Condicionais",
    question: 'Complete:\nif (_____) { Console.WriteLine("Ok"); }',
    options: ["true", '"true"', "= true"],
    correct: 0,
    explanation: "Condições precisam ser booleanas, não strings.",
  },
];

let current = 0;
let xp = 0;

const titleEl = document.getElementById("title");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const xpEl = document.getElementById("xp");
const levelEl = document.getElementById("level");

function level() {
  return Math.floor(xp / 100) + 1;
}

function loadLesson() {
  const lesson = lessons[current];
  titleEl.textContent = "🎯 " + lesson.title;
  questionEl.textContent = lesson.question;
  feedbackEl.textContent = "";
  nextBtn.hidden = true;

  optionsEl.innerHTML = "";

  lesson.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });

  updateStatus();
}

function checkAnswer(choice) {
  const lesson = lessons[current];

  if (choice === lesson.correct) {
    feedbackEl.textContent = "✅ Mandou bem!";
    xp += 50;
  } else {
    feedbackEl.textContent = "❌ Quase! " + lesson.explanation;
  }

  updateStatus();
  nextBtn.hidden = false;
}

function updateStatus() {
  xpEl.textContent = "XP: " + xp;
  levelEl.textContent = "Nível: " + level();
}

nextBtn.onclick = () => {
  current++;

  if (current < lessons.length) {
    loadLesson();
  } else {
    titleEl.textContent = "🏆 Parabéns!";
    questionEl.textContent = "Você concluiu o protótipo!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = `XP final: ${xp} | Nível: ${level()}`;
    nextBtn.hidden = true;
  }
};

loadLesson();
