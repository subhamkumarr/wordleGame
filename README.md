# Word Game


In this project, we'll recreate a popular online word game, Wordle:

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.



Alright: over the first 3 exercises, we've been setting up all of the structure and scaffolding. It's time to do some game-logic stuff!

In this exercise, we'll add some CSS classes to color the background of each cell, based on the results and the correct answer:

![Screen recording. The guesses are applied to the game board, and the background colors update accordingly](docs/words-with-backgrounds.gif)

Inside `/src/game-helpers.js`, you'll find a helper function, `checkGuess`. As parameters, it takes a single guess, as well as the correct answer. It returns an array that contains the status for each letter.

For example:

```js
checkGuess('WHALE', 'LEARN');
/*
  Returns:

  [
    { letter: 'W', status: 'incorrect' },
    { letter: 'H', status: 'incorrect' },
    { letter: 'A', status: 'correct' },
    { letter: 'L', status: 'misplaced' },
    { letter: 'E', status: 'misplaced' },
  ]
*/
```

There are 3 possible statuses:

- **correct** — this slot is perfect. It's the right letter in the right place.
- **misplaced** — this letter does exist in the word, but in a different slot.
- **incorrect** — this letter is not found in the word at all.

In the example above, `W` and `H` aren't found in the word `LEARN`, and so they're marked as “incorrect”. `A` is correct, since it's in the 3rd slot in each word. The other two letters, `L` and `E`, are meant to be in other slots.

**These statuses correspond with CSS classes.** The `correct` status has a `correct` class name, which will apply the green background when applied to a cell. Same thing for `misplaced` and `incorrect`.

Your task is to use this function to validate the user's guesses, and apply the correct CSS classes. The final output for a given guess should look like this:

```html
<p class="guess">
  <span class="cell incorrect">W</span>
  <span class="cell incorrect">H</span>
  <span class="cell correct">A</span>
  <span class="cell misplaced">L</span>
  <span class="cell misplaced">E</span>
</p>
```

**Acceptance Criteria:**

- Import the `checkGuess` function from `/src/game-helpers.js`, and use it to validate each of the user's guesses
- When rendering the letters in the `Guess` component, apply the letter's `status` to the `cell` element.
- "Empty" guess slots should have the same markup as before: `<span class="cell"></span>`.

## winning and losing

The user wins the game when their guessed word is identical to the `answer`. They lose the game if they submit 6 guesses without winning.

![Screenshot of a won game, showing a green success banner](docs/happy-banner.png)


![Screenshot of a won game, showing a red failure banner](docs/sad-banner.png)


## Streach Goal -> Visual Keyboard

In the real Wordle game, a keyboard is shown below the guesses:
This keyboard is an important game element, since it makes it easy to tell which letters have already been tested.
