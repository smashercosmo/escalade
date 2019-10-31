Object.defineProperty(exports, "__esModule", {
  value: true
})

exports.default = void 0
var dc = require('./dc-list.json')
var insular = require('./insular-list.json')
var state = require('./state-list.json')

var list = [ ...dc, ...insular, ...state ]
exports["default"] = list
module.exports = exports["default"]