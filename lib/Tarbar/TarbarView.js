'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TarbarView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _delete = require('./images/delete.png');

var _delete2 = _interopRequireDefault(_delete);

var _edit = require('./images/edit.png');

var _edit2 = _interopRequireDefault(_edit);

var _praise = require('./images/praise.png');

var _praise2 = _interopRequireDefault(_praise);

require('../../styles/tarbar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TarbarView = exports.TarbarView = function (_React$Component) {
  _inherits(TarbarView, _React$Component);

  function TarbarView(props) {
    _classCallCheck(this, TarbarView);

    var _this = _possibleConstructorReturn(this, (TarbarView.__proto__ || Object.getPrototypeOf(TarbarView)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(TarbarView, [{
    key: 'noaction',
    value: function noaction() {
      alert('请传入click参数');
    }
  }, {
    key: 'clickAction',
    value: function clickAction(item, index) {
      var a = document.getElementsByClassName('tarbar_item')[index].firstChild;
      var action = this.props.actions[item].click ? this.props.actions[item].click : this.noaction;
      action(function () {
        a.setAttribute('class', 'imgStyle');
        setTimeout(function () {
          a.setAttribute('class', null);
        }, 1000);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = Object.keys(this.props.actions).map(function (item, index) {

        var path = './images/' + _this2.props.actions[item].icon + '.png';
        return _react2.default.createElement(
          'div',
          { className: 'tarbar_item', key: item, onClick: _this2.clickAction.bind(_this2, item, index) },
          _react2.default.createElement('img', { src: require(path), alt: '' }),
          _react2.default.createElement(
            'span',
            null,
            _this2.props.actions[item].text
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'tarbar_container' },
        items
      );
    }
  }]);

  return TarbarView;
}(_react2.default.Component);

TarbarView.propTypes = {
  actions: _react.PropTypes.object
};

exports.default = TarbarView;