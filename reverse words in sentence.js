
function reverseWordsInSentence(sentence)
{  
    const words = sentence.split(' ');  
    const reversedWords = words.map(word => reverseWord(word));    
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}


let card=prompt("Enter the sentence: ");
const reversedSentence = reverseWordsInSentence(card);
console.log("the reversed sentence: ",reversedSentence); 
