/* @flow */
import React, { PropTypes } from 'react';
import './styles/list.scss';
import arrow from '../../static/Images/idg_application_list_arrow.png';
// my_profile_library_card_arrow
type Props = {
  name: string,
  image: string
};

class Item extends React.Component<void, Props, void> {
  static propTypes = {

  };

  delete(e){
    this.props.delete();
    e.preventDefault();
  }
  
  render () {
    let link = this.props.manage ? '' : (this.props.link? <div className="link"><img src={arrow} alt=""/></div> : '');
    return (
      <div className='list_item_container' onClick={this.props.manage ? this.delete.bind(this) : this.props.onClick}>
        {this.props.manage?(<div className='delete-btn'>一</div>):''} 
        <div className="list_item_info">
          {this.props.children}
        </div>
        {link}
      </div>
    );
  }
}

export default Item;
