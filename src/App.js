import "./App.css";
import Builder from "./components/Builder/Builder";

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <Builder />
      </div>
      <div className="Current"></div>
    </div>
  );
}

export default App;
