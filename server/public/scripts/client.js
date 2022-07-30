$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  // event handlers
  $('#submit-guesses-button').on('click', submitGuesses)
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
    //call a get route
    // call guesses 
    // call results
    // append to DOM - <li> guessOne: resultOne looke like "Player one guessed 2 - that was high"
  }).catch(function (error) {
    console.log(error);
    alert('Something went wrong oh nooooo!!!')
  })
};