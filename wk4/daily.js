let sentence='The movie is not that bad, I like it';
console.log(sentence);
let wordNot=sentence.indexOf('not');
console.log(wordNot);
let wordBad=sentence.indexOf('bad');
console.log(wordBad)


if (wordNot>=0 && wordNot<wordBad){
    const toReplace=sentence.substring(wordNot,wordBad +3);
    console.log(toReplace)
   const newsentence= sentence.replace(toReplace,'good')
   console.log(newsentence)

}
else{
    console.log(sentence);
}
