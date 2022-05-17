import React, { Component } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import {Logo} from '../Logo'

export default class Login extends Component {
  render() {
  return (
    <div>
      <h1 className="home">Welcome to bookie</h1>
      <Logo width="100" height="100"/>
      <div>
        <button onClick={() => alert('login clicked')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('login clicked')}> Register</button>
      </div>
    </div>
  );
  }
}
