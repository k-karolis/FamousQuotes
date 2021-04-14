import "./App.css";
import Fetcher from "./quoteFetch/quoteFetch.js";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Fetcher />
      </header>
    </div>
  );
}

export default App;
