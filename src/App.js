import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Ivan</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button>Change text</button>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      mystring: "hello",
      searchField: "",
      hour: new Date()
    };
    this.presion = this.presion.bind(this);
  }

  changeEachSec() {
    // this.setState({
    //   // hour: new Date(),
    //   // mystring: "hello2"
    // });
    //console.log(this.state.hour);
  }

  componentDidMount() {
    //this.id = setInterval(() => this.changeEachSec(), 1000);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  componentWillUnmount() {
    //clearInterval(this.id);
  }

  render() {
    // Declaring local vars to be used in this render, got from the state
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state; // Destructuring arrays makes shorter code:

    // Declaring local function to filter the monsters
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // fat arrow above is shorter code:
    // const filteredMonsters = monsters.filter(monster => { // fat arrow with return curlybarackets
    //   return monster.name.toLowerCase().includes(searchField.toLowerCase());
    // });

    return (
      <div className="App">
        <div>
          <form onSubmit={this.presion}>
            <p>
              Type first val:
              <input type="number" name="valor1" />
            </p>
            <p>
              Type second value:
              <input type="number" name="valor2" />
            </p>
            <p>
              <input type="submit" value="Sumar" />
            </p>
          </form>
        </div>

        <h1>Monster Rodolex</h1>
        <div>{this.state.hour.toLocaleTimeString()}</div>
        {/* 
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => {
            this.setState({ searchField: e.target.value }); // changes the every keysroke
          }}
        />
      */}

        {/* 
        Now is restructuring this above input to a separate component
        To have a reusable component for other propouses

        handleChange={e => this.setState({ searchField: e.target.value })}
        // or
        handleChange={ function (e) {
           return this.setState({ searchField: e.target.value })
          }
        }

      */}

        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  } // end of render

  // arrow function is not necessary to bind it the contructor like:
  // this.handleChange = this.handleChange.bind(this);
  handleChange = e => {
    // console.log(this); this contains the App component
    this.setState({ searchField: e.target.value });
  };

  presion(e) {
    e.preventDefault();
    const v1 = parseInt(e.target.valor1.value, 10);
    const v2 = parseInt(e.target.valor2.value, 10);
    const suma = v1 + v2;
    alert("The sum is:" + suma);
  }
}

export default App;
