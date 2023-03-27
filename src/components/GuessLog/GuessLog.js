import React from "react";
import Guess from "../Guess";

function GuessLog({log, guessAnswer}) {
    console.log('log', log)
    return <>
        <div className="guess-results">
            {log.map((item) => (
                <Guess
                    userGuess={item}
                    gameAnswer={guessAnswer}
                    key={Math.random() + item}
                />))}
        </div>
    </>;
}

export default GuessLog;
