import { countsAsAYes } from './counts-as-a-yes.js';
// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const button = document.getElementById('submit');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    const userName = prompt ('What is your name?');
    const userConfirm = confirm ('Are you sure about this? It\'s all yes or no');
    
    if (!userConfirm) {
        alert('Hello ' + userName + ' you chose to opt out so that sucks');
        console.log('Ended');
        return;
    }

    let scores = 0;
    // Obi-Wan Kenobi
    const mainCharacter = prompt('Is Darth Vader the protagonist?');
    if (countsAsAYes(mainCharacter)){
        scores++;
        console.log('M');
        console.log(scores);
    }

    const duckAte = prompt('Was the door the duck ate made of macarons?');
    if (countsAsAYes(duckAte)){
        scores++;
        console.log('D');
        console.log(scores);
    }

    const endResult = prompt('In the end does Darth get Mr Teddy back?');
    if (countsAsAYes(endResult)) {
        scores++;
        console.log('E');
        console.log(scores);
    }
    
    alert(' The short Quiz is now complete here are your results!');
    results.textContent = userName + ', Your result is ' + scores + ' right out of 3';

});