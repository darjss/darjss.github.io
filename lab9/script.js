const questions = [
  { question: "Монгол хэл дээр 'backend' гэж юу вэ?", answer: "СЕРВЕР" },
  {
    question: "CSS-д өнгийг тодорхойлох 'hex code'-ийн урт хэд вэ?",
    answer: "SIX",
  },
  {
    question: "JavaScript-д массивийн эхний элементийн индекс хэд вэ?",
    answer: "ZERO",
  },
  {
    question: "HTML5-д шинээр нэмэгдсэн видео тоглуулагч таг?",
    answer: "VIDEO",
  },
  {
    question: "Вэб хуудсыг хөтчид ачаалахад эхлээд ямар файл уншигддаг вэ?",
    answer: "INDEX",
  },
  {
    question: "JavaScript-д 'undefined' ба 'null' ялгаатай юу?",
    answer: "YES",
  },
  {
    question: "CSS-д элементүүдийг давхарлан байрлуулах шинж чанар?",
    answer: "ZINDEX",
  },
  { question: "HTML-д хүснэгт үүсгэх үндсэн таг?", answer: "TABLE" },
  {
    question: "JavaScript-д өгөгдлийн төрлийг шалгах үйлдэл?",
    answer: "TYPEOF",
  },
  {
    question: "CSS-д элементийн хүрээг тохируулах шинж чанар?",
    answer: "BORDER",
  },
  {
    question:
      "Вэб хөтөчид JavaScript кодыг ачаалах үед гарах алдааны мессежийг харуулах tool?",
    answer: "CONSOLE",
  },
  { question: "HTML-д текст оруулах хэсгийг үүсгэх таг?", answer: "TEXTAREA" },

  {
    question: "JavaScript-д обьектын шинж чанарыг устгах түл��үүр үг?",
    answer: "DELETE",
  },
  {
    question: "HTML5-д орон зайн өгөгдөл хадгалах обьект?",
    answer: "LOCALSTORAGE",
  },
  {
    question: "HTML баримт бичгийн үндсэн бүтцийг тодорхойлох элемент?",
    answer: "DOCTYPE",
  },
  {
    question: "Вэб хуудасны загварыг хариуцдаг технологи?",
    answer: "CSS",
  },
  {
    question: "JavaScript дээр хувьсагч зарлах орчин үеийн түлхүүр үг?",
    answer: "LET",
  },
  {
    question: "Вэб хуудсыг хариу үйлдэлтэй болгодог хэл?",
    answer: "JAVASCRIPT",
  },
  {
    question: "CSS-д элементүүдийг уян хатан байрлуулах загвар?",
    answer: "FLEXBOX",
  },
  {
    question: "JavaScript-д давталт хийх түгээмэл үйлдэл?",
    answer: "FOREACH",
  },
  {
    question: "CSS-д дэлгэцийн хэмжээнээс хамааруулан загвар тохируулах?",
    answer: "MEDIAQUERIES",
  },
  {
    question: "JavaScript-д асинхрон үйлдэл бичих түлхүүр үг?",
    answer: "ASYNC",
  },
  {
    question: "HTML5-д график зурах элемент?",
    answer: "CANVAS",
  },
  {
    question: "CSS-д сүүдэр үүсгэх шинж чанар?",
    answer: "BOXSHADOW",
  },
  {
    question: "JavaScript-д обьектоос утга авах богино бичиглэл?",
    answer: "DESTRUCTURING",
  },
  {
    question: "CSS-д элементийн хэмжээг тооцоолох нэгж?",
    answer: "REM",
  },
  {
    question: "JavaScript-д Promise-ийн амжилттай үр дүнг хүлээн авах функц?",
    answer: "THEN",
  },
  {
    question: "HTML дээр түгээмэл ашиглагддаг мета таг?",
    answer: "VIEWPORT",
  },
  {
    question: "CSS Grid системийн үндсэн контейнер үүсгэх шинж чанар?",
    answer: "DISPLAYGRID",
  },
];


let currentQuestion;
let currentWord;
let remainingLives;
let guessedLetters;

const questionElement = document.getElementById("question");
const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");
const livesElement = document.getElementById("lives").querySelector("span");
const messageElement = document.getElementById("message");

const hangmanParts = [
  "head",
  "body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];

function initGame() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  currentWord = currentQuestion.answer;
  remainingLives = 5;
  guessedLetters = new Set();

  questionElement.textContent = currentQuestion.question;
  updateWordDisplay();
  updateLivesDisplay();
  createLetterButtons();
  messageElement.textContent = "";
  resetHangman();
}

function updateWordDisplay() {
  wordElement.textContent = currentWord
    .split("")
    .map((letter) =>
      guessedLetters.has(letter) || letter === " " ? letter : "_"
    )
    .join(" ");
}

function updateLivesDisplay() {
  livesElement.textContent = remainingLives;
}

function createLetterButtons() {
  lettersElement.innerHTML = "";
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement("div");
    button.classList.add("letter");
    button.textContent = letter;
    button.addEventListener("click", () => guessLetter(letter));
    lettersElement.appendChild(button);
  }
}

function guessLetter(letter) {
  if (guessedLetters.has(letter) || remainingLives === 0) return;

  guessedLetters.add(letter);
  const buttonElement = Array.from(lettersElement.children).find(
    (el) => el.textContent === letter
  );
  buttonElement.classList.add("used");

  if (currentWord.includes(letter)) {
    updateWordDisplay();
    checkWin();
  } else {
    remainingLives--;
    updateLivesDisplay();
    updateHangman();
    buttonElement.classList.add("wrong");
    checkLoss();
  }
}

function checkWin() {
  if (!wordElement.textContent.includes("_")) {
    messageElement.textContent = "Та хожлоо!";
    disableLetterButtons();
    addPlayAgainButton();
  }
}

function checkLoss() {
  if (remainingLives === 0) {
    messageElement.textContent = "Та хожигдлоо! Зөв хариулт: " + currentWord;
    disableLetterButtons();
    addPlayAgainButton();
  }
}

function disableLetterButtons() {
  Array.from(lettersElement.children).forEach((button) => {
    button.removeEventListener("click", () => guessLetter(button.textContent));
    button.classList.add("used");
  });
}

function resetHangman() {
  hangmanParts.forEach((part) => {
    document.getElementById(part).setAttribute("visibility", "hidden");
  });
}

function updateHangman() {
  const partToShow = hangmanParts[5 - remainingLives];
  if (partToShow) {
    document.getElementById(partToShow).setAttribute("visibility", "visible");
  }
}

function addPlayAgainButton() {
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Дахин тоглох";
  playAgainButton.classList.add("play-again");
  playAgainButton.addEventListener("click", initGame);
  messageElement.appendChild(playAgainButton);
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (/^[A-Z]$/.test(key)) {
    guessLetter(key);
  }
});
initGame();