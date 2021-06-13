var startBtn = document.getElementById("start-btn");
var timer_el = document.getElementById("timer");
var index = 0;
var time = 60;
var timer;
var quizQArr = [
    { question: "questionexample", answers: [ 1,2,3,4], solved: 2 },
    { question: "questionexample2", answers: [ 1,2,3,4], solved: 2 },
    { question: "questionexample3", answers: [ 1,2,3,4], solved: 2 },
    { question: "questionexample4", answers: [ 1,2,3,4], solved: 2 }
    
];
var startQuiz = function () {
    console.log("Quiz Started..");
    showQuiz();
    timer = setInterval(function(){ 
        time--;
        timer_el.textContent = time;
        if(time<=0) {
            time = 0;
            quizEnd();
        }
    }, 1000);
}

var showQuiz = function () {
    var quizWrapper = document.getElementById("quiz-wrapper");
    startBtn.classList.add("hidden");
    quizWrapper.innerHTML = "";
    var question_el = document.createElement("h3");
    question_el.textContent = quizQArr[index].question;
    quizWrapper.appendChild(question_el);
    quizQArr[index].answers.forEach(answer => {
        var answer_el = document.createElement("button");
        answer_el.textContent = answer;
        answer_el.addEventListener("click", checkAnswer)
        quizWrapper.appendChild(answer_el);
    });
}

var checkAnswer = function (event) {
    var choice = event.target.textContent;
    var correct = quizQArr[index].solved;
    // if choice doesn't equal correct time - 15s
    index++;
    showQuiz();
}

startBtn.addEventListener("click",startQuiz);