'use strict'
const path = require(`path`)
const assert = require(`yeoman-assert`)
const helpers = require(`yeoman-test`)

describe(`generator-regen:container`, () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, `../generators/container`))
      .withPrompts({containerName: `HomePage`})
  })

  it(`creates files`, () => {
    assert.file([`container/HomePage/HomePage.js`])
    assert.file([`container/HomePage/HomePage.test.js`])
    assert.file([`container/HomePage/index.js`])
  })
})
