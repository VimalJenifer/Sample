import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';


class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			vimal: 'hello'
		}
	}
  render() {
    return (
      <div className="App">
        Hi! {this.state.vimal}              
      </div>
    );
  }
}

export default App;
