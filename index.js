let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let scoree1 = 0
let scoree2 = 0

function add1Score1() { 
    scoree1 += 1
    score1.textContent = scoree1
}
function add2Score1() { 
    scoree1 += 2
    score1.textContent = scoree1
}
function add3Score1() { 
    scoree1 += 3
    score1.textContent = scoree1
}

function add1Score2() { 
    scoree2 += 1
    score2.textContent = scoree2
}
function add2Score2() { 
    scoree2 += 2
    score2.textContent = scoree2
}
function add3Score2() { 
    scoree2 += 3
    score2.textContent = scoree2
}
function reset() { 
    scoree1 = 0 
    scoree2 = 0
    score1.textContent = scoree1
    score2.textContent = scoree2
}