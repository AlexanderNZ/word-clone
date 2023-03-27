import React from "react";

function GuessLog({ log }) {
    return <>
        <div className="guess-results">
            {log.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    </>;
}

export default GuessLog;
