"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

var _excluded = ["value"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BooleanField = _ref => {
  var {
    input: {
      value
    },
    variant,
    fieldProps
  } = _ref,
      inputProps = _objectWithoutProperties(_ref.input, _excluded);

  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    required: true,
    error: fieldProps.error
  }, /*#__PURE__*/_react.default.createElement(_core.FormGroup, null, /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, _extends({
    control: variant === "switch" ? /*#__PURE__*/_react.default.createElement(_core.Switch, _extends({
      checked: value
    }, inputProps)) : /*#__PURE__*/_react.default.createElement(_core.Checkbox, _extends({
      checked: value
    }, inputProps))
  }, fieldProps || {}))), fieldProps.error && /*#__PURE__*/_react.default.createElement(_core.FormHelperText, null, fieldProps.helperText));
};

var _default = BooleanField;
exports.default = _default;