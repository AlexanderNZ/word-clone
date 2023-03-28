import React from "react";

function GameEndBanner({outcome, numberOfTurnsTaken, answer}) {
    let text;
    if (outcome === 'happy') {
        text =
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {numberOfTurnsTaken} guesses</strong>.
            </p>
    } else {
        text = <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    }
    return <>
        <div className={`banner ${outcome}`}>
            {text}
        </div>
    </>;
}

export default GameEndBanner;
