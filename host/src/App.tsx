import "./App.css";
import StyledButton from "remoteApp/StyledButton"

function App() {
  return (
    <>
      <h1>HOST</h1>
      <div className="card">
        <p className="read-the-docs">
          The button component is being import from the remote app on runtime!
        </p>
        <StyledButton />
      </div>
    </>
  );
}

export default App;
