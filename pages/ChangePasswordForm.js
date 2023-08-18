"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _jsLogger = _interopRequireDefault(require("js-logger"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AdminContext = _interopRequireDefault(require("../AdminContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = _jsLogger.default.get("bananas");

var styles = theme => ({
  root: {
    maxWidth: 350
  },
  formLabel: {
    marginBottom: theme.spacing(2)
  },
  formControlNormal: {
    marginTop: theme.spacing(3),
    marginBottom: 0
  },
  field: {
    marginTop: theme.spacing(3)
  }
});

class ChangePasswordForm extends _react.default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      errors: null,
      touched: false,
      old_password: "",
      new_password1: "",
      new_password2: ""
    });

    _defineProperty(this, "onChange", e => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        [e.target.name]: e.target.value,
        touched: true
      }));
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      var {
        api,
        admin
      } = this.context;
      var {
        old_password,
        new_password1,
        new_password2
      } = this.state;
      admin.dismissMessages();
      api["bananas.change_password:create"]({
        data: {
          old_password,
          new_password1,
          new_password2
        }
      }).then(() => {
        admin.success((0, _utils.t)("Password changed successfully."));
        this.setState({
          touched: false,
          errors: null,
          old_password: "",
          new_password1: "",
          new_password2: ""
        });
      }, error => {
        logger.error("Failed to change password", error.response);
        admin.error((0, _utils.t)("Incorrect authentication credentials."));
        this.setState({
          errors: error.response.obj,
          touched: false
        });
      });
    });
  }

  render() {
    var {
      classes
    } = this.props;
    var {
      api
    } = this.context;
    var endpoint = api["bananas.change_password:create"];
    var schema = endpoint.schema.data;
    var {
      errors,
      touched,
      old_password,
      new_password1,
      new_password2
    } = this.state;
    var passwordCheckError = new_password2 !== "" && new_password2 !== new_password1;
    var filled = [old_password, new_password1, new_password2].every(value => value.length > 0);
    return /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.onSubmit,
      className: classes.root,
      "data-testid": "change-password-form"
    }, /*#__PURE__*/_react.default.createElement(_core.FormLabel, {
      component: "legend",
      classes: {
        root: classes.formLabel
      }
    }, endpoint.title), /*#__PURE__*/_react.default.createElement(_utils.Translate, null, "Please enter your old password, for security's sake, and then enter your new password twice so we can verify you typed it in correctly."), /*#__PURE__*/_react.default.createElement(_core.FormControl, {
      fullWidth: true,
      component: "fieldset"
    }, /*#__PURE__*/_react.default.createElement(_core.FormGroup, null, ["old_password", "new_password1", "new_password2"].map(field => /*#__PURE__*/_react.default.createElement(_core.TextField, {
      key: field,
      autoComplete: field,
      classes: {
        root: classes.field
      },
      label: schema[field].title,
      inputProps: {
        "aria-label": schema[field].title
      },
      error: Boolean(errors && errors[field]),
      helperText: Boolean(errors && errors[field]) && errors[field],
      name: field,
      value: this.state[field],
      type: "password",
      onChange: this.onChange,
      fullWidth: true,
      required: true
    })))), /*#__PURE__*/_react.default.createElement(_core.FormControl, {
      fullWidth: true,
      margin: "normal",
      classes: {
        marginNormal: classes.formControlNormal
      }
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      variant: "outlined",
      type: "submit",
      color: "primary",
      fullWidth: true,
      disabled: Boolean(errors) && !touched || !filled || passwordCheckError
    }, (0, _utils.t)("Change my password"))));
  }

}

_defineProperty(ChangePasswordForm, "contextType", _AdminContext.default);

ChangePasswordForm.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(ChangePasswordForm);

exports.default = _default;