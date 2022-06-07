import React, { Component } from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import MyDialog from './MyDialog.js'
import MyRegister from './MyRegister.js'
import book from './book.jpeg'



export default class Login extends Component {
  render() {
  return (
    <div>
      <h1 className="home">Welcome to bookshelf</h1>
      <img src={book} alt="book image" height={500} width={450} />
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
