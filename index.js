"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AdminContext", {
  enumerable: true,
  get: function get() {
    return _AdminContext.default;
  }
});
Object.defineProperty(exports, "useAdmin", {
  enumerable: true,
  get: function get() {
    return _AdminContext.useAdmin;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "Content", {
  enumerable: true,
  get: function get() {
    return _Content.default;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link.default;
  }
});
Object.defineProperty(exports, "PageContext", {
  enumerable: true,
  get: function get() {
    return _PageContext.default;
  }
});
Object.defineProperty(exports, "usePage", {
  enumerable: true,
  get: function get() {
    return _PageContext.usePage;
  }
});
Object.defineProperty(exports, "LoginForm", {
  enumerable: true,
  get: function get() {
    return _LoginPageForm.default;
  }
});
Object.defineProperty(exports, "TitleBar", {
  enumerable: true,
  get: function get() {
    return _TitleBar.default;
  }
});
Object.defineProperty(exports, "ToolBar", {
  enumerable: true,
  get: function get() {
    return _ToolBar.default;
  }
});
Object.defineProperty(exports, "Tools", {
  enumerable: true,
  get: function get() {
    return _Tools.default;
  }
});
Object.defineProperty(exports, "t", {
  enumerable: true,
  get: function get() {
    return _utils.t;
  }
});
Object.defineProperty(exports, "Translate", {
  enumerable: true,
  get: function get() {
    return _utils.Translate;
  }
});
exports.default = void 0;

var _Admin = _interopRequireDefault(require("./Admin"));

var _AdminContext = _interopRequireWildcard(require("./AdminContext"));

var _Container = _interopRequireDefault(require("./Container"));

var _Content = _interopRequireDefault(require("./Content"));

var _Link = _interopRequireDefault(require("./Link"));

var _PageContext = _interopRequireWildcard(require("./PageContext"));

var _LoginPageForm = _interopRequireDefault(require("./pages/LoginPageForm"));

var _TitleBar = _interopRequireDefault(require("./TitleBar"));

var _ToolBar = _interopRequireDefault(require("./ToolBar"));

var _Tools = _interopRequireDefault(require("./Tools"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bananas = {
  App: _Admin.default
};
var _default = Bananas;
exports.default = _default;