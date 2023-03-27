import React from "react";
import {checkGuess} from "../../game-helpers";

function Guess({ userGuess, gameAnswer }) {
    let answerMap = [
        { letter: '', status: ''},
        { letter: '', status: ''},
        { letter: '', status: ''},
        { letter: '', status: ''},
        { letter: '', status: ''}
    ];
    if (userGuess.join('') !== '') {
        answerMap = checkGuess(userGuess.join(''), gameAnswer)
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
    </>;
}

export default Guess;
