# Mastermind

# Installation

# Thought Process
Start with the essentials:
  - We need a secret code
  - We need a way for user to enter secret code
  - We need a way to check if user inputted code is correct 
    - We will need to provide feedback if it isn't correct

The first thing that came to mind was how should we store the secret code and user inputted code, and how that would influence how our check function would need to operate.

If we stored both the secret code and the inputted code as strings, we could have a fast checking by seeing if they are equal to each other. But if it's incorrect, providing feedback would be more difficult. I would need to run a loop to check if the user input was the same as the code for every loop to check how many were correct code and at the correct spot. But I ran into some issues with how I would provide feedback for correct code but wrong position. 

So I considered storing the codes in an array. Arrays would be a little more time consuming for checking if the inputted code was completely correct, but we would make it easier to provide feedback if it's incorrect. We run a for loop, compare indices and remove from the array if they're both equal. If the array is empty at the end, then it would be the correct answer and if not, we could go through what's left of the user input code and search for indexes of where it existed in the correct code and remove from the code as we progressed through. But this could get time consuming in situations such as: 
      let correctCode = [0,0,0,0,0,0,0,0,0,0,0,0]
      let userGuess =   [1,1,1,1,1,1,1,1,1,1,1,1]
which would run at O(n**2).

I decided to add a hash that stored the number of times a number appears in the correctCode. This would allow us to check for correct numbers but incorrect order easier. So now in the instance of:
    let correctCode = [0,0,0,0,0,0,0,0,0,0,0,0]
    let countCodeHash = {0: 12}
    let userGuess =   [1,1,1,1,1,1,1,1,1,1,1,1]
it would take O(2n), one loop to check if it's correct at each location and 1 loop to check if it's correct but in the wrong location.

I realized I could avoid the second loop by counting the code if it's in countCodeHash and if countCodeHash[num] was greater than 0. I could add it to correctCodeCorrectLocation if it's also in the correct location else add it into correctCodeWrongLocation. After countCodeHash[num] was less than 0, if I came across an index that was correctCodeCorrectLocation, I would move from it from correctCodeWrongLocation and shift it over to correctCodeCorrectLocation. 

We could check if a player won by checking if correctCodeCorrectLocation was equal to correctCode.length else we could just provide the feedback.

After the core logic, I moved to how to generate the secret code. I used a Javascript fetch call to request the data. Once the data was received, I had some hiccups with processing the data. This was the first time I used an API that did return it in a json format, and I wasn't sure which of Javascripts Response methods to use. I'm still not completely sure this is the best or even correct way, but I settled on using Response.text() and removing the line breaks from the result. 

I put the fetch call in a function I called getRandomNumber(size, range), the allowed inputs in case I wanted to add user selected difficulties as an app extension.

Changed IntroView -> Select Game Mode for reusability

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
