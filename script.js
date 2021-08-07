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
    if(choice != correct) {
        time = time - 10;
        timer_el.textContent = time; 
    }
    index++;
    if (index >= quizQArr.length) {
        quizEnd();
    } else{
        showQuiz();
    }
}

var quizEnd = function (event) {
    clearInterval(timer)
    var quizWrapper = document.getElementById("quiz-wrapper");
    quizWrapper.innerHTML = "";
    var gameOver = document.createElement("h3");
    gameOver.textContent = "Game Over";
    var submit_btn = document.createElement("button");
    submit_btn.textContent = "Submit";
    submit_btn.addEventListener("click", submitScore)
    var inputs = document.createElement("input");
    quizWrapper.appendChild(gameOver);
    quizWrapper.appendChild(inputs);
    quizWrapper.appendChild(submit_btn);
}

var submitScore = function (event) {
    var initials = event.target.previousElementSibling.value;
    localStorage.setItem("score", initials + ": " + time);
    var quizWrapper = document.getElementById("quiz-wrapper");
    quizWrapper.innerHTML = "";
    startBtn.classList.remove("hidden");
    time = 60;
    timer_el.textContent = time;
    index = 0;
}
    

startBtn.addEventListener("click",startQuiz);