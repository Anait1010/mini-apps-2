import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import List from './List.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props)

    //initiate state
    this.state = {
      term: '',
      lists: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    //implement GET request to get data from the database/json-server
    axios.get(`/events?q=${this.state.term}`)
      .then((response) => {
        this.setState({ lists: response.data }, () => {
        })

      })
      .catch((error) => {
        console.log('Error', error)
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearch}>
          </input>
          <input type="submit" value="submit"></input>
        </form>
        <div>
          <List lists={this.state.lists} />
        </div>
      </div>
    )
  }
}



export default Search;