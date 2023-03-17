// question: Write a code to print a random number between 1 to 6 like a ludo dice.
function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(getRandomNumber(1, 6));
