let startBtn = document.getElementById("start");
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let resetBtn = document.getElementById("reset");
 
let min = document.getElementById("min");
let sec = document.getElementById("sec");

console.log(startBtn, oneBtn, twoBtn, resetBtn, min, sec);


startBtn.addEventListener('click', function() {
    timer = true;
})

oneBtn.addEventListener('click', () => {
    min = 1;
    sec = 30;
    min.textContent = min;
    sec.textContent = sec;
});

twoBtn.addEventListener('click', function () {
    min = 2;
    sec = 0;
})

resetBtn.addEventListener('click', function () {
    timer = false;
    min = 0;
    sec = 0;
})


function startTimer() {
    if (timer) {

    }
}