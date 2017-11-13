/* @flow */
import React, { PropTypes } from 'react';
import './styles/list.scss';
type Props = {
  name: string,
  image: string
};

class Item extends React.Component<void, Props, void> {
  static propTypes = {

  };

  render () {
    return (
      <div className='list_item_container'>
        {this.props.children}
      </div>
    );
  }
}

export default Item;
