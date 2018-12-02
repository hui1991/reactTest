import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from"./LikeButton.js"
import User from "./User"
import CommentApp from "./CommentApp"
import Card from "./Card"



const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' },
];

class App extends Component {
  render() {
    return (

      <div>

          {/*{users.map((user,index)=> <User key = {index} user = {user}/>)}*/}
          <CommentApp/>
          {/*<Card>*/}
              {/*<h2>*/}
                  {/*自古逢秋悲寂寥*/}
              {/*</h2>*/}
              {/*<h2>*/}
                  {/*我言秋日胜春朝*/}
              {/*</h2>*/}
              {/*<h2>*/}
                  {/*晴空一鹤排云上*/}
              {/*</h2>*/}
              {/*<h2>*/}
                  {/*便引诗情到碧霄*/}
              {/*</h2>*/}
          {/*</Card>*/}

      </div>
    );
  }
}

export default App;
