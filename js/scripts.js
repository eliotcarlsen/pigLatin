function pigLatin (input){

  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var vowels = ["a","A","e","E","i","I","o","O","u","U"];
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z","B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Z","y","Y"]
  //for (index = 0; index >= input.length; index += 1)
  var result = [];
  var ay = "ay";
  debugger;
  input.forEach(function(word){
    if(alphabet.includes(word.charAt(0)))
  {
      if(vowels.includes(word.charAt(0))){
        word = word + ay;
        alert("it starts with a vowel");
        result.push(word);
      }
      else if (word.charAt (0) === "q" && word.charAt(1) === "u") {
        var firstLetter = "qu";
        var newWord = word.slice(1);
        var newWord = word.slice(2);
        word =  newWord + firstLetter + ay;
        result.push(word);
      } else if ((consonants.includes(word.charAt(0))) && (word.charAt(1) === "q") && (word.charAt(2) === "u")) {
        var firstLetter = word.charAt(0);
        var secondLetter = word.charAt(1);
        var thirdLetter = word.charAt(2);
        var newWord = word.slice(1);
        var newWord = word.slice(2);
        var newWord = word.slice(3);
        word =  newWord + firstLetter + secondLetter + thirdLetter + ay;
        result.push(word);
      }
      else if ((consonants.includes(word.charAt(0))) && (consonants.includes(word.charAt(1))) && (consonants.includes(word.charAt(2))) &&
      (consonants.includes(word.charAt(3))) &&
      (consonants.includes(word.charAt(4)))){
        var firstLetter = word.charAt(0);
        var secondLetter = word.charAt(1);
        var thirdLetter = word.charAt(2);
        var fourthLetter = word.charAt(3);
        var fifthLetter = word.charAt(4);
        var newWord = word.slice(1);
        var newWord = word.slice(2);
        var newWord = word.slice(3);
        var newWord = word.slice(4);
        var newWord = word.slice(5);
        word =  newWord + firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter + ay;
        alert("it starts with a consonant.");
        result.push(word);
      }
      else if ((consonants.includes(word.charAt(0))) && (consonants.includes(word.charAt(1))) && (consonants.includes(word.charAt(2))) &&
      (consonants.includes(word.charAt(3)))){
        var firstLetter = word.charAt(0);
        var secondLetter = word.charAt(1);
        var thirdLetter = word.charAt(2);
        var fourthLetter = word.charAt(3);
        var newWord = word.slice(1);
        var newWord = word.slice(2);
        var newWord = word.slice(3);
        var newWord = word.slice(4);
        word =  newWord + firstLetter + secondLetter + thirdLetter + fourthLetter + ay;
        alert("it starts with a consonant.");
        result.push(word);
      }
      else if ((consonants.includes(word.charAt(0))) && (consonants.includes(word.charAt(1))) && (consonants.includes(word.charAt(2)))){
        var firstLetter = word.charAt(0);
        var secondLetter = word.charAt(1);
        var thirdLetter = word.charAt(2);
        var newWord = word.slice(1);
        var newWord = word.slice(2);
        var newWord = word.slice(3);
        word =  newWord + firstLetter + secondLetter + thirdLetter + ay;
        alert("it starts with a consonant.");
        result.push(word);
      }
      else if ((consonants.includes(word.charAt(0))) && (consonants.includes(word.charAt(1)))){
        var firstLetter = word.charAt(0);
        var secondLetter = word.charAt(1);
        var newWord = word.slice(1);
        var newWord = word.slice(2);
        word =  newWord + firstLetter + secondLetter + ay;
        alert("it starts with a consonant.");
        result.push(word);
      }
      else if ((consonants.includes(word.charAt(0)))){
        var firstLetter = word.charAt(0);
        var newWord = word.slice(1);
        word =  newWord + firstLetter + ay;
        alert("it starts with a consonant.");
        result.push(word);
      }
  } else {
    alert("it's not a word.")
    };
  });
  result = result.toString();
  for(var i = 0; i <= result.length; i ++ ){
    result = result.replace(","," ");
  };
  $(".result").text(result);
};
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    userInput = userInput.split(" ");
    pigLatin(userInput);

  });
});















/*The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

The program takes a multiple letter word and adds ay to the end.
input: cat
output: catay

The program takes a word and moves the first letter if its a single consonant to the back.
input: cat
output: atcay

Make sure the above spec works for "y"
input: you
output: ouyay

The program takes a word and moves the first letters to the back if multiple consonants.
input: scram
output: amscray

The program takes a word that starts with "qu" and moves both letters to the back of the word.
input: quit
output: itquay

The program takes a word that has a "qu" after a consonant and moves the three letters to the back.
input: squeal
output: ealsquay

The program*/
