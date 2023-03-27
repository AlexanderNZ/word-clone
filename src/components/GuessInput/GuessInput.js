function GuessInput({ userInput, userInputMutator, userInputHistoryMutator }) {
    const inputStyle = {
        textTransform: 'uppercase'
    }

    function processInput(input) {
        userInputMutator(input)
    }

    function finaliseInput() {
        const capitalisedInput = userInput.toUpperCase()
        if (capitalisedInput.length < 5) {
            console.log('Enter exactly 5 characters')
        } else {
            console.log(capitalisedInput)
            userInputHistoryMutator(capitalisedInput)
            userInputMutator('')
        }
    }

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
                value={userInput}
                onChange={(event) => {
                    processInput(event.target.value)
                }}
            />
        </form>
    );
}

export default GuessInput;
