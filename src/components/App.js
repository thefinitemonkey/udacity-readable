import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Api from '../util/Api.js';

class App extends Component {
  componentDidMount = () => {
    //Api.getCategories().then(res => console.log(res));
    //Api.getCategoryPosts("react").then(res => console.log(res));
    //Api.addPost({author: "Doug", title: "First test post", body: "This is my first test post", category: "react"}).then(res => console.log(res));
    //Api.getAllPosts().then(res => console.log(res));
    //Api.getPost("df821c70-1bca-11e8-92e2-5d1f1775b5c8").then(res => console.log(res));
    //Api.votePost({id:"eab20fe0-1bc7-11e8-ab18-5be36faecc4d", option:"upVote"}).then(res => console.log(res));
    //Api.editPost({id:"eab20fe0-1bc7-11e8-ab18-5be36faecc4d", title:"First edited test post", body:"First time editing post"}).then(res => console.log(res));
    //Api.deletePost("854d7d10-1bc7-11e8-9a65-c361dc9307eb").then(res => console.log(res));
    //Api.addPostComment({parentId:"df821c70-1bca-11e8-92e2-5d1f1775b5c8", author:"Doug Brown", title:"First comment", body:"First test comment"}).then(res => console.log(res));
    //Api.getPostComments("854d7d10-1bc7-11e8-9a65-c361dc9307eb").then(res => console.log(res));
    //Api.getComment("5aee23a0-1bca-11e8-b717-6fd716d8a516").then(res => console.log(res));
    //Api.voteComment({id:"7e77d880-1bc9-11e8-883e-3da709ce4c15", option:"upVote"}).then(res => console.log(res));
    //Api.editComment({id:"7e77d880-1bc9-11e8-883e-3da709ce4c15", title:"First edited comment", body:"First try editing a comment"}).then(res => console.log(res));
    //Api.deleteComment("7e77d880-1bc9-11e8-883e-3da709ce4c15").then(res => console.log(res));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
