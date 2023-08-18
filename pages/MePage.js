"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AdminContext = _interopRequireDefault(require("../AdminContext"));

var _Content = _interopRequireDefault(require("../Content"));

var _TitleBar = _interopRequireDefault(require("../TitleBar"));

var _ChangePasswordForm = _interopRequireDefault(require("./ChangePasswordForm"));

var _SettingsForm = _interopRequireDefault(require("./SettingsForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  paper: {
    padding: theme.spacing(3),
    alignSelf: "flex-start"
  }
});

class MePage extends _react.default.Component {
  render() {
    var {
      admin
    } = this.context;
    var {
      data,
      classes
    } = this.props;
    var user = data.obj;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TitleBar.default, {
      title: user.full_name
    }), /*#__PURE__*/_react.default.createElement(_Content.default, null, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.root
    }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
      classes: {
        root: classes.paper
      },
      elevation: 1,
      square: true
    }, /*#__PURE__*/_react.default.createElement(_ChangePasswordForm.default, null)), admin.settings.settings.editable && /*#__PURE__*/_react.default.createElement(_core.Paper, {
      classes: {
        root: classes.paper
      },
      elevation: 1,
      square: true
    }, /*#__PURE__*/_react.default.createElement(_SettingsForm.default, {
      settings: admin.settings.settings,
      onChange: (setting, value) => {
        admin.settings.configure({
          [setting]: value
        });
      },
      onReset: () => {
        admin.settings.reset();
      }
    })))));
  }

}

_defineProperty(MePage, "propTypes", {
  classes: _propTypes.default.object.isRequired,
  data: _propTypes.default.object.isRequired
});

_defineProperty(MePage, "contextType", _AdminContext.default);

var _default = (0, _styles.withStyles)(styles)(MePage);

exports.default = _default;