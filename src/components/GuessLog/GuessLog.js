import React from "react";

function GuessLog({log}) {
    return <>
        <div className="guess-results">
            <div className="guess-results">
                {log.map((item) => {
                    if (item !== '') {
                        return (
                            <p key={Math.random() + item} className="guess">
                                {item.map((char) => (<span key={Math.random() + char} className="cell">{char}</span>))}
                            </p>
                        )
                    } else {
                        return (
                            <p className="guess">
                                <span className="cell"></span>
                                <span className="cell"></span>
                                <span className="cell"></span>
                                <span className="cell"></span>
                                <span className="cell"></span>
                            </p>
                        )
                    }
                })}
            </div>
        </div>
    </>;
}

export default GuessLog;
