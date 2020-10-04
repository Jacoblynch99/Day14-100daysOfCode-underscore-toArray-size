const _ = require("underscore")

const numArr = [12, 5, 65, 20, 789, 92, 56]

const size = _.size(numArr)

console.log(
  (function () {
    return _.toArray(arguments).slice(1)
  })(1, 2, 3, 4)
)

console.log(size)
