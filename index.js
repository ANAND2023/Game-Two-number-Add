let music = new Audio("music.mp3")
	let audioTurn = new Audio("ting.mp3")
	let gameover = new Audio("end.mp3")
	let yes=new Audio("yes.mp3")
	let no=new Audio("no.mp3")
	let start=new Audio("start.mp3")

var num1, num2, correctAnswer, score = 0, timeLeft = 60;
		var numbersDiv = document.getElementById("numbers");
		var answerButtons = document.getElementById("answer-buttons").getElementsByTagName("button");
		var resetButton = document.getElementById("resetButton");
		var scoreP = document.getElementById("score");
		var timerP = document.getElementById("timer");

		// Generate two random numbers between 0 and 9
		function generateNumbers() {
			num1 = Math.floor(Math.random() * 5)+1;
			num2 = Math.floor(Math.random() * 4)+1;
			correctAnswer = num1 + num2;
			numbersDiv.innerHTML = num1 + " + " + num2;
		}

		// Check the user's answer and update the score
		function checkAnswer(userAnswer) {
			if (userAnswer === correctAnswer) {
				score++;
				scoreP.innerHTML = "Score: " + score;
                yes.play();
				generateNumbers();
			} else {
                no.play();
				score--;
				scoreP.innerHTML = "Score: " + score;
				generateNumbers();
			}
		}

		// Set up the timer and update it every second
		function startTimer() {
            audioTurn.play();
			var timerId = setInterval(function() {
				timeLeft--;
				timerP.innerHTML = "Time Left: " + timeLeft + "s";
				if (timeLeft === 0) {
					clearInterval(timerId);
					for (var i = 0; i < answerButtons.length; i++) {
					  answerButtons[i].disabled = true;
					}
					resetButton.disabled = false;
                   
					alert("Game over! Your final score is " + score + ".");
                    gameover.play();
				}
			}, 1000);
		}

		// Start the game
		function startGame() {
            gameover.play();
			generateNumbers();
			startTimer();
			for (var i = 0; i < answerButtons.length; i++) {
				answerButtons[i].disabled = false;
			}

			/* resetButton.disabled = true */
           
		}
        function resetGame() {
            // Reset variables
            num1 = 0;
            num2 = 0;
            correctAnswer = 0;
            score = 0;
            timeLeft = 60;
          
            // Reset HTML elements
            numbersDiv.innerHTML = "";
            scoreP.innerHTML = "Score: " + score;
            timerP.innerHTML = "Time Left: " + timeLeft + "s";
            scoreboard.innerHTML = "";
          
            // Enable answer buttons and disable reset button
            for (var i = 0; i < answerButtons.length; i++) {
              answerButtons[i].disabled = false;
            }
            resetButton.disabled = true;
          
            // Start the game
            startGame();
          }

  



// let music = new Audio("music.mp3")
// 	let audioTurn = new Audio("ting.mp3")
// 	let gameover = new Audio("end.mp3")
// 	let yes=new Audio("yes.mp3")
// 	let no=new Audio("no.mp3")
// 	let start=new Audio("start.mp3")
    
	
	
// 	// Set up the game variables
//     var num1, num2, correctAnswer, score = 0, timeLeft = 60;
//     var numbersDiv = document.getElementById("numbers");
//     var answerInput = document.getElementById("answer");
//     var submitButton = document.querySelector("button");
//     var resetButton = document.querySelector("button:nth-of-type(2)");
//     var scoreP = document.getElementById("score");
//     var timerP = document.getElementById("timer");

//     // Generate two random numbers between 1 and 10
//     function generateNumbers() {
//       num1 = Math.floor(Math.random() * 4) + 1;
//       num2 = Math.floor(Math.random() * 4) + 1;
//       correctAnswer = num1 + num2;
//       numbersDiv.innerHTML = num1 + " + " + num2;
//     }

//     // Check the user's answer and update the score
//     function checkAnswer() {
// 		audioTurn.play();
//       var userAnswer = parseInt(answerInput.value);
//       if (userAnswer === correctAnswer) {
//         score++;
//         scoreP.innerHTML = "Score: " + score;
//         answerInput.value = "";
//         generateNumbers();
// 		audioTurn.play();
// 		yes.play();
		
//       } else {
//         score--;
//         scoreP.innerHTML = "Score: " + score;
//         answerInput.value = "";
//         generateNumbers();
// 		// audioTurn.play();
// 		no.play();
//       }
//     }

//     // Set up the timer and update it every second
//     function startTimer() {

//       var timerId = setInterval(function() {
//         timeLeft--;
//         timerP.innerHTML = "Time Left: " + timeLeft + "s";
//         if (timeLeft === 0) {
//           // gameover.play();
//           // end.play();
//           clearInterval(timerId);
//           // end.play();
//           answerInput.disabled = true;
//           submitButton.disabled = true;
//           resetButton.disabled = false;
//           gameover.play();
//           alert("Game over! Your final score is " + score + ".");
//         }
//       }, 1000);
//     }

//     // Start the game
//     function startGame() {
// 		start.play();

//       generateNumbers();
//       startTimer();
//       answerInput.disabled = false;
//       submitButton.disabled = false;
//       resetButton.disabled = true;
//     }

//     // Reset the game
//     function resetGame() {
//       // gameover.play();
//       score = 0;
//       timeLeft = 60;
//       scoreP.innerHTML = "Score: " + score;
//       timerP.innerHTML = "Time Left: " + timeLeft + "s";
//       answerInput.value = "";
//       answerInput.disabled = true;
//       submitButton.disabled = true;
//       resetButton.disabled = false;
//       numbersDiv.innerHTML = "";
//     }

//       function one(){
//          let textvalue=document.querySelector("boxtext");
//          console.log(textvalue)
//       }






