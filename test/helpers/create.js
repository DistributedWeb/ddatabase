var ddatabase = require('../..')
var ram = require('random-access-memory')

module.exports = function create (key, opts) {
  return ddatabase(ram, key, opts)
}
