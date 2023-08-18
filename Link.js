"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _AdminContext = _interopRequireDefault(require("./AdminContext"));

var _utils = require("./utils");

var _excluded = ["route", "params", "path", "query", "href", "children", "patch", "passHref"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Link extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "linkClicked", e => {
      var {
        nodeName,
        target
      } = e.currentTarget; // ignore click for new tab / new window behavior

      if (nodeName === "A" && (target && target !== "_self" || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        return;
      }

      e.preventDefault();
      var {
        route,
        params,
        path,
        query,
        hash,
        patch
      } = this.props;
      this.context.router.route({
        id: route,
        params,
        path,
        query,
        hash
      }, {
        patch
      });
    });
  }

  render() {
    var _this$props = this.props,
        {
      route,
      // id i.e. route name
      params,
      path,
      query,
      href,
      children,
      patch: _,
      passHref
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, _excluded);

    var {
      hash
    } = this.props;
    var child = null;
    var isAnchor = false;
    var props = rest;

    if (typeof children === "string") {
      child = /*#__PURE__*/_react.default.createElement(_Link.default, rest, children);
      isAnchor = true;
    } else {
      child = _react.Children.only(children);
      isAnchor = child.type === "a" || passHref;
    }

    if (isAnchor) {
      if (href) {
        props.href = href;
        return /*#__PURE__*/_react.default.cloneElement(child, props);
      }

      var pathname = undefined;

      if (route) {
        var resolvedRoute = this.context.router.reverse(route, params);
        pathname = resolvedRoute ? resolvedRoute.path : null;
      } else if (path) {
        var _resolvedRoute = this.context.router.resolve(path);

        pathname = _resolvedRoute ? _resolvedRoute.path : path;
      }

      if (!pathname) {
        throw new Error("Failed to create link for: ".concat(route || path));
      }

      hash = hash && !hash.startsWith("#") ? "#".concat(hash) : hash;
      props.href = "".concat(pathname).concat((0, _utils.toQuery)(query)).concat(hash);
    }

    props.onClick = e => {
      if (child.props && typeof child.props.onClick === "function") {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        this.linkClicked(e);
      }
    };

    return /*#__PURE__*/_react.default.cloneElement(child, props);
  }

}

exports.default = Link;

_defineProperty(Link, "contextType", _AdminContext.default);

Link.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,
  route: _propTypes.default.string,
  params: _propTypes.default.object,
  path: _propTypes.default.string,
  query: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  hash: _propTypes.default.string,
  patch: _propTypes.default.bool,
  passHref: _propTypes.default.bool
};
Link.defaultProps = {
  route: undefined,
  params: undefined,
  path: undefined,
  query: "",
  hash: "",
  patch: false,
  passHref: false
};