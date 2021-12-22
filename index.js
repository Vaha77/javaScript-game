var timer = 0;

setInterval(timeUpdate, 1000);
function timeUpdate() {
  timer++;
  document.getElementById("clock").innerHTML = timer + " 초";
}

setTimeout(vaqt, 30000);

function vaqt() {}

var score = 0;
setTimeout(() => {
  alert(`축하합니다${score} 점 맟셨습니다.`);
}, 30000);

var minimum = 1;
var maximum = 10;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
document.getElementById("cont1").innerHTML = int1 + " " + "+" + " " + int2;
var qanswer = int1 + int2;

function fire() {
  var uanswer = document.getElementById("answer").value;
  console.log(qanswer, uanswer);
  if (uanswer == qanswer) {
    score += 10;
    document.getElementById("ball").innerHTML = "점수: " + score;
    int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    qanswer = int1 + int2;
    document.getElementById("cont1").innerHTML = int1 + " " + "+" + " " + int2;
    uanswer = 0;
  } else {
    if (score !== 0) {
      score -= 5;
    }
    document.getElementById("ball").innerHTML = "점수: " + score;
  }
}
