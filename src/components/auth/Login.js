import React, { Component } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import MyDialog from './MyDialog.js'
import MyRegister from './MyRegister.js'


function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return(
    <form onSubmit={handleSubmit}>
    <div>
      <label>Username</label>
      <input id="username" type="text"/>
    </div>
      <label>Password</label>
      <input id="password" type="password"/>
    <div>
      <button type="submit">{buttonText}></button>
    </div>
  </form>
  )
}

export default class Login extends Component {
  render() {
  return (
    <div>
      <h1 className="home">Welcome to bookshelf</h1>
      <div>
        <MyDialog />
      </div>
      <div>
        <MyRegister />
      </div>
    </div>
  );
  }
}
