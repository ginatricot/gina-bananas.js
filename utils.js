"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.toQuery = toQuery;
exports.fromQuery = fromQuery;
exports.ensureTrailingSlash = ensureTrailingSlash;
exports.ensureLeadingHash = ensureLeadingHash;
exports.absolutePath = absolutePath;
exports.nthIndexOf = nthIndexOf;
exports.capitalize = capitalize;
exports.interpolateString = interpolateString;
exports.t = t;
exports.getFromSchema = getFromSchema;
exports.hasPermissions = exports.makeUser = exports.MultiMeter = exports.ComponentProxy = exports.Translate = void 0;

var _core = require("@material-ui/core");

var _jsLogger = _interopRequireDefault(require("js-logger"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = _jsLogger.default.get("bananas");

function getCookie(name) {
  var prefix = "".concat(name, "=");
  var cookies = document.cookie.split(/\s*;\s*/);
  var match = cookies.find(cookie => cookie.startsWith(prefix));
  return match == null ? undefined : match.slice(prefix.length);
}

function toQuery(obj) {
  if (!obj) {
    return "";
  }

  var query = Object.keys(obj).map(key => {
    return "".concat(key, "=").concat(encodeURIComponent(obj[key]));
  }).join("&");
  return query ? "?".concat(query) : "";
}

function fromQuery(query) {
  if (!query) {
    return {};
  }

  return query.substring(1).split("&").reduce((params, param) => {
    var [key, value] = param.split("=");
    return key === "" ? params : _objectSpread(_objectSpread({}, params), {}, {
      [key]: decodeURIComponent(value)
    });
  }, {});
}

function ensureTrailingSlash(path) {
  if (path != null && !path.endsWith("/")) {
    return "".concat(path, "/");
  }

  return path;
}

function ensureLeadingHash(hash) {
  if (hash != null && !hash.startsWith("#")) {
    return "#".concat(hash);
  }

  return hash;
}

function absolutePath(path) {
  var basename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";

  if (!path) {
    return path;
  }

  var pathname = path; // Make relative path absolute to basename

  if (!pathname.startsWith("/")) {
    pathname = ensureTrailingSlash(basename) + pathname;
  } // Expand path


  if (pathname.indexOf(".") >= 0) {
    var stack = [];

    for (var part of pathname.split("/")) {
      if (part === ".") {
        continue;
      } else if (part === ".." && stack.length > 0) {
        stack.pop();
      } else {
        stack.push(part);
      }
    }

    pathname = stack.join("/");
  }

  return ensureTrailingSlash(pathname);
}

function nthIndexOf(str, pattern, n, start) {
  var index = str.indexOf(pattern, start || 0);

  if (index >= 0 && n > 1) {
    return nthIndexOf(str, pattern, n - 1, index + 1);
  }

  return index;
}
/**
 * Like Python’s `.capitalize()`.
 */


function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function interpolateString(string, params) {
  return Array.isArray(params) ? params.reduce((s, value) => s.replace(/%[sd]|\{\}/, value), string) : Object.entries(params).reduce((s, _ref) => {
    var [key, value] = _ref;
    return s.replace(new RegExp("%\\(".concat(key, "\\)[sd]|\\{").concat(key, "\\}"), "g"), value);
  }, string);
}

function t(key, params) {
  if (!window.i18n) {
    logger.warn("Bananas i18n translations not initialized. Failed to translate:", key);
    return key;
  }

  var value = window.i18n[key] || key;
  return params ? interpolateString(value, params) : value;
}

var Translate = _ref2 => {
  var {
    children,
    params
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_core.Typography, null, t(children, params));
};

exports.Translate = Translate;
Translate.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  params: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object])
};
Translate.defaultProps = {
  params: undefined
};
/**
 * Helper for proxying exposed methods from one or more referenced components.
 */

class ComponentProxy {
  constructor() {
    this.proxy = {};
  }

  add(Component, alias) {
    var _this = this;

    var reference = /*#__PURE__*/_react.default.createRef(); // Add exposed component actions to proxy


    var _loop = function _loop(action) {
      _this.proxy[action] = function () {
        return reference.current ? reference.current[action](...arguments) : null;
      };
    };

    for (var action of Component.expose) {
      _loop(action);
    } // Remember reference under alias for later use


    if (alias) {
      this[alias] = reference;
    }

    return reference;
  }

}

exports.ComponentProxy = ComponentProxy;

class MultiMeter {
  constructor() {
    _defineProperty(this, "meters", {});

    _defineProperty(this, "up", (name, step) => this.change(name, step ? Math.abs(step) : 1));

    _defineProperty(this, "down", (name, step) => this.change(name, step ? -Math.abs(step) : -1));

    _defineProperty(this, "step", (up, name) => up ? this.up(name) : this.down(name));

    _defineProperty(this, "change", (name, delta) => {
      var n = name || "default";
      this.meters[n] = Math.max((this.meters[n] || 0) + delta, 0);
      return this.meters[n];
    });

    _defineProperty(this, "read", name => {
      return name ? this.meters[name] > 0 : Object.keys(this.meters).some(n => this.reads(n));
    });
  }

}

exports.MultiMeter = MultiMeter;

function getFromSchema(schema, path) {
  return getFromSchemaHelper(schema, path.split("."), []);
}

function getFromSchemaHelper(schema, pathItems, location) {
  if (pathItems.length === 0) {
    return schema;
  }

  var [key, ...restPath] = pathItems;
  var type = {}.toString.call(schema);

  if (type !== "[object Object]") {
    throw new TypeError("Cannot access ".concat(JSON.stringify(key), " on ").concat(type, " at ").concat(JSON.stringify(["schema", ...location].join("."))));
  }

  if (schema.type === "array") {
    return getFromSchemaHelper(schema.items, pathItems, [...location, "items"]);
  }

  if (schema.type === "object") {
    return getFromSchemaHelper(schema.properties, pathItems, [...location, "properties"]);
  }

  if (!{}.hasOwnProperty.call(schema, key)) {
    throw new TypeError("".concat(JSON.stringify(key), " is not present at ").concat(JSON.stringify(["schema", ...location].join(".")), ". Valid choices: ").concat(JSON.stringify(Object.keys(schema))));
  }

  return getFromSchemaHelper(schema[key], restPath, [...location, key]);
}

var makeUser = responseData => {
  return _objectSpread(_objectSpread({}, responseData), {}, {
    hasPermission(permission) {
      return this.permissions.indexOf(permission) !== -1;
    }

  });
};

exports.makeUser = makeUser;

var hasPermissions = function hasPermissions(permissions, user) {
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  for (var permission of permissions) {
    if (user.hasPermission(permission)) {
      if (!all) {
        return true;
      }
    } else if (all) {
      return false;
    }
  }

  return all;
};

exports.hasPermissions = hasPermissions;