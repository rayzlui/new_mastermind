# Mastermind

# Installation
If you would like to play Mastermind without installing it locally visit:



Since this app is built with Javascript and React, it will need NodeJS to run. Please download NodeJS from here if you need it:

https://nodejs.org/en/download/

This app was built with NodeJS version 0.34.0. If you are having issues running this app, please verify your NodeJS version.


First thing is you have to clone the app! You can do that by typing the following in your command line:

git clone https://github.com/rayzlui/new_mastermind

Once you have it locally, enter the repository from the command line and type:

npm install

or alternatively if you prefer yarn:

yarn install

Once that is complete, also in the command line type:

npm start 

yarn start

and it should load up and run on your preferred web browser. You are ready to play!

# How To Play

At the start you are given two options: Single Player and Two Player. 

### Single Player:
You will play against the computer. Winning means getting the code correct before your turns is up.

### Two Player:
You will against another player on the same computer. It will be turn based. A score is kept for each player's turn.

After selecting the amount of players, you will be given the game mode options: classic mode and timed mode.

## Classic Mode:
Classic Mode is standard Mastermind, you will be given a certain amount of chances to guess the secret hidden code.

## Timed Mode:
In timed mode, you will have a certain amount of time to guess the secret code. You will have unlimited turns and if you are able to guess the code before the time is up, a new code will be generated and you will earn a point. 

After selecting a game mode, you will be given the option to quick play or use the advance options or change modes.

### Quick Play:
Quick play will have a computer generated secret code of length 4, with 8 options to set it. In classic mode, quick play will have 10 turns and in timed mode, 4 minutes. 

### Advanced Options:
Advanced Options allows you to set the length of the secret code and the number of characters the code will be built with. In classic mode you will be able to also set the amount of turns. In timed mode, you will be able to select the amount of time. 

Additionally, single player, classic mode will allow another person to set the secret code for you, ie, they can set the code instead of a computer. 

### Change Mode:
This will change the current game mode, ie if you are in classic mode, it will go to timed mode and vice versa.

## Gameplay:
To create your code, click a button/index under "My Guess". Once you click it, you an options display will appear. Click on the button of the option you would like to enter in that location. Once an option a selected, the options display will disappear. You may change your code as often as you would like, by clicking on the button/index in your guess.

Press the submit button when you want to check if your code is correct. Note: the submit button will not work if your code isn't completely filled out. You can keep clicking it, but it won't do much (or maybe it will if you keep pressing it). 

Once the code is submitted, you will either:

  - Have won the game if it was correct
  - Lost the game if you are out of turns/time
  - Receive feedback on your code in the move history section. The move history will have your most recent guess on the top of the feed.

### Hint Button:
You may click the hint button to receive a correct number in a correct location. The hint location will be highlighted in a red border. Please note, the hint button will not give you a correct number in a random location. It will be the first possible location that does not have a hint already. Also please note, if you had entered a (you believe is) correct number in your guess, the hint button will still replace that value whether it was correct or not.

Once you receive a hint, you will not be able to change the value in that location (not sure why you would want to). 

Hints are limited to the the hidden code length - 2. Because, you need to get at least two yourself.

### Add Turn Button:
In classic mode, there will be an add turn button. It will add another chance for you to guess the hidden code. This button will also appear if you had lost the game. Just in case you were so close to getting it.

## Game Over:
Once the game ends, you will shown your move history, along with if you won or lost. Additionally, in classic mode, you will be given the option to see what the hidden code was, if you please. You will also be given the option to play again. Clicking the play again button will give you three options. Run it back will restart the game based on exactly the same mode/code length/code options length/time/turns you have just finished. Advanced options will allow you to change the code length/code options/time/turns, but will be the same game mode (ie classic or timed). Change mode will change the game mode. If you want to switch from one player to two player or vice versa, please refresh the page.


# Development Process 
This is really long. This is going into detail about my full thought process into the choices I made for this app.

## 1. Initial Planning

The first thing I decided was I would use React library to construct this application. Since it requires a way for a user to enter their code, React would make the user interface development much easier. I chose React because I am most familiar with it.

