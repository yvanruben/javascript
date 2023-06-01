

//1ST DAILY CHALLENGE

// const makeAllCaps=(words) =>{
//     return new Promise((resolve, reject) => {
//       const allStrings = words.every(word => typeof word === 'string');
//      // const allStrings = [...words];
  
//       if (allStrings) {
//         const uppercasedWords = words.map(word => word.toUpperCase());
//         resolve(uppercasedWords);
//       } else {
//         reject('Not all elements in the array are strings.');
//       }
//     });
//   }
  
//   function sortWords(words) {
//     return new Promise((resolve, reject) => {
//       if (words.length > 4) {
//         const sortedWords = words.sort();
//         resolve(sortedWords);
//       } else {
//         reject('The array length is not bigger than 4.');
//       }
//     });
//   }

  
//   const wordsArray = ['mango', 'banana', 'orange', 'letchi'];

// makeAllCaps(wordsArray)
//   .then(uppercasedArray => {
//     console.log('Uppercased words:', uppercasedArray);
//     return sortWords(uppercasedArray);
//   })
//   .then(sortedArray => {
//     console.log('Sorted words:', sortedArray);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });



  //2nd DAILY CHALLENGE

  const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  const toJs = () => {
    return new Promise((resolve, reject) => {
      try {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
          reject('Error: Morse JavaScript object is empty!');
        } else {
          resolve(morseObject);
        }
      } catch (error) {
        reject('Error: Failed to parse Morse JSON string!');
      }
    });
  };
  
  const toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or sentence:');
      const morseTranslation = [];
  
      if (!userInput) {
        reject('Error: Empty input!');
      }
  
      for (let char of userInput.toLowerCase()) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Error: Character "${char}" doesn't exist in the Morse JavaScript object!`);
        }
      }
  
      resolve(morseTranslation);
    });
  };
  
  const joinWords = (morseTranslation) => {
    const translatedText = morseTranslation.join(' ');
    document.getElementById('morse-output').textContent = translatedText;
  };
  
  // Usage example
  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.log('Error:', error));
  