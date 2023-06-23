const results = [];                                                                       // Initialized an empty array

      function checkPalindrome() {                                                       // created function checkPalindrome
        const input = document.getElementById("textInput");                               // the variable input takes the users input 
        const word = input.value.trim();                                                  // the variable words value is what the user puts in the input space . trim() is just to cut of the whitespaces in btw words

        if (!word) {                                                                      //if statement checks if word variable is not true or null/undefined and returns alert box if conditions not met 
          alert("Please enter a word.");
          return;
        }

        const result = isPalindrome(word);                                               //results invokes isPalindrome with word[line 5] being the argument and storing the results in results variable. value of results will depend on the function condition
        displayResult(word, result);                                                     // calls displayResult() with 2 arguments . func displays/presents the results of the func ispalindrome
        input.value = " ";                                                              // this line assigns empty str to the value property of the variable input -[line 4]. this line clears the value the user puts in and resets 
      }

      function isPalindrome(word) {                                                   //function with the param (word) is declared 
        const reversed = word.split("").reverse().join("");                           //const reversed,stores  reveresed version of word.split("")transforms word into array of individual characters . reserve(),turns words around. join("separator of the words")takes reversed word and joins it back
        return word.toLowerCase() === reversed.toLowerCase();                         //checks if the orginal word is the same as the reversed word .toLowerCase()makes the letters lowers ,both original and reversed 
      }

      function displayResult(word, isPalindrome) {                                    // delcares the function displayResults with two params, word and a function isPalindrome . this functions displays results on web
        const resultsList = document.getElementById("resultsList");                   //variable resultsList stores the results of what line18 index.html  takes.

        const listItem = document.createElement("li");                                          //declared listItem
        listItem.textContent = `${word}: ${isPalindrome ? "Palindrome" : "Not a Palindrome"}`; //this is short version of an if else statement
      //   if (isPalindrome) {
      //     listItem.textContent = word + " is a palindrome.";
      // } else {
      //     listItem.textContent = word + " is not a palindrome.";
      // }
      
        // resultsList.prepend(listItem);  
        resultsList.insertAdjacentHTML("afterbegin", listItem.outerHTML);                 //insertAdjacentHTML :built-in JavaScript method that allows you to insert HTML content into an element at a specified position relative to the element's existing content.
      }                                                                                   //afterbegin the position argument of insertAdjacentHTML


      