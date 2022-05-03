//Theme data
//User data
//Location


//1. Create ea Context
//2. Take your provider and wap around component Tree
//3. Pass data
//4. Read the data you have passed

import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./Context/ThemeContext"
import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

//Class Component
class ThemeContextProvider extends Components {
  state = {
    isDarkMode : true,
    dark: {
      bg: "#222222",
      color: "rgba(239 , 83 , 80, 1)",
      hover: "rgba(239, 83, 80, 0.8)",
    },
    light:{
      bg:"#ecf0f1",
      color: "#222222",
      hover:"rbga(255, 193, 0, 0.8)",
    },
  };

  //Method for Theme
  changeTheme = () => {
    this.setState({
      isDarkMode:!this.state.isDarkMode,
    });
  };
  render() {
    return <div>
      <ThemeContext.Provider value>{{...this.state, changeTheme: this.changeTheme}}>{this.props.children}</ThemeContext.Provider> //Passing data
    </div>;
  }
}

export default ThemeContextProvider
