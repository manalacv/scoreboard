let hScoreEl = document.getElementById("h-score");
let gScoreEl = document.getElementById("g-score");
let hCount = 0;
let gCount = 0;

function add1home() {
  hCount += 1;
  hScoreEl.textContent = hCount;
}

function add2home() {
  hCount += 2;
  hScoreEl.textContent = hCount;
}

function add3home() {
  hCount += 3;
  hScoreEl.textContent = hCount;
}

function add1guest() {
  gCount += 1;
  gScoreEl.textContent = gCount;
}

function add2guest() {
  gCount += 2;
  gScoreEl.textContent = gCount;
}

function add3guest() {
  gCount += 3;
  gScoreEl.textContent = gCount;
}

function resetGame() {
  hCount = 0;
  gCount = 0;
  hScoreEl.textContent = hCount;
  gScoreEl.textContent = gCount;
}
