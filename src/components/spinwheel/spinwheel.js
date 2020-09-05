import React from 'react';

import './spinwheel.css';
import config from "../../cofig";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
    this.submitToGoogleSheet = this.submitToGoogleSheet.bind(this);
  }

  componentDidMount() {
    this.handleClientLoad();
  }

  handleClientLoad = () => {
    window.gapi.load('client:auth2', this.initClient);
  }

  initClient = () => {
    window.gapi.client.init({
      'apiKey': config.apiKey,
      'clientId': config.clientId,
      'discoveryDocs': config.discoveryDocs,
      'scope': config.scope,
    }).then(() => {
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
      this.updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    })
  }

  updateSignInStatus = () => {
    console.log("successfully signed in");
  }

  // submit event response to google spreadsheet
  submitToGoogleSheet(value) {
    if (this.state.selectedItem !== null) {
      const params = {
        spreadsheetId: config.spreadsheetId,
        range: 'Sheet1',
        valueInputOption: 'RAW',
        insertDataoption: 'INSERT_ROWS',
      }

      const values = {
        'majorDimension': 'ROWS',
        'spin_result_index': [value],
      }

      let request = window.gapi.client.sheets.spreadsheets.values.append(params, values);
      request.then(function (response) {
        console.log(response.result);
      }, function (reason) {
        console.error("error:" + reason.result.error.message);
      });
    }
  }

  // on click event handler 
  async selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      await this.setState({ selectedItem });
      this.submitToGoogleSheet();
    } else {
      await this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length, // number of items
      '--selected-item': selectedItem, // index of the selected item
    };
    const spinning = ((selectedItem !== null) ? 'spinning' : '');

    return (
      <div className="wheel-container">
        <div className="spinner" onClick={this.selectItem}> Spin </div>
        <div className={`wheel ${spinning}`} style={wheelVars}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              <div className="wheel-arc"></div>
              <p> {item} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
