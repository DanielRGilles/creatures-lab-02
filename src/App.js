import React, { Component } from 'react'
import creatures from './data.js'
import './App.css';
import Header from './components/Header.js';

export default class App extends Component {
  state = {
    keyword: '',
    horns: ''
  }
  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
}
  handleHornChange = (e) => {
  this.setState({ horns: e.target.value })
}
  render() {
    const selectedCreatures = creatures
    .filter(creature => {
      if (!this.state.keyword){
    return true }
     return (creature.keyword === this.state.keyword) });
     
     const moreFiltered =
     selectedCreatures
     .filter(creature => {
      if (!this.state.horns){
    return true }
     return (Number(creature.horns) === this.state.horns) })
     
    return (
      <div>
        <Header/>
        <div className='creature-select'>
        
        <label>Choose a Horned Creature  </label>
       <select onChange={this.handleChange}> 
        <option value=''></option>
        <option value='narwhal'>Narwhal</option>
        <option value='rhino'>Rhino</option>
        <option value='unicorn'>Unicorn</option>
        <option value='unilego'>Unilego</option>
        <option value='triceratops'>Triceratops</option>
        <option value='markhor'>Markhor</option>
        <option value='mouflon'>Mouflan</option>
        <option value='addax'>Addax</option>
        <option value='chameleon'>Chameleon</option>
        <option value='lizard'>Lizard</option>
        <option value='dragon'>Dragon</option>
        </select>
        <label>  Number of horns  </label>
        <select onChange={this.handleHornChange}> 
        <option value=''>All</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        </select>
        </div>
        <ul className='list'>
           {moreFiltered.map(creature => {
            return (
          <li className='creature' key={creature.url}>
              <div className='creature-neem'>{creature.title}</div>  <br></br> 
              <img src={creature.url} alt='horned creature'/><br></br>
              <div className='creature-deets'>{creature.description}</div>
          </li>

             )})}
        </ul>
      </div>
    )
  }
}
