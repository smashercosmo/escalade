let dc = require('./dc-list.json')
let insular = require('./insular-list.json')
let state = require('./state-list.json')

export default { ...dc, ...insular, ...state }