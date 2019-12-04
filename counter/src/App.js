import React, {Component} from 'react';
import './App.sass';

class App extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      }
      this.onStateMinus = this.onStateMinus.bind(this)
    }

    onStatePlus() {
      this.setState(({count}) => {
        return {
          count : count + 1
        }
      })
    }

    onStateMinus() {
      this.setState(({count}) => {
        return {
          count : count - 1
        }
      })
    }
 
  render() {    
    const {count} = this.state;

    return (
        <div className="App">
          <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Counter</h3>
          <div>{count}</div>
          <button 
                  onClick={() => this.onStatePlus()} 
                  className= "uk-button uk-button-primary uk-margin-small-top">+</button>
          <button onClick={this.onStateMinus} className="uk-button uk-button-secondary uk-margin-small-top">-</button>
          </div>
        </div>
      );

  }
}

export default App;
