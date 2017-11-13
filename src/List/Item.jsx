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
        <div className="list_item_info">
          {this.props.children}
        </div>
        {this.props.link? <div className="link">></div> : ''}
      </div>
    );
  }
}

export default Item;
