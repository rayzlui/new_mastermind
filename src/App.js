import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './createStore'
import { MastermindContainer } from './containers/MastermindContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <MastermindContainer/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
