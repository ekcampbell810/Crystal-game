var scoreArray = [];
var a = 19;
for (var i = 0; i <= 101; i++) {
	scoreArray[i] = a;
	a++;
}
var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var randomScore = generateRandomScore();
document.getElementById("goal-box").innerHTML = randomScore;
var userWins = 0;
var userLosses = 0;
var crystalScore = 0;
document.getElementById("total-score-box").innerHTML = crystalScore;
var redCrystal = generateRandomCrystalScore();
var blueCrystal = generateRandomCrystalScore();
var yellowCrystal = generateRandomCrystalScore();
var greenCrystal = generateRandomCrystalScore();



function generateRandomScore() {
	return scoreArray[Math.floor(Math.random() * scoreArray.length)];
	
}

function generateRandomCrystalScore() {
	return crystalArray[Math.floor(Math.random() * crystalArray.length)];
}

function test(crystalScore, randomScore) {
	if (crystalScore === randomScore) {
		//alert("You Win");
		userWins = userWins + 1;
		document.getElementById("win-lose-sentence").innerHTML = "You Win!";
		document.getElementById("wins").innerHTML = "Wins: " + userWins;
		resetGame();
		
	}

	else if (crystalScore > randomScore) {
		
		userLosses = userLosses + 1;
		//alert(userLosses);
		document.getElementById("win-lose-sentence").innerHTML = "You Lose!";
		document.getElementById("losses").innerHTML = ("Losses: " + userLosses);
		resetGame();
	
	}

	else if (crystalScore < randomScore) {
		document.getElementById("win-lose-sentence").innerHTML = "Keep Trying";
	}
}

function resetGame() {
	crystalScore = 0;
	randomScore = generateRandomScore();
	document.getElementById("goal-box").innerHTML = randomScore;
	redCrystal = generateRandomCrystalScore();
	blueCrystal = generateRandomCrystalScore();
	yellowCrystal = generateRandomCrystalScore();
	greenCrystal = generateRandomCrystalScore();
	document.getElementById("total-score-box").innerHTML = crystalScore;
}

// Display number of Wins and Losses
document.getElementById("wins").innerHTML = ("Wins: " + userWins);
document.getElementById("losses").innerHTML = ("Losses: " + userLosses);


//click button
$("#red").on("click", function(){
crystalScore = crystalScore + redCrystal;
document.getElementById("total-score-box").innerHTML = crystalScore;
test(crystalScore, randomScore);
})

$("#blue").on("click", function(){
crystalScore = crystalScore + blueCrystal;
document.getElementById("total-score-box").innerHTML = crystalScore;
test(crystalScore, randomScore);
})

$("#yellow").on("click", function(){
crystalScore = crystalScore + yellowCrystal;
document.getElementById("total-score-box").innerHTML = crystalScore;
test(crystalScore, randomScore);
})

$("#green").on("click", function(){
crystalScore = crystalScore + greenCrystal;
document.getElementById("total-score-box").innerHTML = crystalScore;
test(crystalScore, randomScore);
})




