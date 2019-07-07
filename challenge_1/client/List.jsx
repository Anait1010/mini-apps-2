import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const lists = this.props.lists.map((list) => {
      // console.log('List arr', list)
      return
      <ul>
        <li>Date: {list.date}</li>
        <li>Category 1:{list.category1}</li>
        <li>Category 2:{list.category2}</li>
        <li>Descriptions: {list.description}</li>
        <li>Granularity: {list.granularity}</li>
        <li>Lang: {list.lang}</li>
      </ul>
    })
    return (
      <div>
        {lists}
      </div>
    )
  }
}


export default List;