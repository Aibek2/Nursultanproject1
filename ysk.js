
// ========================================
// 1. МОБИЛЬНАЯ НАВИГАЦИЯ
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// ========================================
// 2. КАРТОЧКИ СПОРТИВНЫХ ТРАВМ
// ========================================

const injuries = [
  {
    name: "Бұлшықет созылуы",
    icon: "↗",
    short: "Бұлшықет талшықтарының шамадан тыс созылуы немесе зақымдануы.",
    description: "Бұлшықет созылуы бұлшықетке шамадан тыс күш түскенде пайда болады.",
    causes: "Кенет қозғалыс, артық жүктеме, дайындықтың жеткіліксіздігі.",
    signs: "Ауырсыну, бұлшықет әлсіздігі, ісіну және қозғалыстың шектелуі.",
    prevention: "Қыздырыну, жүктемені біртіндеп арттыру және дұрыс техника."
  },
  {
    name: "Байламдардың зақымдануы",
    icon: "◎",
    short: "Буындарды байланыстыратын байламдардың созылуы немесе жыртылуы.",
    description: "Байлам зақымдануы буынның қалыпты қозғалыс шегінен асып кеткенде пайда болуы мүмкін.",
    causes: "Аяқты бұру, құлау, секіруден дұрыс түспеу.",
    signs: "Буын айналасындағы ауырсыну, ісіну, көгеру және тұрақсыздық.",
    prevention: "Тепе-теңдік жаттығулары, бұлшықеттерді нығайту және дұрыс аяқкиім."
  },
  {
    name: "Буын шығуы",
    icon: "◇",
    short: "Буын сүйектерінің қалыпты орналасуынан ығысуы.",
    description: "Буын шығуы кезінде сүйектердің буындағы қалыпты жанасуы бұзылады.",
    causes: "Қатты соққы, құлау немесе буынға шамадан тыс күш түсу.",
    signs: "Қатты ауырсыну, буын пішінінің өзгеруі, қозғалыстың қиындауы.",
    prevention: "Қауіпсіздік ережелерін сақтау және буындарды нығайту.",
  },
  {
    name: "Сүйектің сынуы",
    icon: "╱",
    short: "Сүйек тұтастығының жартылай немесе толық бұзылуы.",
    description: "Сүйек сынуы соққыдан немесе қайталанатын шамадан тыс жүктемеден болуы мүмкін.",
    causes: "Құлау, соқтығысу, тікелей соққы немесе қайталанатын артық жүктеме.",
    signs: "Қатты ауырсыну, ісіну, деформация және аяқ-қолды пайдалана алмау.",
    prevention: "Қорғаныс құралдары, қауіпсіз техника және жүктемені бақылау."
  },
  {
    name: "Сіңірдің зақымдануы",
    icon: "⌁",
    short: "Бұлшықетті сүйекпен байланыстыратын сіңірдің зақымдануы.",
    description: "Сіңірдің зақымдануы шамадан тыс немесе қайталанатын жүктемеден туындайды.",
    causes: "Қайталанатын қозғалыстар, артық жүктеме және жеткіліксіз демалыс.",
    signs: "Сіңір бойындағы ауырсыну, сезімталдық және қозғалыс кезіндегі жайсыздық.",
    prevention: "Жүктемені біртіндеп арттыру, демалыс және дұрыс жаттығу техникасы."
  },
  {
    name: "Буындардың зақымдануы",
    icon: "✳",
    short: "Буын құрылымдарының әртүрлі зақымдануы.",
    description: "Буынның шеміршегі, айналасындағы тіндері немесе басқа құрылымдары зақымдануы мүмкін.",
    causes: "Қайталанатын жүктеме, жарақат, дұрыс емес қозғалыс.",
    signs: "Ауырсыну, ісіну, қозғалыстың шектелуі және сіресу.",
    prevention: "Дұрыс техника, бұлшықет күшін дамыту және демалыс."
  }
];

const injuryGrid = document.getElementById("injuryGrid");
const injuryDetail = document.getElementById("injuryDetail");

