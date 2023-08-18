"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AdminContext = _interopRequireDefault(require("./AdminContext"));

var _errors = require("./errors");

var _ErrorPage = _interopRequireDefault(require("./pages/ErrorPage"));

var _excluded = ["children", "component"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ErrorBoundary extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  static getDerivedStateFromError() {
    return {
      error: new _errors.InternalPageError()
    };
  }

  render() {
    var _this$props = this.props,
        {
      children,
      component
    } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);

    var Fallback = component;
    var {
      error
    } = this.state;
    return error ? Fallback ? /*#__PURE__*/_react.default.createElement(Fallback, props) : /*#__PURE__*/_react.default.createElement(_ErrorPage.default, {
      key: error.code,
      title: error.message,
      data: {
        statusCode: error.code
      }
    }) : children;
  }

}

_defineProperty(ErrorBoundary, "contextType", _AdminContext.default);

ErrorBoundary.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  component: _propTypes.default.func
};
ErrorBoundary.defaultProps = {
  component: null
};
var _default = ErrorBoundary;
exports.default = _default;