I began by listing the essentials of what we need in the app.
  - We need to get a secret code from Random Num Generator
  - We need to store secret code
  - We need a way for user to enter their code
  - We need a way to check if user inputted code is correct 
    - We will need to provide feedback if it is not
  - We need a turn limit
    - We need turn limit to deduct each time we check code.
  - We need to store history of moves

My initial thought was to get the checking portion done first, as I believe it's the "core" of this app. But I realized how we stored the codes would make a difference in the "check if answer is correct" portion. So I analyzed how we should store the codes first and the effects they would have on our check function and our user interactions.

I could store the codes as a string, as an array or as a hash. So I thought of the positives and negatives of each one.

As a String:
  Positives:
    - Easy to check if user submitted answer is correct by using Javascripts string comparison.
  Negatives:
    - Could have false positives in string comparison if we decide to allow larger secret code lengths i.e:
      secretCode = 11 1 11 1 11 1
      userCode =   1 11 1 11 1 11
      Althought we could store it as a string with commas between each number
    - Strings are immutable, so user inputs would rely on typing out on keyboard (which would make future extensions such as using images  impossible) or creating a new string each time there's a user input via buttons. Users would not be able to make mistakes in their inputs with buttons either (ie, cant change location 2 after inputting 4 code values), or at least it would be much more difficult for us the build that functionality.

As a Array:
  Positives: 
    - Arrays are mutable, so changing user inputs would be much easier.
    - Can store objects if we decide to make our each location in code have more info.
  Negatives:
    - We need to go through entire array for our check function.
  
As a Hash:
  Positives:
    - Same as array
  Negatives:
    - Same as array

Since strings were going to make a worse user experience and/or be harder to work with, I eliminated it from contention. In terms of how I was planning to use them, arrays and hashes had similar positives and negatives. I chose arrays because I felt like it would be easier to work with due to the ability of looking up by index (which is an abstraction of what we want to accomplish when we want to allow users to change their code at a certain index). It felt more inituitive. Plus, Javascript arrays have a lot more built in methods than Javascript Object/Hashmap.

Once I settled on using arrays as the code storages, I worked out the check function. We needed our check function to provide feedback (correct + inlocation aka correct2x and correct+notinlocation aka correct1x). So we decided to store the number of correct + in location and correct + not in location in hash (we could do an array as well, but having strong key names made it easier to work with ie check['correct2x'] is easier than check[0]). 

So it looked like this: feedback = {correct2x: 0, correct1x: 0}, correct2x being correct num and correct location, whilst correct1x being correct num only. (I ended up using redPegs and whitePegs due to familiarity the terms with the board game version of Mastermind).

My initial check function was brute force. I would make a copy of the correctCode and userInput code, loop through them and if they're equal at an index, remove them from their respective arrays and add one to feedback[correct2x]. We would then run a loop through the userInput code and search for it in the secretCode. If it is found, we remove it from that secret code array and add one to the feedback[correct1x]. I realized in situations such as:
  correctCode = [1,2,3,4,5,6,7,8,9]
  userCode =    [9,8,7,6,5,4,3,2,1]

it would run at O(n + summation(n)).


I decided to add a hash that stored the number of times a number appears in the correctCode. This would allow us to check for correct numbers but incorrect order easier. So now in the instance of:
    correctCode = [1,2,3,4,5,6,7,8,9]
    correctHash = {1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1}
    userCode =    [9,8,7,6,5,4,3,2,1]
it would take O(2n), one loop to check if it's correct at each location (and we would subtract 1 from correctHash[correctCode[index]]) and 1 loop to check if it's correct but in the wrong location (this would be if correctHash[number] > 0).

I realized I could avoid the second loop by using some logic. As long as correctHash[userCode[index]] > 0, we add to feedback[correct2x] or feed[correct1x] depending on if userCode[index] === correctCode[index]. We subtract 1 from correctHash[userCode[index]] each time this happens. If in a future index, userCode[index] === correctCode[index], but correctHash[userCode[index]] <= 0, we just shift 1 from feedback[correct1x] to feedback[correct2x], because correct2x takes priority. By doing this, our check function runs at O(n).

