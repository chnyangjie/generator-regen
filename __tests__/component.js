'use strict'
const path = require(`path`)
const assert = require(`yeoman-assert`)
const helpers = require(`yeoman-test`)

describe(`generator-regen:component`, () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, `../generators/component`))
      .withPrompts({componentName: `Button`})
  })

  it(`creates files`, () => {
    assert.file([`component/Button/Button.js`])
    assert.file([`component/Button/Button.test.js`])
    assert.file([`component/Button/index.js`])
  })
})
