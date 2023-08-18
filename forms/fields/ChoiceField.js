"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChoiceField = _ref => {
  var {
    input,
    schema,
    fieldProps = {}
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    error: fieldProps.error
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    htmlFor: "name-error"
  }, fieldProps.label), /*#__PURE__*/_react.default.createElement(_core.Select, _extends({}, input, fieldProps, {
    value: input.value || []
  }), !schema.required && /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    value: ""
  }, /*#__PURE__*/_react.default.createElement("em", null, "None")), schema.enum.map(value => /*#__PURE__*/_react.default.createElement(_core.MenuItem, {
    value: value,
    key: value
  }, value))), fieldProps.error && /*#__PURE__*/_react.default.createElement(_core.FormHelperText, null, fieldProps.helperText));
};

var _default = ChoiceField;
exports.default = _default;