let dc = require('./dc-abbrv.json')
let insular = require('./insular-abbrv.json')
let state = require('./state-abbrv.json')

export default { ...dc, ...insular, ...state }