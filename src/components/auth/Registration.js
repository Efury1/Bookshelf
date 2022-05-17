import React, { Component } from 'react';
import {Logo} from '../Logo.js'
import "../index.css"
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handle change", event);
  }

  handleSubmit(event) {
    console.log("form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 className="home">Registration</h1>
        <Logo width="100" height="80"/>
        <form onSubmit={this.handleSubmit}></form>
        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
      </div>
    );
  }
}
