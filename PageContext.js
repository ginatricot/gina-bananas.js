"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.usePage = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContext = /*#__PURE__*/_react.default.createContext({
  title: undefined,
  route: undefined,
  logger: undefined,
  data: undefined
});

var usePage = () => _react.default.useContext(PageContext);

exports.usePage = usePage;
var _default = PageContext;
exports.default = _default;