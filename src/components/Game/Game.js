import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessLog from "../GuessLog";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guess, setGuess] = useState('')
    const [guessLog, setGuessLog] = useState([''])

    function updateUserInputHistory(nextInput) {
        const nextGuessLog = guessLog;
        nextGuessLog.push(nextInput);

        if (guessLog.length > 6) {
            guessLog.shift();
        }
        setGuessLog(nextGuessLog);
        console.log(nextGuessLog)
    }
    return <>
        <GuessLog log={guessLog}/>
        <GuessResults></GuessResults>
        <GuessInput
            userInput={guess}
            userInputMutator={setGuess}
            userInputHistoryMutator={updateUserInputHistory}>
        </GuessInput>
    </>;
}

export default Game;
