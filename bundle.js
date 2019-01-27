(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("quartz-palindrome");
let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
	alert(`${phrase} is a palindrome.`);
} else {
	alert(`${phrase} is not a palindrome`);
}


},{"quartz-palindrome":2}],2:[function(require,module,exports){
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

	this.letters = function letters() {
		let onlyLetters = [];
		for (let i = 0; i < this.content.length; i++) {
			if (this.content[i].match(/[a-zA-Z]+/g)) {
				 onlyLetters += this.content[i]
			}
		} return onlyLetters.toLowerCase();
	}
	this.processor = function processor () {
		return this.letters.toLowerCase();
	}
	//this.processedContent = function processedContent() {
	//	return this.processor(this.content);
	//}
	this.palindrome = function palindrome() {
	return this.letters() === reverse(this.letters());
	}
	this.louder = function louder() {
		return this.content.toUpperCase();
	}

}

let goodbye = new Phrase("Bye Bye");
let racecar = new Phrase("Racecar");
let madam = new Phrase("Madam, I'm Adam!");

console.log(madam.palindrome());


//console.log(racecar.louder());
//
//function TranslatedPhrase(content, translation) {
//	this.content = content;
//	this.translation = translation;
//	this.processedContent = function processedContent() {
//		return this.processor(this.translation);
//	}
//}
//
//TranslatedPhrase.prototype = new Phrase();
//
//let bateau = new TranslatedPhrase("bateau", "boat");
//let frase = new TranslatedPhrase("recognize", "reconocer");
//
//console.log(bateau.translation);
//console.log(frase.palindrome());
//
////Add a blank method to the String object prototype that
//// returns true if the string is empty or consists solely
//// of whitespace (spaces, tabs, or newlines). Hint: Use a 
////regular expression (Section 4.3.2). You will need the regex
//// syntax for the start and end of a string (Figure 7.6). 
//
//String.prototype.reverse = function() {
//    return Array.from(this).reverse().join("");
//  }
//
//var testReverse = "gold";
//
//console.log(testReverse.reverse());
//
// Create a method that returns true if a string is blank
//String.prototype.blank = function() {
//		if (this.match(/^\s+$/)) {
//		return true;
//	} else {
//		return false;
//	}
//}
//
//var testBlank = " ";
//
//console.log(testBlank.blank());
//
//// Create a method that returns the last item of an array
//Array.prototype.last = function() {
//	return this.splice(this.length-1, 1);
//}
//
//var testArray = [ "pumba", "timon", "mufasa"];
//
//console.log(testArray.last());
},{}]},{},[1]);
