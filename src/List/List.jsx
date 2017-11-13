/* @flow */
import React, { PropTypes } from 'react';
import './styles/list.scss';
type Props = {
  name: string,
  image: string
};

class List extends React.Component<void, Props, void> {
  static propTypes = {

  };

  render () {
    return (
      <div className='list_container'>
          {this.props.children}
      </div>
    );
  }
}

export default List;
