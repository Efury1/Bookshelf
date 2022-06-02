import React, { Component } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import {Logo} from '../Logo'
import MyDialog from './MyDialog.js'
import MyRegister from './MyRegister.js'

export default class Login extends Component {
  render() {
  return (
    <div>
      <h1 className="home">Welcome to bookshelf</h1>
      <Logo width="100" height="100"/>
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
