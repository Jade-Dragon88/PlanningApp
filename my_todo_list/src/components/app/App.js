//@ts-check

import React, { Component } from 'react'
import AddCategories from '../AddCategories/AddCategories'
import { Header as AppHeader } from '../Header/Header'
import MainBody from '../MainBody/MainBody'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        // 'Финансы',
        // 'Личное'
      ]
    }
    this.setCat = this.setCat.bind(this);
  }
  setCat(){
    // this.setState(item => console.log(item))
    const newCats = arguments[0];
    // console.log(newCats);
    this.state.categories.push(newCats);
    this.setState(
      ({categories})=> {
          const newArr = [...newCats];
          return {
              categories: newArr
          };
      }   
    );
    console.log(this.state['categories']);
  }
  render() {
    // const { categories } = this.state;
    return (
      <div className="Main">
        <AddCategories setCat={this.setCat}
                       cats={this.state.categories}
        />
        <AppHeader name="МОИ ПЛАНЫ"
                margin='my-5'
        />
        {<MainBody cats={this.state['categories']}/> /* {cat: true, label: 'ewrtgb', id: '0ineyq0'} */}
      </div>
    )
  }
}

export default App;
