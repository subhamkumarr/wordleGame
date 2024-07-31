import React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard';

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  //running / won / lost
  const [gameStatus, setGameStatus] = React.useState("running");

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      {gameStatus}
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
                <WonBanner
                numOfGuesses={guesses.length}
                handleRestart={handleRestart}
              />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
