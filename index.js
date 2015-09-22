'use strict'

var isObject = require('is-js-object')

module.exports = getPropertyValue

function getPropertyValue (obj, path) {
  if (!checkObject(obj) || typeof path !== 'string') {
    return obj
  }

  // the origin object remains
  var clone = obj

  path.split('.').some(function(p) {
    clone = clone[p]
    if (!clone) {
      return true
    }
  })

  return clone
}

function checkObject(obj) {
  return isObject(obj) ||
    Object.prototype.toString.call(obj) === '[object Error]'
}
