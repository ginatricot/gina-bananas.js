"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    "& > * + *": {
      // Margin between nodes (buttons)
      marginLeft: theme.spacing(1)
    }
  }
});

class Tools extends _react.default.Component {
  render() {
    var {
      classes,
      children,
      className
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(classes.root, className)
    }, children);
  }

}

Tools.propTypes = {
  classes: _propTypes.default.object.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  className: _propTypes.default.string
};
Tools.defaultProps = {
  children: null,
  className: undefined
};

var _default = (0, _styles.withStyles)(styles, {
  name: "BananasTools"
})(Tools);

exports.default = _default;