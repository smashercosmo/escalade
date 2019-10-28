# US State Names
Returns an array of the 50 US States by default

Module accepts a JSON array of options that modifies the return

Array return options: state-list, dc-list, insular-list, all-list
Object return options: state-abbrv, dc-abbrv, insular-abbrv, all-abbrv

## Examples
```
let names = require('@escaladesports/us-states-lib')

console.log(names.stateList())
# returns ["Alabama","Alaska","Arizona","Arkansas","California","Colorado" ...

console.log(names.stateList('["state-list", "dc-list"]'))
# returns  ["Alabama","Alaska", ... "Washington, DC", "West Virginia" ...

console.log(names.stateList('["state-abbrv"]'))
# returns {"Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", ...

// Mixing return types
console.log(names.stateList('["state-list", "dc-abbrv"]'))
#returns 
US-State-Lib input mismatch. args were:, state-list dc-abbrv
{0: "Alabama", 1: "Alaska", 2: "Arizona", 3: "Arkansas" ... "DC": "Washington, DC" ...
```
