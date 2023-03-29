import React from "react";
import {checkGuess} from "../../game-helpers";
import GameEndBanner from "../GameEndBanner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function Guess({ userGuess, gameAnswer, turnNumber }) {
    let answerMap = [
        { letter: '', status: ''},
        { letter: '', status: ''},
        { letter: '', status: ''},
        { letter: '', status: ''},
        { letter: '', status: ''}
    ];
    const joinedGuess = userGuess.join('')
    let banner;
    if (joinedGuess !== '') {
        answerMap = checkGuess(joinedGuess, gameAnswer)
     if (joinedGuess === gameAnswer) {
            banner = <GameEndBanner answer={gameAnswer} numberOfTurnsTaken={turnNumber} outcome={'happy'}/>
        }
        if (NUM_OF_GUESSES_ALLOWED - turnNumber - 1 < 1) {
            banner = <GameEndBanner answer={gameAnswer} numberOfTurnsTaken={turnNumber} outcome={'sad'}/>
        }
    }

    return <>
        <p key={Math.random() + userGuess} className="guess">
            {answerMap.map((row) => (
                <span
                    key={Math.random() + row.letter}
                    className={`cell ${row.status}`}>
                    {row.letter}
                </span>
            ))}
        </p>
        {banner}
    </>;
}

export default Guess;
