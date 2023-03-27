import React from "react";

function Guess({ userGuess }) {
    return <>
        <p key={Math.random() + userGuess} className="guess">
            {userGuess.map((char) => (<span key={Math.random() + char} className="cell">{char}</span>))}
        </p>
    </>;
}

export default Guess;
