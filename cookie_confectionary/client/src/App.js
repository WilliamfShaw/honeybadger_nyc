import React, { Component } from 'react';
import Cookies from 'cookies-js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieCount: this.getCookieCount()
    }

    this.addCookie = this.addCookie.bind(this);
    this.clearCookie = this.clearCookie.bind(this);
  }

  getCookieCount() {
    return Cookies.get('counter') || 0;
  }

  setCookieState() {
    this.setState({
      cookieCount: this.getCookieCount()
    });
  }

  addCookie() {
    Cookies.set('counter', parseInt(this.state.cookieCount, 10) + 1);
    this.setCookieState();
  }

  clearCookie() {
    Cookies.expire('counter')
    this.setCookieState();
  }

  render() {
    return (
      <div className="App">
        <h1>Current Cookie Count: {this.state.cookieCount}</h1>
        <button onClick={this.addCookie}>ADD COOKIE</button>
        <button onClick={this.clearCookie}>CLEAR COOKIE</button>
      </div>
    );
  }
}

export default App;
