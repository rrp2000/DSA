let sentence = "have a good day"
sentence = sentence.split(" ")

function reverseSenWords(sentence){

    if(sentence.length===0){
        return ""
    }
    return reverse(sentence[0])+" "+reverseSenWords(sentence.slice(1))

}
function reverse(word){
    if(word.length ==1){
        return word
    }
    return reverse(word.slice(1))+word[0]
}

console.log(reverseSenWords(sentence));