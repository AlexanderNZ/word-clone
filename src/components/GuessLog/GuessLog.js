import React from "react";
import Guess from "../Guess";

function GuessLog({log}) {
    return <>
        <div className="guess-results">
            {log.map((item) => ( <Guess key={Math.random() + item} userGuess={item}/> ))}
        </div>
    </>;
}

export default GuessLog;
