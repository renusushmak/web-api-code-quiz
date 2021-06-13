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
    timer = setInterval(function(){ 
        time--;
        timer_el.textContent = time;
        if(time<=0) {
            time = 0;
            quizEnd();
        }
    }, 1000);
}

startBtn.addEventListener("click",startQuiz);