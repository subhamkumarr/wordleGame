import React from "react";

function GuessInput() {
  const [tentativeGuess, tentativeSetGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 character. 👻");
      return;
    }

    console.log({ tentativeGuess });

    tentativeSetGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          tentativeSetGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
