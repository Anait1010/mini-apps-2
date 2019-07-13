import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from 'chart.js';

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
        const value = [];
        const newDate = [];

        for (var key in response.data.bpi) {
          // console.log('bpi', response.data.bpi)
          newDate.push(key);
          value.push(response.data.bpi[key]);

        }
        this.setState({
          currency: value,
          dates: newDate

        })
        console.log('Currency', value, 'DATE', newDate)
      })

      .catch((error) => {
        console.log('Error', error)
      })
  }

  render() {
    return (
      <div>
        <canvas id="myChart" width="400" height="400"></canvas>
        <h3>Cryptocurrency Chartig Tool</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('cct'));





