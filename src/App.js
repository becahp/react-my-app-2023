import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
        },
        {
          name: 'Dracula',
        },
        {
          name: 'Zombie',
        },
        {
          name: 'Wolfman',
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">

        {this.state.monsters.map(monster => { return <h1>{monster.name}</h1> })}

      </div>
    );
  }
}

export default App;
