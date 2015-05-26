'use strict'

var isObject = require('is-js-object')

module.exports = getPropertyValue

function getPropertyValue (obj, path) {
  if (!isObject(obj) || typeof path !== 'string') {
    return obj
  }

  // don't change the origin object
  var clone = obj

  path.split('.').forEach(function(p) {
    clone = clone[p]
  })

  return clone
}
