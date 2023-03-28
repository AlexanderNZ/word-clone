import React from "react";
import Guess from "../Guess";

function GuessLog({log, guessAnswer, turnNumber}) {
    return <>
        <div className="guess-results">
            {log.map((item) => (
                <Guess
                    userGuess={item}
                    gameAnswer={guessAnswer}
                    turnNumber={turnNumber}
                    key={Math.random() + item}
                />))}
        </div>
    </>;
}

export default GuessLog;
