var output = document.getElementById("output");
var input = document.getElementById("input");
var button = document.getElementById("submit");
var userInput = "";

button.addEventListener("click", checkLetters)

  function checkLetters() {
    if (input.validity.valid && input.value !== "") {
    userInput = input.value
// }
}
    console.log("button clicked. The user typed: ")
}


  // function reversal() {

  // }

  // function alphabits() {

  // }

  // function palindrome() {

  // }

  // reversal(testString);
  // alphabits(testString);
  // palindrome(testString);


//   1. Copy the code below into the JavaScript file
// 1. In your HTML, create an text input and a button.
// 1. The text input should only [accept letters](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-pattern). No numbers.
// 1. Implement the logic in the `reversal` function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// 1. Implement the logic in the `alphabits` function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// 1. Implement the logic in the `palindrome` function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// 1. When the user presses the enter key in the text input, or clicks the button, set the value of the `testString` variable (see below) to the value of the input.
// 1. The output of each of the functions should immediately appear as well.