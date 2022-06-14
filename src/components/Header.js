import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <h3>
          <Link className="link__class" to="/">
            60 minute App
          </Link>
        </h3>
        <ul>
          <li>
            <Link className="link__class" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
