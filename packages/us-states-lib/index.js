exports.getStateList = getStateList

function getStateList(args) {
  if (!args) {
    return require('./lib/state-list.json').sort()
  } else {
    var outObj = {}

    for (var arg in args) {
      outObj = { ...outObj,
        ...require("./lib/".concat(args[arg]))
      }
    }

    if (!args.includes('abbrv')) {
      return Object.values(outObj).sort()
    }

    keys = Object.keys(outObj)

    for (var i = keys; i--;) {
      if (Number.isNaN(parseInt(keys[i]))) {
        console.log("US-State-Lib input mismatch. args were:", args)
        break
      }
    }

    return outObj
  }
}