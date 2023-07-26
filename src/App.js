import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Mundo",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Olá {this.state.name}
          </p>

          <button>
            Clique aqui
          </button>

        </header>
      </div>
    );
  }
}

export default App;