injuries.forEach((injury, index) => {
  const card = document.createElement("article");
  card.className = "injury-card";
  card.innerHTML = `
    <span class="number">0${index + 1} / 06</span>
    <div class="injury-icon">${injury.icon}</div>
    <h3>${injury.name}</h3>
    <p>${injury.short}</p>
    <button type="button">Толығырақ оқу →</button>
  `;

  card.addEventListener("click", () => {
    document.querySelectorAll(".injury-card").forEach(item => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    injuryDetail.hidden = false;
    injuryDetail.innerHTML = `
      <h3>${injury.name}</h3>
      <p><strong>Сипаттамасы:</strong> ${injury.description}</p>
      <p><strong>Себептері:</strong> ${injury.causes}</p>
      <p><strong>Белгілері:</strong> ${injury.signs}</p>
      <p><strong>Алдын алу:</strong> ${injury.prevention}</p>
      <button type="button" id="closeDetail">Жабу ×</button>
    `;

    document.getElementById("closeDetail").addEventListener("click", () => {
      injuryDetail.hidden = true;
      card.classList.remove("active");
    });

    injuryDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  injuryGrid.appendChild(card);
});


// ========================================
// 3. ИНТЕРАКТИВТІ ҚЫЗДЫРЫНУ ТАЙМЕРІ
// ========================================

const exercises = [
  {
    name: "Мойын мен иықты қыздыру",
    description: "Басты баяу оңға және солға бұрып, иықты жеңіл айналдыр.",
    duration: 50
  },
  {
    name: "Қол айналдыру",
    description: "Қолдарыңды екі жаққа созып, алға және артқа айналдыр.",
    duration: 50
  },
  {
    name: "Дене бұрылыстары",
    description: "Аяқты иық деңгейінде қойып, денені екі жаққа баяу бұр.",
    duration: 50
  },
  {
    name: "Жамбас айналдыру",
    description: "Қолды белге қойып, жамбасты екі бағытта айналдыр.",
    duration: 50
  },
  {
    name: "Тізе мен тобықты қыздыру",
    description: "Тізе мен тобықты жеңіл қозғалыстар арқылы дайында.",
    duration: 50
  },
  {
    name: "Жеңіл орнында жүру",
    description: "Орныңда жеңіл жүріп, қозғалыс қарқынын біртіндеп арттыр.",
    duration: 70
  }
];

let exerciseIndex = 0;
let remaining = exercises[0].duration;
let timerInterval = null;
let timerRunning = false;

const timerDisplay = document.getElementById("timerDisplay");
const timerRing = document.getElementById("timerRing");
const timerProgress = document.getElementById("timerProgress");
const exerciseName = document.getElementById("exerciseName");
const exerciseDescription = document.getElementById("exerciseDescription");
const exerciseNumber = document.getElementById("exerciseNumber");
const timerCaption = document.getElementById("timerCaption");

const totalDuration = exercises.reduce((sum, item) => sum + item.duration, 0);
const circumference = 2 * Math.PI * 98;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateTimer() {
  const current = exercises[exerciseIndex];

  timerDisplay.textContent = formatTime(remaining);
  exerciseName.textContent = current.name;
  exerciseDescription.textContent = current.description;

  exerciseNumber.textContent =
    `0${exerciseIndex + 1} / 0${exercises.length}`;

  const percentage = remaining / current.duration;
  timerRing.style.strokeDashoffset = circumference * (1 - percentage);

  const completed = exercises
    .slice(0, exerciseIndex)
    .reduce((sum, item) => sum + item.duration, 0);

  const overall = completed + current.duration - remaining;

  timerProgress.style.width = `${overall / totalDuration * 100}%`;
  timerCaption.textContent = timerRunning
    ? "Жаттығу орындалып жатыр..."
    : "Жаттығуды жалғастыруға дайын";
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerRunning = false;
}

function nextExercise() {
  stopTimer();

  if (exerciseIndex < exercises.length - 1) {
    exerciseIndex++;
    remaining = exercises[exerciseIndex].duration;
    updateTimer();
    timerCaption.textContent = "Келесі жаттығуға дайын!";
  } else {
    exerciseIndex = 0;
    remaining = exercises[0].duration;
    updateTimer();
    timerCaption.textContent = "Кешен аяқталды! Жарайсың!";
    timerDisplay.textContent = "05:00";
    timerProgress.style.width = "0%";
  }
}

document.getElementById("startTimer").addEventListener("click", () => {
  if (timerRunning) return;

  if (remaining <= 0) {
    remaining = exercises[exerciseIndex].duration;
  }

  timerRunning = true;
  updateTimer();

  timerInterval = setInterval(() => {
    if (remaining > 0) {
      remaining--;
      updateTimer();
    } else {
      stopTimer();

      if (exerciseIndex < exercises.length - 1) {
        nextExercise();
        timerCaption.textContent = "Келесі жаттығуға дайын!";
      } else {
        timerCaption.textContent = "Қыздырыну аяқталды! Жарайсың!";
        timerDisplay.textContent = "00:00";
        timerProgress.style.width = "100%";
        timerRing.style.strokeDashoffset = circumference;
      }
    }
  }, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  stopTimer();
  timerCaption.textContent = "Таймер кідіртілді.";
});

document.getElementById("nextExercise").addEventListener("click", nextExercise);

updateTimer();


// ========================================
// 4. ИНТЕРАКТИВТІ ТЕСТ
// ========================================

const questions = [
  {
    question: "Жаттығу алдында не істеу қажет?",
    answers: [
      "Бірден ауыр жаттығуды бастау",
      "Қыздырыну жаттығуларын орындау",
      "Демалмай жаттығу жасау",
      "Су ішпеу"
    ],
    correct: 1
  },
  {
    question: "Жүктемені қалай арттыру керек?",
    answers: [
      "Бірден барынша арттыру",
      "Күн сайын екі есе көбейту",
      "Біртіндеп арттыру",
      "Демалыссыз орындау"
    ],
    correct: 2
  },
  {
    question: "Бұлшықет созылуы кезінде қандай белгі байқалуы мүмкін?",
    answers: [
      "Ауырсыну және ісіну",
      "Көру қабілетінің жақсаруы",
      "Тәбеттің артуы",
      "Есту қабілетінің өзгеруі"
    ],
    correct: 0
  },
  {
    question: "Жаттығу кезінде су ішу не үшін маңызды?",
    answers: [
      "Жаттығуды қиындату үшін",
      "Шаршауды әдейі арттыру үшін",
      "Қозғалысты тоқтату үшін",
      "Ағзаның су теңгерімін сақтау үшін"
    ],
    correct: 3
  },
  {
    question: "Жарақат алған кезде бірінші не істеу керек?",
    answers: [
      "Жаттығуды жалғастыру",
      "Жаттығуды тоқтату",
      "Ауыр салмақ көтеру",
      "Ауырған жерді күшпен қозғалту"
    ],
    correct: 1
  },
  {
    question: "Спорттық аяқкиім қандай болуы керек?",
    answers: [
      "Кез келген өлшемде",
      "Тым тар",
      "Спорт түріне сай және ыңғайлы",
      "Міндетті түрде ауыр"
    ],
    correct: 2
  },
  {
    question: "Демалыс не үшін қажет?",
    answers: [
      "Бұлшықеттердің қалпына келуі үшін",
      "Жүктемені шексіз арттыру үшін",
      "Жаттығуды ауырлату үшін",
      "Қозғалысты нашарлату үшін"
    ],
    correct: 0
  },
  {
    question: "Сүйек сынуына күдік болса не істеу керек?",
    answers: [
      "Жаттығуды жалғастыру",
      "Сүйекті өздігінен орнына салу",
      "Ауырған жерге күш түсіру",
      "Қозғалысты шектеп, шұғыл медициналық көмекке жүгіну"
    ],
    correct: 3
  },
  {
    question: "Жаттығудан кейін не істеген дұрыс?",
    answers: [
      "Бірден ауыр жаттығуға көшу",
      "Қарқындылықты біртіндеп төмендету",
      "Суды мүлдем ішпеу",
      "Демалмау"
    ],
    correct: 1
  },
  {
    question: "Жаттығу техникасы не үшін маңызды?",
    answers: [
      "Жаттығуды әдейі қиындату үшін",
      "Демалысты азайту үшін",
      "Қозғалысты дұрыс орындап, жарақат қаупін төмендету үшін",
      "Жылдам шаршау үшін"
    ],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const questionCount = document.getElementById("questionCount");
const quizPercent = document.getElementById("quizPercent");
const quizProgress = document.getElementById("quizProgress");
const nextQuestion = document.getElementById("nextQuestion");
const answerFeedback = document.getElementById("answerFeedback");

const bestScoreElement = document.getElementById("bestScore");

let bestScore = Number(localStorage.getItem("qozgalysBestScore")) || 0;
bestScoreElement.textContent = bestScore + "%";

function showQuestion() {
  answered = false;
  nextQuestion.disabled = true;

  const q = questions[currentQuestion];

  questionText.textContent = q.question;
  questionCount.textContent =
    `СҰРАҚ ${String(currentQuestion + 1).padStart(2, "0")} / 10`;

  quizPercent.textContent =
    `${Math.round(currentQuestion / questions.length * 100)}%`;

  quizProgress.style.width =
    `${currentQuestion / questions.length * 100}%`;

  answerFeedback.textContent = "Бір жауапты таңда.";
  answerList.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

    button.addEventListener("click", () => selectAnswer(index));

    answerList.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const q = questions[currentQuestion];
  const buttons = answerList.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.correct) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && selectedIndex !== q.correct) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === q.correct) {
    score++;
    answerFeedback.textContent = "Дұрыс жауап! Жарайсың!";
  } else {
    answerFeedback.textContent = "Қате жауап. Дұрыс жауап жасыл түспен белгіленді.";
  }

  nextQuestion.disabled = false;
  nextQuestion.textContent =
    currentQuestion === questions.length - 1 ? "Нәтижені көру →" : "Келесі →";
}

function showResult() {
  const percentage = Math.round(score / questions.length * 100);

  if (percentage > bestScore) {
    bestScore = percentage;
    localStorage.setItem("qozgalysBestScore", bestScore);
  }

  bestScoreElement.textContent = bestScore + "%";

  const quizCard = document.getElementById("quizCard");

  quizCard.innerHTML = `
    <div class="quiz-header">
      <span>ТЕСТ АЯҚТАЛДЫ</span>
      <span>100%</span>
    </div>
    <h3>Сенің нәтижең</h3>
    <div class="result-score">${percentage}%</div>
    <p style="color:#778079;font-size:13px;">
      ${score} / ${questions.length} дұрыс жауап
    </p>
    <p style="margin-top:15px;color:#536057;font-size:14px;">
      ${
        percentage >= 80
          ? "Өте жақсы! Сен спорттық қауіпсіздік қағидаларын жақсы меңгергенсің."
          : percentage >= 50
          ? "Жақсы нәтиже! Білімінді одан әрі жетілдіре түс."
          : "Қайта оқып, тестті тағы бір рет орындап көр."
      }
    </p>
    <button class="btn-primary" id="restartQuiz" style="margin-top:25px;">
      Қайта өту ↻
    </button>
  `;

  document.getElementById("restartQuiz").addEventListener("click", restartQuiz);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quizCard").innerHTML = `
    <div class="quiz-header">
      <span id="questionCount">СҰРАҚ 01 / 10</span>
      <span id="quizPercent">0%</span>
    </div>
    <div class="quiz-progress"><div id="quizProgress"></div></div>
    <h3 id="questionText"></h3>
    <div class="answer-list" id="answerList"></div>
    <div class="quiz-footer">
      <span id="answerFeedback">Бір жауапты таңда.</span>
      <button class="btn-primary" id="nextQuestion" disabled>Келесі →</button>
    </div>
  `;

  // Сілтемелерді қайта алу
  Object.assign(window, {});

  initializeQuizElements();
  showQuestion();
}

let quizElementsInitialized = false;

function initializeQuizElements() {
  // Элементтер қайта құрылғаннан кейін жаңартылады
  const nextBtn = document.getElementById("nextQuestion");

  nextBtn.addEventListener("click", () => {
    if (!answered) return;

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      showResult();
    }
  });

  quizElementsInitialized = true;
}

nextQuestion.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();


// ========================================
// 5. СПОРТШЫНЫҢ ЧЕК-ЛИСТІ
// ========================================

const checklist = [
  "Жаттығуға дейін қыздырындым.",
  "Спорттық киімімді тексердім.",
  "Жаттығу орнын дайындадым.",
  "Денсаулық жағдайымды бағаладым.",
  "Суды дайындадым.",
  "Жаттығу жүктемесін жоспарладым."
];

const checklistKey = "qozgalysChecklist";

let checkedItems = JSON.parse(
  localStorage.getItem(checklistKey) || "[]"
);

const checkItems = document.getElementById("checkItems");
const checkPercent = document.getElementById("checkPercent");
const checkProgress = document.getElementById("checkProgress");
const checkCount = document.getElementById("checkCount");

function renderChecklist() {
  checkItems.innerHTML = "";

  checklist.forEach((item, index) => {
    const label = document.createElement("label");
    label.className = "check-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checkedItems.includes(index);

    const text = document.createElement("span");
    text.textContent = item;

    if (checkbox.checked) label.classList.add("done");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        if (!checkedItems.includes(index)) {
          checkedItems.push(index);
        }
      } else {
        checkedItems = checkedItems.filter(i => i !== index);
      }

      localStorage.setItem(checklistKey, JSON.stringify(checkedItems));
      renderChecklist();
    });

    label.append(checkbox, text);
    checkItems.appendChild(label);
  });

  const percent = Math.round(checkedItems.length / checklist.length * 100);

  checkPercent.textContent = percent + "%";
  checkProgress.style.width = percent + "%";
  checkCount.textContent = `${checkedItems.length} / ${checklist.length} орындалды`;
}

document.getElementById("resetChecklist").addEventListener("click", () => {
  checkedItems = [];
  localStorage.setItem(checklistKey, JSON.stringify(checkedItems));
  renderChecklist();
});

renderChecklist();


// ========================================
// 6. ПРОКРУТКА ЖӘНЕ АНИМАЦИЯЛАР
// ========================================

const scrollProgress = document.getElementById("scrollProgress");
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollable > 0
    ? window.scrollY / scrollable * 100
    : 0;

  scrollProgress.style.width = progress + "%";

  backTop.classList.toggle("visible", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});
