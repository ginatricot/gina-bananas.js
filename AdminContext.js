"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useAdmin = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminContext = /*#__PURE__*/_react.default.createContext({
  admin: undefined,
  router: undefined,
  api: undefined,
  user: undefined
});

var useAdmin = () => _react.default.useContext(AdminContext);

exports.useAdmin = useAdmin;
var _default = AdminContext;
exports.default = _default;