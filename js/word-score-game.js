var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;



function startGame() {
	addNumbersFromBag();
	displayHand();
	
};


function addNumbersFromBag(){
	console.log("your hand has:" + YOUR_HAND.length);
	// If no letter in the bag and no letter in your hand, Game Over.
	if (BAG_OF_LETTERS.length) {
		for(i=YOUR_HAND.length; i < 7; i++){
			if (BAG_OF_LETTERS.length) {
				YOUR_HAND[i] = getAvailableLetter();
			} else {
				break;
			}
		}
	} else {
		if (YOUR_HAND.length) {
			alert("These are the only letters left.");
		} else {
			$("#score-box").append("Game Over.");
			$("#remaining").remove();
			
		}
	}
	
	
}


function displayHand(){
	console.log("your hand has:" + YOUR_HAND.length);
	for (i = 0; i < 7; i++) {

		if (i < YOUR_HAND.length) {
			console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
			$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
			$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
			$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
			$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
		} else {
			$( "#letter-" + (i+1)).html("&nbsp");
		
			$( "#points-" + (i+1)).html("&nbsp");
		}
		
	}
	
}



function getAvailableLetter(){
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
	console.log(randomLetter[0]);
	return randomLetter[0];
}


function findWordToUse(){
	// TODO Your job starts here.
	// alert("Your code needs to go here");
	var codeFoundWord = "";
	var WordPoints = 0;
	
	var potentialWord = new Array();
	var potentialWordPoints = new Array();
	var potentialWordi = new Array();
	var potentialWordPointsi = new Array();
	var indexlist = new Array();
	
	var YOUR_HAND_no = YOUR_HAND.slice(0);
	var no_index = 0;
	for (i = 0; i < YOUR_HAND.length; i++) {
		if (YOUR_HAND[i].letter == "_") {
			YOUR_HAND_no.splice((i-no_index), 1);
			no_index += 1;
		}
	}
	
	// YOUR_HAND.splice(ii, 1);
	// YOUR_HAND[ii].letter
	// var YOUR_HAND_clone = YOUR_HAND.slice(0);
	
	for (i = 0; i < YOUR_HAND_no.length; i++) {
		
			var wordLength = 0;
			wordLength = potentialWordi.length;
			if (!wordLength) {
				for (a = 0; a < YOUR_HAND_no.length; a++) {
					var Wordia = YOUR_HAND_no[a].letter;
					var WordPointsia = YOUR_HAND_no[a].pointsWhenLettersUsed;
					potentialWordi.push(Wordia);
					potentialWordPointsi.push(WordPointsia);
					var indexlisti = new Array();
					indexlisti[0] = a;
					indexlist.push(indexlisti);
				}
			} else {
				for (ii = 0; ii < wordLength; ii++) {
					var YOUR_HAND_clone = YOUR_HAND_no.slice(0);
					for (b = 0; b < indexlist[ii].length; b++) {
						var indexi = 0;
						indexi = indexlist[ii][b];
						YOUR_HAND_clone.splice(indexi,1);
					}
					for (a = 0; a < YOUR_HAND_clone.length; a++) {
						var Wordiia = potentialWordi[ii]+YOUR_HAND_clone[a].letter;
						var WordPointsiia = potentialWordPointsi[ii]+YOUR_HAND_clone[a].pointsWhenLettersUsed;
						potentialWordi.push(Wordiia);
						potentialWordPointsi.push(WordPointsiia);
						var indexlisti = indexlist[ii].slice(0);
						indexlisti.push(a);
						indexlist.push(indexlisti);
					}
					
				}
			}
			potentialWordi.splice(0,wordLength);
			potentialWordPointsi.splice(0,wordLength);
			indexlist.splice(0,wordLength);
		var Wordi = potentialWordi.slice(0);
		var WordPointsi = potentialWordPointsi.slice(0);
		potentialWord.push(Wordi);
		potentialWordPoints.push(WordPointsi);
	}
	
	for (i = 0; i < potentialWord.length; i++) {
		var a = i;
		for (ii = 0; ii < potentialWord[a].length; ii++) {
			var aa = ii;
			var codeFoundWordi = potentialWord[a][aa];
			var WordPointsi = potentialWordPoints[a][aa];
			if(isThisAWord(codeFoundWordi)){
				if (WordPointsi > WordPoints) {
					codeFoundWord = codeFoundWordi;
					WordPoints = WordPointsi;
				} else if (WordPointsi == WordPoints) {
					if (codeFoundWordi.length < codeFoundWord.length) {
						codeFoundWord = codeFoundWordi;
						WordPoints = WordPointsi;
					}
				}
				
			}
		}
	}
	
	if (WordPoints) {
		if(haveLettersForWord(codeFoundWord)){
			 successfullyAddedWord(codeFoundWord);
		}
	} else {
		alert("No word with a point can be found! Please retire your hand and good luck.");
	}
	
}
function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);
	 if(isThisAWord(humanFoundWord)){
		 if(haveLettersForWord(humanFoundWord)){
			 successfullyAddedWord(humanFoundWord);
		 }else{
			 alert(humanFoundWord + " - Do not have the letters for this word");
		 }
	 }else{
		 alert(humanFoundWord + " is not a valid word.");
	 }
		
}


function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					break;
				}
			}
		}
		
		// the _ logic
		if(!foundLetter){
			for(a=0; a<YOUR_HAND.length; a++){
				if (YOUR_HAND[a].letter == "_") {
					if(!YOUR_HAND[a].used && !foundLetter){
						YOUR_HAND[a].used = true;
						foundLetter = true;
						break;
					}
				}
			}
		}
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}


function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}

function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
}
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});
