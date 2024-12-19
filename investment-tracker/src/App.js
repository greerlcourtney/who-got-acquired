import logo from './logo.svg';
import './App.css';
import LatestInvestment from './LatestInvestment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Investment Tracker</h1>
        <p>
         The most recent funding round closed is...
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <LatestInvestment />
        </header>
    </div>
  );
}

export default App;
