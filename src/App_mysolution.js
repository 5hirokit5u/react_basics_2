import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: []
    };
    console.log("constructor")
  };

  componentDidMount() {
    console.log("componentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users)=> this.setState(
        () => {
        return {monsters: users, filteredMonsters: users}
        },
        () => {
          console.log(this.state)
        }
    ))
  }

  render() {
    console.log("render")
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event)=>{this.setState(()=>
            {
              return {filteredMonsters : this.state.monsters.filter((monster) => 
                monster.name.toLowerCase().includes(event.target.value.toLowerCase()) )}
            },
            ()=>{
              console.log(this.state.filteredMonsters)
            })
          }}
        />
        {
          this.state.filteredMonsters.map((monster, id)=>
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        }
      </div>

    );
  }
  
}

export default App;
