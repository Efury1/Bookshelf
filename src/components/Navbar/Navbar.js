import React, {Component} from 'react';


class Navbar extends Components {
  render() {
    <nav className="NavbarItems">
      <h1  className="navbar-logo">Bookshelf<i className="fab fa-react"></i></h1>
      <h1 classname="menu-icon"></h1>
      <div> classname="menu-icon"></div>
      <ul>
        {MenuItems.map{(item, index) => {
          return (
              <li key={item, index}>
              <a classname={item.cName} href={item.url}>
                {item.tile}
              </a>
              </li>
          )
        }}}

      </ul>
    </nav>

  }
}

export default Navbar;
