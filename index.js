'use strict'

const getPropertyDescriptor = require('get-property-descriptor')

module.exports = function hasSetter (object, propName) {
  const desc = getPropertyDescriptor(object, propName)
  return desc && typeof desc.set === 'function'
}
