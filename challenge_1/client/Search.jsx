import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    //initiate state
    this.state = {
      term: '',
      result: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({
      term: event.target.value
    })
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    //implement GET request to get data from the database/json-server

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearch}>
          </input>
        </form>
      </div>
    )
  }
}



export default Search;