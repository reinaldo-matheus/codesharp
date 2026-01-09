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
  {
    title: "Loops",
    question:
      "Qual loop é ideal quando você sabe exatamente quantas vezes quer repetir?",
    options: ["while", "foreach", "for"],
    correct: 2,
    explanation: "Use for quando a quantidade de repetições é conhecida.",
  },
  {
    title: "Métodos",
    question: "Qual é a forma correta de declarar um método em C#?",
    options: ["function Soma() {}", "void Soma() {}", "method Soma() {}"],
    correct: 1,
    explanation: "Em C#, métodos usam tipo de retorno (void, int, string…).",
  },
  {
    title: "Classes",
    question: "Qual palavra-chave usamos para criar uma classe?",
    options: ["struct", "object", "class"],
    correct: 2,
    explanation: "A palavra-chave class define uma classe.",
  },
  {
    title: "Construtores",
    question: "Qual é a função de um construtor?",
    options: ["Destruir objetos", "Inicializar o objeto", "Criar métodos"],
    correct: 1,
    explanation: "Construtores inicializam o estado do objeto.",
  },
  {
    title: "Listas",
    question: "Qual é a forma correta de criar uma lista de inteiros?",
    options: [
      "List<int> numeros = new List<int>();",
      "int[] numeros = new List();",
      "Array<int> numeros = new Array();",
    ],
    correct: 0,
    explanation: "List<T> é a estrutura correta para listas dinâmicas.",
  },
  {
    title: "LINQ",
    question: "Qual método LINQ filtra elementos de uma coleção?",
    options: ["Select()", "Where()", "OrderBy()"],
    correct: 1,
    explanation: "Where() filtra elementos com base em uma condição.",
  },
  {
    title: "Async/Await",
    question: "Para que serve o async/await?",
    options: [
      "Executar código mais rápido",
      "Evitar bloqueio da aplicação",
      "Criar threads manualmente",
    ],
    correct: 1,
    explanation:
      "Async evita travar a aplicação enquanto espera algo terminar.",
  },
  {
    title: "Exceções",
    question: "Qual bloco usamos para tratar erros?",
    options: ["catch", "try/catch", "error"],
    correct: 1,
    explanation: "try/catch captura exceções e evita que a app quebre.",
  },
  {
    title: ".NET",
    question: "Qual comando cria um novo projeto console em .NET?",
    options: [
      "dotnet start console",
      "dotnet new console",
      "dotnet create console",
    ],
    correct: 1,
    explanation: "dotnet new console cria um app de terminal.",
  },
  {
    title: "ASP.NET",
    question: "Qual tipo de projeto usamos para criar APIs?",
    options: ["Console App", "Class Library", "ASP.NET Web API"],
    correct: 2,
    explanation: "ASP.NET Web API é o template ideal para APIs.",
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
