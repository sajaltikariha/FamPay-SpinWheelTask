import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles.css';
import Wheel from "./components/spinwheel/spinwheel.js";

export class App extends React.Component {
  constructor() {
    super();
    this.items = ['$50', '$20', '$100 Cashback', '2X savings', 'Better luck next time!', '$50', '2X savings', '1.5X Savings'];
  }

  render() {
    return (
      <div className="Spin">
        <Wheel items={this.items} />
        <h1 className="text1">Spin the wheel now to get reward</h1>
        <h1 className="text2">Tap on spin or rotate the wheel anticlockwise and release to start spinning </h1>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

serviceWorker.register();