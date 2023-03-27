import React from "react";

function GuessResults() {
    return <>
        <div className="guess-results">
            <p className="guess">
                <span className="cell">F</span>
                <span className="cell">I</span>
                <span className="cell">R</span>
                <span className="cell">S</span>
                <span className="cell">T</span>
            </p>
            <p className="guess">
                <span className="cell">G</span>
                <span className="cell">U</span>
                <span className="cell">E</span>
                <span className="cell">S</span>
                <span className="cell">S</span>
            </p>
            <p className="guess">
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
            </p>
            <p className="guess">
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
            </p>
            <p className="guess">
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
            </p>
        </div>
    </>;
}

export default GuessResults;
