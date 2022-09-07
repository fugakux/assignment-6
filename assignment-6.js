function twoIndicesSum(list, target) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return [i, j];
      }
    }
  }
}

function reverseString(characterList) {
  let end = characterList.length - 1;
  let start = 0;
  while (start < end) {
    let temp = characterList[start];
    characterList[start] = characterList[end];
    characterList[end] = temp;
    start++;
    end--;
  }
  return characterList;
}

function romanToInteger(romanNumber) {
  


  let map = new Map();
	map.set("I", 1);
	map.set("V", 5);
	map.set("X", 10);
	map.set("L", 50);
	map.set("C", 100);
	map.set("D", 500);
	map.set("M", 1000);
  
  let answer = map.get(romanNumber[romanNumber.length - 1]);
  for (let m = romanNumber.length - 2; m >= 0; m--) {
    let num = romanNumbers[romanNumber.charAt(m)];
    if (map.get(romanNumber[m]) >= map.get(romanNumber[m + 1])) sum += map.get(romanNumber[m]);
    else answer -= map.get(romanNumber[m]);
  }
  return answer;
}

function lastWordLenght(sentence) {
  const wordsList = sentence.trim().split(" ");
  const lastWord = wordsList[wordsList.length - 1];
  return lastWord.length;
}

function uniqueCharacterIndex(word) {
  let wordDictionary = {};
  for (let i = 0; i < word.length; i++) {
    if (wordDictionary[word[i]]) {
      wordDictionary[word[i]] += 1;
    } else {
      wordDictionary[word[i]] = 1;
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (wordDictionary[word[i]] == 1) {
      return i;
    }
  }
  return -1;
}

function missingNumber(numberList) {
  let numbersSet = new Set(numberList);
  for (let index = 0; index <= numberList.length ; index++) {
    if (!numbersSet.has(index)) {
      return index;
    }
  }
}

const isIsomorphic = (firstWord, secondWord) => {
    if (firstWord.length !== secondWord.length) {
       return false;
    };
    for (let i = 0;
    i < firstWord.length; i++) {
       const a = firstWord.indexOf(firstWord[i]);
       const b = secondWord.indexOf(secondWord[i]);
       if (secondWord[a] !== secondWord[i] || firstWord[b] !== firstWord[i]) {
          return false;
       };
    };
    return true;
 };
