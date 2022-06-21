import React, { Component } from 'react'
import MyDialog from './MyDialog.js'
import MyRegister from './MyRegister.js'
import book from './book.jpeg'
//import {UnauthenticatedApp} from '../authentication/authentication.js'



export default class Login extends Component {
  render() {
  return (
    <div>
      <h1 className="home">Welcome to bookshelf</h1>
      <img src={book} alt="Stacked of books" height={500} width={450} />
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
