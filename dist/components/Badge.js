"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;

function Badge(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-18 h-6 px-10 py-3 bg-gray-400 rounded-md flex items-center"
  }, /*#__PURE__*/React.createElement("h3", null, props.children));
}