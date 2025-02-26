import "./App.css";
import StyledButton from "./components/StyledButton/StyledButton";

function App() {
  return (
    <div className="root">
      <h1>REMOTE</h1>
      <div className="card">
        <p className="read-the-docs">This component is being exported to the host app<br/>change the button and see the changes in the host app live!</p>
        <StyledButton />
      </div>
    </div>
  );
}

export default App;
