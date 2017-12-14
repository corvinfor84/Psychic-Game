
      var compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        var guessesLeft = 9;
        var wins = 0;
        var losses = 0;
        

        document.onkeyup = function(event) {

           var userGuess = event.key;

        
        var computerGuess = compLetter[Math.floor(Math.random() * compLetter.length)];

        if (userGuess === computerGuess) {
          wins++, guessesLeft = 9;
        }

        else if (userGuess != computerGuess) {
          guessesLeft --;
        }

        if (wins === 10) {
            wins = 0, losses = 0, guessesLeft = 9;
            alert("Congratulations you guessed correct I was thinking of " + computerGuess);
            alert("GAME OVER")
          }

          if (losses === 10) {
            wins = 0, losses = 0, guessesLeft = 9;
            alert("YOU LOSE");
          }

          if (guessesLeft === 0) {
            losses ++, guessesLeft = 9;
          }

        var text =
            
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>You chose the letter: " + userGuess + "</p>";

          document.querySelector("#gametime").innerHTML = text;

        };
    
