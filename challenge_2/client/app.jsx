import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
      dates: []
    }
  }
  // date ?start=2019-06-01&end=2019-06-30
  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((response) => {
        // return response;
        console.log('RESPONSE', response.data);
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  render() {
    return (
      <h3>Cryptocurrency Chartig Tool</h3>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('cct'));





