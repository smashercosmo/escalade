exports.default = void 0

const dc = require('../data/dc-abbrv.json')
const insular = require('../data/insular-abbrv.json')
const state = require('../data/state-abbrv.json')

const _list = { ...dc,  ...insular, ...state }
exports["default"] = _list
module.exports = exports["default"]