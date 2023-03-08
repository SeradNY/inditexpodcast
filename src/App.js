import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Link } from "react-router-dom";

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
        <Counter></Counter>
        <li>
          <ul>A</ul>
          <ul><Link to={"/home"}>Home</Link></ul>
          <ul><Link to={"/"}>/</Link></ul>
        </li>
      </header>
    </div>
  );
}

export default App;
