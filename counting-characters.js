function countLetters(str){
  var strWithoutSpaces = str.split(' ').join('');

  var instancesOfEachLetter = {};

  for(var i = 0; i < strWithoutSpaces.length; i++){
    var letter = strWithoutSpaces[i];

        if(letter in instancesOfEachLetter){
      instancesOfEachLetter[letter] += 1;
    }else {
      instancesOfEachLetter[letter] = 1;
    }
  }

  return instancesOfEachLetter;
}

console.log(countLetters('lighthouse in the house'));