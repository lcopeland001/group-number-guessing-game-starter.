const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5002;

const guessArray = [];
// can make a reset button that calls this function on a POST??
let randomNumber = randomNumberGenerator()
console.log(randomNumber);
function randomNumberGenerator() {
  return Math.floor(Math.random()*25)+1
}

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.post('/guesses', (req, res) =>{
  const guess = req.body;
  console.log(guess);
  if(parseFloat(guess.guessOne) === randomNumber) {
    firstGuessResult = 'Correct!'
  } else if(guess.guessOne < randomNumber) {
    firstGuessResult = 'Low'
  } else if(guess.guessOne > randomNumber) {
    firstGuessResult = 'High'
  }
  if(parseFloat(guess.guessTwo) === randomNumber) {
    secondGuessResult = 'Correct!'
  } else if(guess.guessTwo < randomNumber) {
    secondGuessResult = 'Low'
  } else if(guess.guessTwo > randomNumber) {
    secondGuessResult = 'High'
  }
  guess.resultOne = firstGuessResult
  guess.resultTwo = secondGuessResult
  guessArray.push(guess);
  console.log(guess)
  res.sendStatus(201); 
})
// guess {
//  guessOne: value from client
//  guessTwo: value from client
//  resultOne: high/low/correct
//  resultTwo: high/low/correct
// }


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
