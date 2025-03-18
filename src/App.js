import logo from './logo.svg';
import './App.css';
import {Checkbox, Button} from '@igds/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Checkbox label="תווית"></Checkbox>
        <Button>Press me</Button>
      </header>
{/* here i get the 194 errors, if i comment the usage of Checkbox, the errors are gone*/}
      {/* <checkbox></checkbox> */}
    </div>
  );
}

export default App;
