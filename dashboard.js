let questions = [
    {
        q: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai"],
        answer: 1
    },
    {
        q: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Tree"],
        answer: 1
    },
    {
        q: "AI stands for?",
        options: ["Artificial Intelligence", "Automatic Input", "Advanced Internet"],
        answer: 0
    }
];

let current = 0;
let score = 0;

function showPlan() {
    hideAll();
    document.getElementById("output").innerHTML =
        "<h4>📘 Today's Study Plan</h4>" +
        "<ul>" +
        "<li>Data Structures – 1 hour</li>" +
        "<li>DBMS – 1 hour</li>" +
        "<li>AI Basics – 30 minutes</li>" +
        "</ul>";
}

function startQuiz() {
    hideAll();
    current = 0;
    score = 0;
    document.getElementById("quizBox").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.q;
    document.getElementById("opt0").innerText = "A) " + q.options[0];
    document.getElementById("opt1").innerText = "B) " + q.options[1];
    document.getElementById("opt2").innerText = "C) " + q.options[2];
}

function checkAnswer(selected) {
    if (selected === questions[current].answer) {
        score++;
    }

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    hideAll();
    document.getElementById("output").innerHTML =
        "<h4>📝 Quiz Completed</h4>" +
        "<p>Score: " + score + " / " + questions.length + "</p>";
}

function showPerformance() {
    hideAll();

    document.getElementById("output").innerHTML =
        "<h4>📊 Performance Report</h4>" +
        "<canvas id='perfChart' width='400' height='250'></canvas>";

    let canvas = document.getElementById("perfChart");
    let ctx = canvas.getContext("2d");

    let scores = [60, 78, 85, 70, 90]; // sample test scores
    let barWidth = 40;
    let gap = 20;
    let startX = 40;
    let baseY = 200;

    ctx.fillStyle = "#333";
    ctx.fillText("Scores", 10, 20);

    for (let i = 0; i < scores.length; i++) {
        let barHeight = scores[i] * 1.5;

        ctx.fillStyle = "#4facfe";
        ctx.fillRect(
            startX + i * (barWidth + gap),
            baseY - barHeight,
            barWidth,
            barHeight
        );

        ctx.fillStyle = "#000";
        ctx.fillText("T" + (i + 1),
            startX + i * (barWidth + gap) + 10,
            baseY + 15
        );
    }
}


function askDoubt() {
    hideAll();
    document.getElementById("output").innerHTML =
        "<h4>❓ Ask Doubt</h4>" +
        "<input type='text' id='doubt' placeholder='Type your doubt'>" +
        "<br><br><button onclick='submitDoubt()'>Submit</button>";
}

function submitDoubt() {
    let d = document.getElementById("doubt").value;
    if (!d.trim()) return;

    document.getElementById("output").innerHTML =
        "<h4>❓ Doubt Received</h4><p><i>" + d + "</i></p>";
}

function hideAll() {
    document.getElementById("quizBox").style.display = "none";
    document.getElementById("output").innerHTML = "";
}
