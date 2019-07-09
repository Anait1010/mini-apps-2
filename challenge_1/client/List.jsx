import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lists = this.props.lists.map((list) => {
      return (
        <ul>
          <li> {list.date}</li>
          <li>{list.category1}</li>
          <li>{list.category2}</li>
          <li>{list.description}</li>
          <li>{list.granularity}</li>
          <li>{list.lang}</li>
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