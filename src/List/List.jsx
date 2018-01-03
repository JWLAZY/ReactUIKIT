/* @flow */
import React, { PropTypes } from 'react';
import '../../styles/list.scss';

class List extends React.Component {

  render() {
    return (
      <div className='list_container'>
          {this.props.children}
      </div>
    );
  }
}

export default List;
