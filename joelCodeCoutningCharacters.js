// var o ={};
// var key = 'f';
// o['g'] = 1;
// o[key] = 1;

// var o = { a: 1};

// console.log('a' in o); // true
// console.log('b' in o); // false


// Takes a string as parameters and returns an object.
// The object has each unique, non-whitespace character as keys
// and the number of times they occur as values
function countLetters(str){
  var strWithoutSpaces = str.split(' ').join('');

  var instancesOfEachLetter = {};

  for(var i = 0; i < strWithoutSpaces.length; i++){
    var letter = strWithoutSpaces[i];

    // We have to check to see if we already have a value
    // for this letter in the instancesOfEachLetter object.
    // If we do, we add 1 to it.  If we don't, we set it to 1.

    if(letter in instancesOfEachLetter){
      instancesOfEachLetter[letter] += 1;
    }else {
      instancesOfEachLetter[letter] = 1;
    }
  }

  return instancesOfEachLetter;
}

console.log(countLetters('lighthouse in the house'));