The design for turn limit + move history was straightforward. Turn limit will be a number and move history will be an array that stored the feedback from our check function.

To retrieve the code from Random Number Generator API, I used Javascript's fetch function. I had to "process" the data because it was in plain text format and I wanted it in an array and hash.


## 2. Setting up working skeleton

With the "core" of Mastermind planned out, I started working on the way a user could input their guess. I came up with two ideas:
  1. Type into an input
  2. Buttons

I chose buttons because it would allow usage of code options that aren't numbers ie images. It also felt more user friendly as users can click on which index in their code they wanted to change rather than having to backspace delete and rewrite portions of their code.

My initial user interface would have buttons representing indexes in their code, where they can click and then click another button from possible options to input that value into their code. There would be a submit button, to submit the code for checking and move history section.


With that, I started working on the Mastermind app in React. 
I initially set up one class component in React that held the whole app. 

I set the state as:
  userboard: an array holds the values of what the user's guess code

  userSelected: the index of the button they currently selected because it'll need to know when and which index a user has clicked on in their code, so it knows where to input the value after they click on an option button

  turns: how many turns are left, so it can end the game

  winner: has the game ended and did they win or lose. 

  correctCode: the secret code

  moveHistory: the user moves history

First we needed to set our secret code. I accomplished this using Javascript fetch in an async function in React's componentDidMount() method. When fetch received the response and the promise fulfilled, it would update correctCode with the secret code

I broke the render two possible returns. One return is if the game is over, which would tell the user if they won or lost.

The second return is the user interface. I split it into four sections, a move history section, a code options (the values the user can choose to add to their code), a user board and a submit button.

The move history was straightforward, loop through the move history and create html paragraphs that described the code and the feedback for the code.

The code options are buttons, which ran a function when clicked that would update the userboard[userSelected] with the value from the clicked button. This button will not work if there's no userSelected to prevent unintended consequences.

The user board are also buttons, when clicked runs a function that updates the userSelected to a button's value. 

The submit button, which handles most of the games logic. When a user clicks submit, it does the following:

  1. Adds the current move into move history
  2. Checks if the answer is correct
    - If it's correct updates the winner state to true
    - If it's incorrect, checks how many turns are left
      - If there are no turns left, updates winner state to false
  3. Deducts a turn from turns left
  4. Clears the userboard
  5. Clears userSelected

My logic behind having all of this logic in the submit button is because this is the moment when the user has completed their code and is ready for checking. It also means their userboard can be reset.

So my Mastermind component looked like this:

class Mastermind

    state
      - userboard
      - userSelectedIndex
      - turns
      - winner
      - correctCode
      - userHistory

    async function sets secretCode
      - makes async fetch call to get secret code
      - updates secretCode with settled async call

    function clickHandler for optionButton
      - updates userboard state with received input

    function clickHandler myGuessButton
      - updates userSelected state with received input
    
    function clickHandler submitButton
      - runs the check code function with userCode and correctCode
        - if correct, updates winner state with true
        - if incorrect:
          - if no turns left updates winner state with false
      - updates moveHistory state with currentMove
      - updates turn state by subtracting 1.
      - updates userBoard state to empty array
      - updates userSelected state to null


  render
    if winner
      return win or lose jsx
    else
      return 
        - moveHistory
        - optionButtons
        - myGuessButtons
        - submitButton
    


## 3. Adding Redux

Once the skeleton for the Mastermind was complete, I decided it would be easier to add extensions by using Redux along with React. Using Redux would allow the app's state to be centralized. This would make it easier to design extensions and not have to worry about passing props from component to component. I could wrap a component with a container and pass it the props it needed to know from there instead. It also allowed everything to be more modular, which made it easier to track where my extensions were having bugs.

Adding Redux was relatively straightforward. The state became reducers, I made each section of the render into their own component and moved the setState logic into actions.

