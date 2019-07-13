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
      lists: [],
      events: 0
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
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

  handleCLick(page) {
    const pageNum = page.selected;
    axios.get(`/events?q=${this.state.term}&_page=${pageNumber}&_limit=10`)
      .then((response) => {
        this.setState({ lists: response.data }, () => {
          console.log('RESP', response)
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
        <ReactPaginate
          onPageChange={this.handleClick}
          pageCount={Math.ceil(this.state.events / 10)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={5}

        />
      </div>
    )
  }
}



export default Search;