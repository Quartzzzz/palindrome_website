module.exports = Phrase;


function reverse(string) {
return Array.from(string).reverse().join("");
}
function palindrome(string) {
	let processedContent = string.toLowerCase();
	return (processedContent === reverse(processedContent))
}

console.log(palindrome("Radar"));

// Object constructor
function Phrase(content) {
	this.content = content;
	this.processor = function processor (string) {
		return string.toLowerCase();
	}
	this.processedContent = function processedContent() {
		return this.processor(this.content);
	}
	this.palindrome = function palindrome() {
	return this.processedContent() === reverse(this.processedContent());
	}
	this.louder = function louder() {
		return this.content.toUpperCase();
	}
}

let goodbye = new Phrase("Bye Bye");
let racecar = new Phrase("Racecar");


console.log(racecar.louder());

function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;
	this.processedContent = function processedContent() {
		return this.processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();

let bateau = new TranslatedPhrase("bateau", "boat");
let frase = new TranslatedPhrase("recognize", "reconocer");

console.log(bateau.translation);
console.log(frase.palindrome());

//Add a blank method to the String object prototype that
// returns true if the string is empty or consists solely
// of whitespace (spaces, tabs, or newlines). Hint: Use a 
//regular expression (Section 4.3.2). You will need the regex
// syntax for the start and end of a string (Figure 7.6). 

String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
  }

var testReverse = "gold";

console.log(testReverse.reverse());

// Create a method that returns true if a string is blank
String.prototype.blank = function() {
		if (this.match(/^\s+$/)) {
		return true;
	} else {
		return false;
	}
}

var testBlank = " ";

console.log(testBlank.blank());

// Create a method that returns the last item of an array
Array.prototype.last = function() {
	return this.splice(this.length-1, 1);
}

var testArray = [ "pumba", "timon", "mufasa"];

console.log(testArray.last());
