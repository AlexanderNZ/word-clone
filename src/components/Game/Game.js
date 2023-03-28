import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessLog";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guess, setGuess] = useState('');
    const [guessLog, setGuessLog] = useState([
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']]);
    const [numberOfGuessesMade, setNumberOfGuessesMade] = useState(0);

    function updateUserInputHistory(nextInput) {
        const nextGuessLog = guessLog;
        nextGuessLog.splice(numberOfGuessesMade, 0, nextInput);
        if (guessLog.length > NUM_OF_GUESSES_ALLOWED - 1) {
            guessLog.pop();
        }
        setGuessLog(nextGuessLog);

        const nextNumberOfGuessesMade = numberOfGuessesMade + 1;
        setNumberOfGuessesMade(nextNumberOfGuessesMade);
    }

    return <>
        <GuessResults log={guessLog} guessAnswer={answer} turnNumber={numberOfGuessesMade}/>
        <GuessInput
            userInput={guess}
            userInputMutator={setGuess}
            userInputHistoryMutator={updateUserInputHistory}>
        </GuessInput>
    </>;
}

export default Game;
