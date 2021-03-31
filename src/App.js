import logo from './logo.svg';
import './App.css';
import data from './api res/Arbitrations.js'

var info=data;

function App() {

// setInterval(x=>console.log(info), 10000)s






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
      </header>
    </div>
  );
}

export default App;
