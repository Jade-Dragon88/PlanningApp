// import logo from './logo.svg';
import './App.css';

// import React from 'react';
import React, { Component } from 'react'
import AddCategories from '../AddCategories/AddCategories'
import { Header as AppHeader } from '../Header/Header'
import MainBody from '../MainBody/MainBody'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        'Финансы',
        'Личное'
      ]
    }
    this.addCat = this.addCat.bind(this);
  }
  addCat(){
    // this.setState(item => console.log(item))
    const newCat = arguments[1];
    // console.log(newCat);
    this.state.categories.push(newCat);
    console.log(this.state.categories);
  }
  render() {
    // const { categories } = this.state;
    return (
      <div className="Main">
        <AddCategories addCat={this.addCat}
                           cats={this.state.categories}
        />
        <AppHeader name="МОИ ПЛАНЫ"
                margin='my-5'
        />
        <MainBody cats={this.state.categories}/>
      </div>
    )
  }
}

export default App;
