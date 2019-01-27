let Phrase = require("quartz-palindrome");
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
	alert(`${phrase} is a palindrome.`);
} else {
	alert(`${phrase} is not a palindrome`);
}

