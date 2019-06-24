import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas : [
      {name:'Hanamant', age:'28', belt:'red', id:'1'},
      {name:'Shristi', age:'5', belt:'black', id:'2'},
      {name:'Sannidhi', age:'3', belt:'red', id:'3'},
      {name:'Sabu', age:'25', belt:'green', id:'4'}
    ]
  }

  addNinja = (ninja) => {
  //  console.log(ninja)
  ninja.id = Math.random();
  let ninjas = [...this.state.ninjas, ninja]
  this.setState({
    ninjas: ninjas
  })
  }

  deleteNinja = (id) => {
   console.log(id)

let ninjas = this.state.ninjas.filter(ninja => {
  return ninja.id !== id
});

this.setState({
  ninjas: ninjas
})
  }

  componentDidMount () {
    console.log('Component Mounted')
  }

  componentDidUpdate (previousProps, previousState) {
   console.log('Component Updated')
   console.log(previousProps, previousState)
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1> My first REacr</h1>
      <p> Hi REACT</p>

      <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
      {/* <Ninjas name='Shristi' age='5' belt='green'/>
      <Ninjas name='Sannidhi' age='3' belt='red'/> */}
    </div>
  );
}}

export default App;
