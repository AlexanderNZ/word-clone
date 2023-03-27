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
    const [guess, setGuess] = useState('')
    const [guessLog, setGuessLog] = useState([
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','',''],
        ['','','','','']])

    function updateUserInputHistory(nextInput) {
        const nextGuessLog = guessLog;
        nextGuessLog.push(nextInput);
        if (guessLog.length > NUM_OF_GUESSES_ALLOWED - 1) {
            guessLog.shift();
        }
        setGuessLog(nextGuessLog);
    }

    return <>
        <GuessResults log={guessLog}/>
        <GuessInput
            userInput={guess}
            userInputMutator={setGuess}
            userInputHistoryMutator={updateUserInputHistory}>
        </GuessInput>
    </>;
}

export default Game;
