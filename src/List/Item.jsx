import React, { PropTypes,PureComponent } from 'react';
import '../../styles/list.scss';

class Item extends PureComponent {

  delete(e){
    this.props.delete();
    e.preventDefault();
  }
  
  render() {
    return (
        <div className='list_item_container' onClick={this.props.manage ? this.delete.bind(this) : this.props.onClick}>
          {this.props.manage? (<div className='delete-btn'>一</div>) : ''} 
          <div className="list_item_info">
            {this.props.children}
          </div>
        </div>
    )
  }
}

export default Item;
