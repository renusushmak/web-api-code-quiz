var high_score = document.getElementById("high-score");
var new_score = localStorage.getItem("score");
high_score.textContent = new_score;
