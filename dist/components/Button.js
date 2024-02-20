"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: props.onclick,
    className: "  py-3 px-6 bg-zinc-900 m-4 rounded-md  ".concat(props.className)
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-white text-xl"
  }, props.children));
}