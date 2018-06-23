console.log("test 123!");
/*
//let computer choose in between letter r p s
var computerChoice = ["r","p","s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

	// Determines which key was pressed.
	var a = event.key;
	  
	// Randomly chooses a choice from the options array. This is the Computer's guess.
	var b = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	//--if/else
	
	if (a===b){tie++}
	else if(a==="r" && b==="s" || a==="p" && b==="r" || a==="s" && b==="p") {
	loss++		  
	}
	else{
	win++
	}
	
	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	var html =
	"<p>You chose: " + a + "</p>" +
	"<p>The computer chose: " + b + "</p>" +
	"<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>ties: " + ties + "</p>";
	
	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#game").innerHTML = html;


}
*/

		var game = ["r", "p", "s"];

		//--make sure all values are zero
		
		// Creating variables to hold the number of wins, losses, and ties. They start at 0.
		var wins = 0;
		var losses = 0;
		var ties = 0;
		
		// This function is run whenever the user presses a key.
		document.onkeyup = function(event) {

		//--let user guess
		// Determines which key was pressed.
		var youGuess = event.key;
		
		console.log("you guess: "+youGuess);
		
		var yourGuess = String(youGuess).toLowerCase();
		
		console.log("your guess: "+yourGuess);
		
		var b = game.indexOf(yourGuess);
		
		console.log(b);
		
		//--let computer guess
		var compGuess = game[Math.floor(Math.random()*game.length)];
		
		console.log("comp Guess: "+compGuess);
		
		var computerGuess = String(compGuess);
		
		console.log("computer Guess: "+computerGuess);
		
		var a = game.indexOf(computerGuess);
		
		console.log(a);

		//--if/else
		
		if (a===b){console.log("try again!");ties++;}
		else if(a===0 && b===2 || a===1 && b===0 || a===2 && b===1) {
			console.log("you loss"); losses++	;	  
		}
		else if(b===-1){console.log("Please press only in between P, R or S. ");}
		else{
			console.log("you win");wins++;
		}
		
		c = a + 1;
		console.log(c);
	
		d = b + 1;
		console.log(d);
		
		// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
		var html = "<p>You choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+d+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160; Champ choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+c+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160;  <span class='w3-text-red'>Your wins:</span> " + wins + ", <span class='w3-text-red'>losses:</span> " + losses + ", <span class='w3-text-red'>ties:</span> " + ties + "</p>";
		
		// Set the inner HTML contents of the #game div to our html string
		document.querySelector("#game").innerHTML = html;
			
		}
		
		
		var g = document.querySelector("#rock");
		var h = document.querySelector("#paper");
		var i = document.querySelector("#scissors");
		
		g.onclick = function () {
			
		//--let user guess
		// Determines which key was pressed.
		var youGuess = "r";
		
		console.log("you guess: "+youGuess);
		
		var yourGuess = String(youGuess).toLowerCase();
		
		console.log("your guess: "+yourGuess);
		
		var b = game.indexOf(yourGuess);
		
		console.log(b);
		
		//--let computer guess
		var compGuess = game[Math.floor(Math.random()*game.length)];
		
		console.log("comp Guess: "+compGuess);
		
		var computerGuess = String(compGuess);
		
		console.log("computer Guess: "+computerGuess);
		
		var a = game.indexOf(computerGuess);
		
		console.log(a);

		//--if/else
		
		if (a===b){console.log("try again!");ties++;}
		else if(a===0 && b===2 || a===1 && b===0 || a===2 && b===1) {
			console.log("you loss"); losses++	;	  
		}
		else if(b===-1){console.log("Please press only in between P, R or S. ");}
		else{
			console.log("you win");wins++;
		}
		
		c = a + 1;
		console.log(c);
	
		d = b + 1;
		console.log(d);
		
		// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
		var html = "<p>You choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+d+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160; Champ choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+c+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160;  <span class='w3-text-red'>Your wins:</span> " + wins + ", <span class='w3-text-red'>losses:</span> " + losses + ", <span class='w3-text-red'>ties:</span> " + ties + "</p>";
		
		// Set the inner HTML contents of the #game div to our html string
		document.querySelector("#game").innerHTML = html;
						
		}
		
		h.onclick = function () {
			
		//--let user guess
		// Determines which key was pressed.
		var youGuess = "p";
		
		console.log("you guess: "+youGuess);
		
		var yourGuess = String(youGuess).toLowerCase();
		
		console.log("your guess: "+yourGuess);
		
		var b = game.indexOf(yourGuess);
		
		console.log(b);
		
		//--let computer guess
		var compGuess = game[Math.floor(Math.random()*game.length)];
		
		console.log("comp Guess: "+compGuess);
		
		var computerGuess = String(compGuess);
		
		console.log("computer Guess: "+computerGuess);
		
		var a = game.indexOf(computerGuess);
		
		console.log(a);

		//--if/else
		
		if (a===b){console.log("try again!");ties++;}
		else if(a===0 && b===2 || a===1 && b===0 || a===2 && b===1) {
			console.log("you loss"); losses++	;	  
		}
		else if(b===-1){console.log("Please press only in between P, R or S. ");}
		else{
			console.log("you win");wins++;
		}
		
		c = a + 1;
		console.log(c);
	
		d = b + 1;
		console.log(d);
		
		// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
		var html = "<p>You choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+d+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160; Champ choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+c+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160;  <span class='w3-text-red'>Your wins:</span> " + wins + ", <span class='w3-text-red'>losses:</span> " + losses + ", <span class='w3-text-red'>ties:</span> " + ties + "</p>";
		
		// Set the inner HTML contents of the #game div to our html string
		document.querySelector("#game").innerHTML = html;
						
		}
		
		i.onclick = function () {
			
		//--let user guess
		// Determines which key was pressed.
		var youGuess = "s";
		
		console.log("you guess: "+youGuess);
		
		var yourGuess = String(youGuess).toLowerCase();
		
		console.log("your guess: "+yourGuess);
		
		var b = game.indexOf(yourGuess);
		
		console.log(b);
		
		//--let computer guess
		var compGuess = game[Math.floor(Math.random()*game.length)];
		
		console.log("comp Guess: "+compGuess);
		
		var computerGuess = String(compGuess);
		
		console.log("computer Guess: "+computerGuess);
		
		var a = game.indexOf(computerGuess);
		
		console.log(a);

		//--if/else
		
		if (a===b){console.log("try again!");ties++;}
		else if(a===0 && b===2 || a===1 && b===0 || a===2 && b===1) {
			console.log("you loss"); losses++	;	  
		}
		else if(b===-1){console.log("Please press only in between P, R or S. ");}
		else{
			console.log("you win");wins++;
		}
		
		c = a + 1;
		console.log(c);
	
		d = b + 1;
		console.log(d);
		
		// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
		var html = "<p>You choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+d+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160; Champ choose: <img src='assets/images/rps/rock_paper_scissors__2x-0"+c+".svg' height='70px' width='70px' border='0' style='top:0;'  />&#160;&#160;  <span class='w3-text-red'>Your wins:</span> " + wins + ", <span class='w3-text-red'>losses:</span> " + losses + ", <span class='w3-text-red'>ties:</span> " + ties + "</p>";
		
		// Set the inner HTML contents of the #game div to our html string
		document.querySelector("#game").innerHTML = html;
						
		}
		
		