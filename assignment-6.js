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
  const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let answer = 0;
  for (let i = romanNumber.length - 1; ~i; i--) {
    let num = romanNumbers[romanNumber.charAt(i)];
    if (4 * num < ans) answer -= num;
    else answer += num;
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
