
import './App.css';
import { Provider } from 'react-redux';
import store from './createStore'
import { MastermindContainer } from './containers/MastermindContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
        <h1>Mastermind</h1>
        <MastermindContainer/>
      </div>
    </Provider>
  );
}

export default App;
