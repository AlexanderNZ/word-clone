import React, {useState} from "react";

function GuessInput() {
    const inputStyle = {
        textTransform: 'uppercase'
    }

    function processInput(input) {
        setGuess(input)
    }

    function finaliseInput() {
        const capitalisedInput = guess.toUpperCase()
        if (capitalisedInput.length < 5) {
            console.log('Enter exactly 5 characters')
        } else {
            console.log(capitalisedInput)
            setGuess('')
        }
    }

    const [guess, setGuess] = useState('')
    return (
        <form className="guess-input-wrapper"
              onSubmit={(event) => {
                  event.preventDefault();
                  finaliseInput()
              }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                style={inputStyle}
                maxLength={5}
                value={guess}
                onChange={(event) => {
                    processInput(event.target.value)
                }}
            />
        </form>
    );
}

export default GuessInput;
