exports.default = void 0
var dc = require('./dc-abbrv.json')
var insular = require('./insular-abbrv.json')
var state = require('./state-abbrv.json')

var _default = { ...dc,  ...insular, ...state }
exports.default = _default