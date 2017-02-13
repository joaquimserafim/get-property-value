/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const isObject  = require('is.object')
const some      = require('array.some')

module.exports = getPropertyValue

function getPropertyValue (obj, path) {
  if (!isObject(obj) || typeof path !== 'string') {
    return obj
  }

  let clone = obj

  some(path.split('.'), procPath)

  return clone

  function procPath (p) {
    clone = clone[p]
    if (!clone) {
      return true
    }
  }
}