Mastermind was now looking like this:

  reducers
    rootReducer
      - userboard
          type: object
            - board: array
              - stores users code
            - numbersGuessed: integer
              - stores amount of times user inputted into their code
          represents:
          - add a value to userboard
          - reset userboard after a submit
      - userSelectedIndex
          types: integer
          represents: 
          - select an index in userboard
          - unselect once an option is selected
      - turns
          type: integer
          represent:
          - turns left
      - winner
          type: boolean
          represents:
          - winner, loser or still playing
      - correctCode
          type: object
          represents:
          - store code after processing Random Numbere Generator API
      - moveHistory
          types: array
          represents:
          - move history


  actions
    userInput
      purpose: adds the option user selected to enter into their userboard
      effects: userBoard, userSelected
    selectInputSpot
      purpose: selects the index where user wants to enter into their userboard
      effects: userSelected
    setCode
      purpose: sets the secret code
      effects: correctCode
    actionUserMoveToHistory: 
      purpose: adds user's move to move history
      effects: userboard, userSelected, turns, moveHistory
    gameWon/gameLost:
      purpose: let app know when there's a winner/loser
      effects: winner

  
  middleware
    - async function to get secret code on app mount
      - runs action to store in correctCode reducer
      - starts game once correctCode is set
  
  components (I like to call them views, because my goal for them is to only display data and nothing else)
    - win/lose notification
    - move history
    - userboard
    - options board
    - submit button
    - root component
      - composes all the other components together
      - has logic on what to display
  
  gameLogic
    - store check correct answer function

  containers (which I use to pass props to components)
    - win/lose notification
      - receives winner state
    - move history
      - receives move history state
    - userboard
      - receives userboard state
      - receives function to trigger userSelected action
    - options board
      - receives userSelected state
      - receives function to trigger userBoard action
    - submit button
      - receives userboard state
      - receives function to trigger: 
        - check correct answer function
        - update move history action
        - update userboard action
        - update userSelected action
    - root 
      - receives winner state

So now as I moved to adding extensions, I would only need to add to a specific reducer/action/component/container that was needed to accomplish the task , without having to worry about breaking another unrelated component.



## 4 Extensions

### 1. Allow user to create own secret code

