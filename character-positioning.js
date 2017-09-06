function countLetters(str){
  var strWithoutSpaces = str.split(' ').join('');

  var instancesOfEachLetter = {};

  for(var i = 0; i < strWithoutSpaces.length; i++){
    var letter = strWithoutSpaces[i];

    if (letter in instancesOfEachLetter){
      // {a: { count: 1, indicies: [0, 1] }}

      var count = instancesOfEachLetter[letter]["count"]
      instancesOfEachLetter[letter]["count"] = count + 1

      var indicies = instancesOfEachLetter[letter]["indicies"]
      indicies.push(i)
      // instancesOfEachLetter[letter]["count"] += 1;
    }else {
      instancesOfEachLetter[letter] = { count: 1, indicies: [i] };
    }
  }

  return instancesOfEachLetter;
}

console.log(countLetters('lighthouse in the house'));