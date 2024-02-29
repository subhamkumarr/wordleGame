# Word Game 🤩

Recreation of a popular online word game, Wordle:

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)

In Wordle, users have 6 attempts to guess a 5-letter word. You're helped along the way by ruling out letters that aren't in the word, and being told whether the correct letters are in the correct location or not.

## Winning and Loosing:

The user wins the game when their guessed word is identical to the `answer`. They lose the game if they submit 6 guesses without winning.

![Screenshot of a won game, showing a green success banner](docs/happy-banner.png)


![Screenshot of a won game, showing a red failure banner](docs/sad-banner.png)


## Working on Visual Keyboard

In the real Wordle game, a keyboard is shown below the guesses:
This keyboard is an important game element, since it makes it easy to tell which letters have already been tested.

## Set up guide
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Navigate to the project directory with `cd project-wordle`.
4. Run `npm run dev`.
5. The server will start at `localhost:1234`.