The first extension I thought of was allowing a user to enter a secret code for another to guess. To implement this:
  1. Added an extra reducer/state that stores if vs computer (the original mode) or vs player(what I'm implementing)
  2. Added two new actions that would update the new reducer called computer with vs computer or vs player (receives boolean, true if vs computer, false if vs player)
  3. Create game status reducer
    - Will be true if game should be on
    - Will be false while player is deciding vsPlayer or vsComputer
  4. Created two new buttons, one to select vs computer and one to select vs player 
    - They are passed their corresponding action
    - vsComputer button will also deploy action starting game
  5. Shifted the middleware that obtain the secret code to run when vs computer is selected
    - This would be the same action that updated new reducer with vs computer
  6. Created two new components (and corresponding containers) that each composed userboard and submit button
    - One would run how it originally would (henceforth known as UserInput Component).
    - One would allow the player to create a code (henceforth known as PlayerCreateCode Component)
    - Both are more or less the same except what is passed to the submit button
      - Submit button original would perform orginal task of checking + updating userboard + userselected
      - New submit button would receive action that would store secret code using the current userboard inputs
        - Store secret code action would run as it originally did, except with a secret code from different source
        - Submit button will deploy action starting game
  7. Pass the new reducer/state to the root view component (henceforth known as Mastermind component)
    - Add logic in the root view component that would use new reducer to decide if it should show the PlayerCreateCode component or UserInput component

### 2. Countdown Timer

The second extension was a countdown timer. To implement this:
  1. Created a new component (CountdownTimer) that stores the countdown timer
    - Component has local state, that would represent the time remaining
    - Component would have an interval timer that deducted from the local state every second
    - Component would display local state is a time form
  2. Create new reducer (timeAllowed) that contain the time allowed
    - This would be combined with the computer reducer to from an advanced option reducer
  3. Created a container that passed the following to CountdownTimer:
    - State: timeAllowed
    - Functions: endGame
      - endGame would be a gameLost action because this function would run only when time has run out meaning the user has lost.
  4. Update root app to display CountdownTimer
    - Add logic for it to display CountdownTimer only when game status is still playing.

### 3. User selected difficulties

The third extenson was allowing user to select the secret code length, how many options the secret code is created out of, amount of turns they had and the amount of time they had. To implement this:
  1. Updated fetch call to Random Generator API to handle dynamic inputs
  2. Create new reducers, codeLength, codeOptions. 
    - Combined this into advanced options.
    - Moved turns reducer in advanced options, renamed turnsAllowed.
  3. Create new actions to would set codeLength, codeOptions, turnsAllowed, timeAllowed.
  4. Create new component (AdvancedOptions) that would be the user interface for selecting the advance options
    - Component would contain 8 html inputs, 2 inputs each to select reducers, codeLength, codeOptions and turnsAllowed
      - Two input types are a number input and range bar.
      - Number input would tie together with range bar input so user to see what they've selected
    - Component would contain 4 local states that represented the input values from the html inputs
  5. Update vsComputer and vsPlayer actions to accept new parameters 
  6. Update userBoard reducer to create dynamic userBoard size based on vsComputer and vsPlayer action
  7. Create a container that would pass the following to AdvancedOptions component
    - State: none
    - Functions:
      - vsComputer would run vsComputer action with input parameters
      - vsPlayer would run vsPlayer action with input parameters
  8. Create two new buttons
    - One button is quickplay, it would start the game with original difficulty parameters.
    - One button would allow toggle displaying advanced options component
  9. Wrap new buttons and new component in a GameSelect component
  10. Create a container for the GameSelect component that passed:
    - State: none
    - Functions: 
      - quickplay would run vsComputer action with preset difficulties.
  
### 4. End of Game Extensions

The fourth extensions I added revolved around actions that can be taken when the game is over. In this extension I added a way for users the view the secret code, add an extra turn if they lost, restart the game with same conditions or new conditions


#### 4.1 View Secret Code
  
To implement a view secret code at game over:
  1. Passed the correctCode state into the GameOver component
  2. Created a local state in GameOver component that determined if secret code should be shown
  3. Created a button that when clicked would toggle local state displaying secret code

#### 4.2 Add Extra Turn

To implement an extra turn button:
  1. Created a button component
  2. Create action that would increase turn
  3. Update advancedOptions reducer that would increase turns from new action
  4. Update gameStatus reducer to false from new action
  5. Update winner reducer to false from new action

#### 4.3 Play Again

To implement play again:
  1. Created a local state in GameOver component that accepted boolean to determine if player wanted to play again
  2. Created a button that would toggle play again state
  3. Add GameSelect component into GameOver component
  4. Add logic that would display GameSelect component depending on local state of play again
  5. Passed winner state data into GameSelect container that determined if the game had a winner or loser or null. 
    - Used logic to determine actions of buttons
  6. Passed new function into GameSelect container that would allow user to play again with same game conditions
    - This function would replace QuickPlay as Play Again, in situations where there was a winner or loser
    - Quickplay would remain the same as previous if no winner or loser
    - Advanced Options button renamed to Change Options, but action remains the same.

### 5 Hint Button

The fifth extension I added was a hint button. To implement hint button:
  1. Update userboard reducer with hint and hintCount (in case I wanted to limit the amount of hints)
    - I set the hint storage as a hash, in case of wanting to give a random index as a hint
    - Update board reset section of userboard reducer to not delete the hint hash
  2. Create a function that would compare current hints and correctCode and finds the first index that was not a key in hints. It returns the index along with the value at correctCode[index]. 
  3. Create a hint button
  4. Create an action that would update hint and hintCount value
  5. Attached above function and action to hint button. Result from function would be passed to action.
  6. Updated userboard component to handle hints
    - Buttons whose indexes that received hints would be displayed with a red border and users can not click on it.
  7. Updated userboard container to pass hint state


### 6 Separate Timed Mode and Classic Mode

The sixth extension I added was splitting timed mode from classic mode. To implement:

  1. Create new reducer/state (gameType) that determine which mode is being played
  2. Created two actions to set either Timed Mode or Classic Mode
  3. Create two buttons with above action
  4. Create IntroScreen Component, that stored the two buttons
  2. Create two new components, ClassicMode and TimedMode that were compositions of:
      Both receieve:
      - MoveHistory Component
      - UserBoard Component
      - SubmitButton Component
      - HintRequested Component
      ClassicMode:
      - Add Turn Component
  3. Create score reducer for timed mode
  4. Create actions to update score for timed mode
  5. Create score component to display score for timed mode
  6. Updated root component:
    - Addded IntroScreen compopnent
      - Add logic that would display this component 
    - Added ClassicMode and TimedMode components, removed old user board
    - Added logic to display ClassicMode or TimedMode depending on new reducer/state
    - To display CountdownTimer only when new reducer/state is timed mode
  7. Updated Submit Button Container:
    - Added logic to submit function to handle Classic Mode and Timed Mode
      - Classic mode would run as previously
      - Timed mode will: 
        - Check if answer is correct 
          - If correct:
            - Run a versusComputer action with current game difficulties as parameters 
              - This creates another secret code for the user to continue playing
            - Updates the score
        - Adds move to moveHistory 
  8. Timed mode game end logic is handled by CountdownTimer component


### 7 Add Versus Mode

The seventh extension I added is a versus mode. Versus mode would allow two users to play against each other on the same computer and have a score kept. In versus mode, users may play both classic mode and timed mode. Slight tweaks to classic mode, where scoring is based on how many turns it took for a user to guess the secret code instead of completing it in set amount of turns.

To implement:
  1. Add reducer/state (versusModeReducer) that stores an object, is null or is false.
    - If two player, an object is stored with 1 and 2 representing their scores and a playerNumberTurn that decided chose turn it was
    - If one player, false is stored, signifying no versus mode
    - Initially set as null, meaning no decision had been made on one or two player
  2. Create four actions:
    - One Player:
      - Sets versusModeReducer to false
    - Two Player:
      - Sets versusModeReducer to an object
    - Two Player Update Score
      - Updates the score of a player
    - Two Player Change Turn
      - Changes the turn of whose playing.
  3. Create VersusMode component that has two buttons to allow player(s) to choose one player or two player
    - Buttons deploy action one player or two player action from above.
  4. Create turn change component
    - Contains one button
      - On click button deploys action to set turnChange to false
    - Allows players to decide when they want to start their turn (necessary for timed mode)
  4. Create a turn change reducer that stores a boolean. 
     - Turn change reducer will tell the app if it needs to show a turn change component
  5. Create two actions
     - One sets turnChangeReducer to true
     - One sets turnChangeReducer to false
  6. Update Submit Button Container's submit function:
     - Separate logic to handle one player timed mode, one player classic mode, two player timed mode, two player classic mode.
     - One player submits remained the same
     - Two player submits added following:
      - Add state to know if it's player one's turn or player two's
        - If player one:
          - In classic mode:
            - Checks answer
              - If correct:
                - Deploys action updating player one score
                - Deploys action change turn action
                - Deploys action generate new code
                - Deploys action setting turnChange to true
            - Deploys action adding move to moveHistory
          - In timed mode:
            - Checks answer
              - If correct:
                - Deploys action generating new code
                - Deploys action updating player one score
            - Deploys action adding move to moveHistory
        - If player two:
          - In classic mode:
            - Checks answer
              - If correct: 
                - Deploys action updating player two score
                - Deploys action edning game
          - In timed mode:
            - Similar to timed mode, updates player two score each time correct
  7. Update ScoreView to display players score in timed mode
  8. Update TitleView to display game mode, player turn
  9. Update TurnsRemaining to display amount of turns player is taking
  10. Update AddExtraTurnButton to not display during two player mode
  11. Update Timed Mode and Classic Mode components to display Turn Change Component when turn change state is true
  12. Update Root Component to show VersusMode if versusMode reducer is null
  13. Update moveHistory reducer to reset moveHistory from a twoPlayerChangeTurn action (resets the move history for player two)
  14. Update AdvanceOptions Component to not allow users to set their own code in two player mode
  15. Update GameOverView to display winner and tie game situations.
  16. Update CountdownTimer:
    - Add logic to handle countdown completition
      - If the current player is player 1:
        - Deploys action to change turn
      - If player two or one player mode
        - Deploys end game
    - Add logic to reset timer
      - Passed turnChangeReducer state, if true will reset timer
      - Also returns null (as to not display) when turnChangeReducer is true
    




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
