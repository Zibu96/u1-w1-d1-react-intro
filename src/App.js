import logo from "./logo.svg";
import "./App.css";
import ButtonComponents from "./ButtonComponent";
import ImageComponents from "./ImageComponent";
import NavComponents from "./NavComponents";

function App() {
  return (
    <div className="App">
      <NavComponents
        className="list"
        text="LANCIA IL RAZZOOOOOO"
        className2="allTheA"
        className3="liBtn"
        className4="nav"
        className5="btn"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ImageComponents
          url="https://wallpaperaccess.com/full/312361.jpg"
          alt="vaultBoy"
          className="vault-img"
        />
        <ButtonComponents
          clickMe="Cliccami!"
          style={{
            backgroundColor: "rgb(65, 5, 5)",
            color: "white",
            marginTop: "2rem",
          }}
        />
      </header>
    </div>
  );
}

export default App;
