import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lists = this.props.lists.map((list) => {
      return (
        <ul>
          <li>Date: {list.date}</li>
          <li>Category One:{list.category1}</li>
          <li>Category Two:{list.category2}</li>
          <li>Description: {list.description}</li>
          <li>Granularity: {list.granularity}</li>
          <li>Language: {list.lang}</li>
        </ul>
      )
    })
    return (
      <div>
        <h3>LIST OF HISTORICAL EVENTS</h3>
        {lists}
      </div>
    )
  }
}


export default List;