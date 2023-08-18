"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertController = exports.Alert = exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = theme => ({
  root: {},
  agree: {},
  dismiss: {
    color: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    }
  }
});

var Transition = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(_Slide.default, _extends({
  direction: "down",
  ref: ref
}, props)));

Transition.displayName = "SlideTransition";

class Alert extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onAgree", () => {
      var {
        onClose,
        onAgree
      } = this.props;

      if (onClose) {
        onClose();
      }

      if (onAgree) {
        onAgree();
      }
    });

    _defineProperty(this, "onDismiss", () => {
      var {
        onClose,
        onDismiss
      } = this.props;

      if (onClose) {
        onClose();
      }

      if (onDismiss) {
        onDismiss();
      }
    });
  }

  render() {
    var {
      classes,
      open,
      title,
      message,
      agree,
      dismiss,
      keepMounted
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
      open: open,
      fullWidth: true,
      TransitionComponent: Transition,
      keepMounted: keepMounted,
      onClose: this.onDismiss,
      "aria-labelledby": "alert-dialog-slide-title",
      "aria-describedby": "alert-dialog-slide-description",
      classes: {
        root: classes.root
      }
    }, title && /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
      id: "alert-dialog-slide-title"
    }, title), message && /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
      id: "alert-dialog-slide-description"
    }, message)), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, dismiss && /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: this.onDismiss,
      color: "secondary",
      classes: {
        textSecondary: classes.dismiss
      }
    }, typeof dismiss === "boolean" ? "Cancel" : dismiss), agree && /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: this.onAgree,
      color: "primary",
      classes: {
        textPrimary: classes.agree
      }
    }, typeof agree === "boolean" ? "Ok" : agree)));
  }

}

_defineProperty(Alert, "propTypes", {
  classes: _propTypes.default.object.isRequired,
  open: _propTypes.default.bool,
  title: _propTypes.default.string,
  message: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  agree: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  dismiss: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  onAgree: _propTypes.default.func,
  onDismiss: _propTypes.default.func,
  onClose: _propTypes.default.func,
  keepMounted: _propTypes.default.bool
});

_defineProperty(Alert, "defaultProps", {
  open: true,
  title: null,
  message: null,
  agree: true,
  dismiss: true,
  onAgree: undefined,
  onDismiss: undefined,
  onClose: undefined,
  keepMounted: true
});

var BananasAlert = (0, _styles.withStyles)(styles, {
  name: "BananasAlert"
})(Alert);
exports.Alert = BananasAlert;

class AlertController extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      open: false
    });
  }

  alert(props) {
    var state = typeof props === "string" ? {
      message: props,
      dismiss: false
    } : props;
    this.setState(_objectSpread(_objectSpread({}, state), {}, {
      open: true
    }));
  }

  confirm(props) {
    /* Texts from Django admin translation messages, please don't change */
    var confirm = _objectSpread({
      title: (0, _utils.t)("Are you sure?"),
      agree: (0, _utils.t)("Yes, I'm sure"),
      dismiss: (0, _utils.t)("No, take me back")
    }, typeof props === "string" ? {
      message: props
    } : props);

    this.alert(confirm);
  }

  dismissModal() {
    this.setState(_objectSpread(_objectSpread({}, this.state.alert), {}, {
      open: false
    }));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(BananasAlert, _extends({}, this.state, {
      onClose: this.dismissModal.bind(this)
    }));
  }

}

exports.AlertController = AlertController;

_defineProperty(AlertController, "expose", ["alert", "confirm", "dismissModal"]);

var _default = BananasAlert;
exports.default = _default;