import logo from "./logo.svg";
import "./App.css";
import Fetcher from "./quoteFetch/quoteFetch.js";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Fetcher />
      </header>
    </div>
  );
}

export default App;
