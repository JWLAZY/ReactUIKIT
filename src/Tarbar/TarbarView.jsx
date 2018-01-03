/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import defaultDelete from './images/delete.png';
import defaultEdit from './images/edit.png';
import defaultPraise from './images/praise.png';
import '../../styles/tarbar.scss';

export class TarbarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  noaction() {
    alert('请传入click参数');
  }

  clickAction(item, index) {
    let a = document.getElementsByClassName('tarbar_item')[index].firstChild;
    let action = this.props.actions[item].click ? this.props.actions[item].click : this.noaction;
    action(() => {
      a.setAttribute('class', 'imgStyle');
      setTimeout(function() {
        a.setAttribute('class', null);
      }, 1000);
    });
  }

  render() {
    let items = Object.keys(this.props.actions).map((item, index)=> {

      let path = './images/' + this.props.actions[item].icon + '.png';
      return <div className="tarbar_item" key={item} onClick={this.clickAction.bind(this, item, index)}>
        <img src={require(path)} alt="" />
        <span>
          {this.props.actions[item].text}
        </span>
      </div>;
    });

    return (
      <div className="tarbar_container">
        {items}
      </div>
        );
  }
}

TarbarView.propTypes = {
  actions: PropTypes.object
};

export default TarbarView;
