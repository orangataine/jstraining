let homeScoreBoard = document.getElementById("hm-scoreboard")
let awayScoreBoard = document.getElementById("aw-scoreboard")

let homeCount = 0

function plusOne() {
    homeCount += 1
    homeScoreBoard.textContent = homeCount
    updatedScoreColours()
}
function plusTwo() {
    homeCount += 2
    homeScoreBoard.textContent = homeCount
    updatedScoreColours()
}
function plusThree() {
    homeCount += 3
    homeScoreBoard.textContent = homeCount
    updatedScoreColours()
}

let awayCount = 0

function plusOneAway() {
    awayCount += 1
    awayScoreBoard.textContent = awayCount
    updatedScoreColours()
}
function plusTwoAway() {
    awayCount += 2
    awayScoreBoard.textContent = awayCount
    updatedScoreColours()
}
function plusThreeAway() {
    awayCount += 3
    awayScoreBoard.textContent = awayCount
    updatedScoreColours()
}


function updatedScoreColours() {
    if (homeCount > awayCount) {
        homeScoreBoard.style.color = '#85f94f'
        awayScoreBoard.style.color = '#F94F6D'
    } else if (awayCount > homeCount) {
        awayScoreBoard.style.color = '#85f94f'
        homeScoreBoard.style.color = '#F94F6D'
    } else {
        awayScoreBoard.style.color = '#f9ee4f'
        homeScoreBoard.style.color = '#f9ee4f'
    }
}