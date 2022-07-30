$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  // event handlers
  $('#submit-guesses-button').on('click', submitGuesses)
}

function getGuesses () {
  console.log('in get guesses');
  $.ajax ({
    method: 'GET',
    url: '/guesses'
  }).then (function(response){
    console.log('resonse', response);
    $('#guess-result').empty();
    for (let guess of response) {
    $('#guess-result').append(`
    <li>Guess 1 is ${guess.guessOne} that guess is ${guess.resultOne} </li>
    <li>Guess 2 is ${guess.guessTwo} that guess is ${guess.resultTwo}</li>
    `)}
  }).catch(function (error) {
    console.log(error);
    alert('Something went wrong oh nooooo!!!')
  })
} 

function submitGuesses() {
  console.log('In submitGuesses')
  $.ajax({
    method: 'POST',
    url: '/guesses',
    data: {
      guessOne: $('#guess-one').val(),
      guessTwo: $('#guess-two').val()
    }
  }).then(function (response) {
    getGuesses();
  }).catch(function (error) {
    console.log(error);
    alert('Something went wrong oh nooooo!!!')
  })
  
};