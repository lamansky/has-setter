'use strict'

const assert = require('assert')
const hasSetter = require('.')

class Test {
  set data (value) {}
  get data2 () {}
}

class Test2 extends Test {
}

describe('hasSetter()', function () {
  it('should return true if a class prototype has a setter', function () {
    assert(hasSetter(Test.prototype, 'data'))
  })

  it('should return true if an object has a setter', function () {
    const test = new Test()
    assert(hasSetter(test, 'data'))
  })

  it('should return true if an object has a setter in its inheritance chain', function () {
    const test = new Test2()
    assert(hasSetter(test, 'data'))
  })

  it('should return false if an object does not have a setter', function () {
    const test = new Test()
    assert(!hasSetter(test, 'doesNotExist'))
  })

  it('should return false if an object has a getter but not a setter', function () {
    const test = new Test()
    assert(!hasSetter(test, 'data2'))
  })

  it('should return false if object is null', function () {
    assert(!hasSetter(null))
  })

  it('should return false if object is undefined', function () {
    assert(!hasSetter())
  })
})
