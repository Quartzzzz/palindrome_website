let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
function realUrls(elements) {
	return functionalUrls(elements).map(element => `https://example.com/${element}`)
}
console.log(functionalUrls(states));
console.log(realUrls(states));

// Filter
// Returns the names of single word states
// Imperative version
function imperativeFilter(elements) {
	let singles = [];
	elements.forEach((element) => {
		if (element.split(/\s+/).length === 1) {
			singles.push(element)			
		}
	}) ;
	return singles
}

console.log(imperativeFilter(states))

// Functional version
function functionalFilter(elements) {
	return elements.filter(state => state.split(/\s+/).length === 1);
}
 

console.log(functionalFilter(states));

//Write two filter functions that return the Dakotas: 
//one using String#includes (Section 2.5) to test for 
//the presence of the string “Dakota” and one using a 
//regex that tests for the length of the split array being 2. 

// Returns a string if it includes the string "Dakota"
function returnDakotasIncludes(elements) {
	let str = "Dakota";
	return elements.filter(element => element.includes(str) === true)
}

console.log(returnDakotasIncludes(states));

function returnDakotasRegex(elements) {
	return elements.filter(element => element.split(/\s+/).length === 2)
}

console.log(returnDakotasRegex(states));

// Reduce

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));

let numbers = [ 1, 2, 3, 4, 5 ];

// Create a function that returns the product of an array of numbers
let multiplyNumbers = (numbers) => {
	return numbers.reduce((total, n) => { return total *= n; });
}

console.log(multiplyNumbers(numbers));// 120
