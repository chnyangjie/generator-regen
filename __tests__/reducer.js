'use strict'
const path = require(`path`)
const assert = require(`yeoman-assert`)
const helpers = require(`yeoman-test`)

describe(`generator-regen:reducer`, () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, `../generators/reducer`))
      .withPrompts({ someAnswer: true })
  })

  it(`creates files`, () => {
    assert.file([`dummyfile.txt`])
  })
})
