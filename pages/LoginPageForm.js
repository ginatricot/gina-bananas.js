"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AdminContext = _interopRequireDefault(require("../AdminContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = () => ({
  submit: {
    boxShadow: "none"
  }
});

var DialogContent = (0, _styles.withStyles)(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    "& > * + * ": {
      marginTop: theme.spacing(2)
    }
  }
}))(_DialogContent.default);
var DialogActions = (0, _styles.withStyles)(theme => ({
  root: {
    borderTop: "1px solid ".concat(theme.palette.divider),
    margin: 0,
    padding: theme.spacing(1)
  }
}))(_DialogActions.default);

class LoginForm extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {});

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      var {
        admin
      } = this.context;
      var {
        username,
        password
      } = this.state;
      var {
        logger
      } = this.props;
      admin.login(username, password).catch(error => {
        logger.debug("Login Failed", error.response, error);
        this.context.admin.error((0, _utils.t)("Unable to log in with provided credentials."));
      });
    });

    _defineProperty(this, "save", e => {
      var s = _objectSpread({}, this.state);

      s[e.target.name] = e.target.value;
      this.setState(_objectSpread({}, s));
    });
  }

  render() {
    var {
      classes
    } = this.props;
    var {
      api
    } = this.context;
    var endpoint = api["bananas.login:create"];
    var schema = endpoint.schema.data;
    return /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.onSubmit
    }, /*#__PURE__*/_react.default.createElement(DialogContent, null, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      autoFocus: true,
      fullWidth: true,
      label: schema.username.title,
      name: "username",
      type: "text",
      onChange: this.save,
      inputProps: {
        "aria-label": "Username"
      }
    }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
      fullWidth: true,
      label: schema.password.title,
      name: "password",
      type: "password",
      onChange: this.save,
      inputProps: {
        "aria-label": "Password"
      }
    })), /*#__PURE__*/_react.default.createElement(DialogActions, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      variant: "contained",
      type: "submit",
      color: "primary",
      "aria-label": "login",
      classes: {
        contained: classes.submit
      }
    }, (0, _utils.t)("Log in"))));
  }

}

_defineProperty(LoginForm, "contextType", _AdminContext.default);

LoginForm.propTypes = {
  classes: _propTypes.default.object.isRequired,
  logger: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  name: "BananasLoginForm"
})(LoginForm);

exports.default = _default;