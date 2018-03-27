'use strict'
const path = require(`path`)
const assert = require(`yeoman-assert`)
const helpers = require(`yeoman-test`)

describe(`generator-regen:reducer`, () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, `../generators/reducer`))
      .withPrompts({reducerName: `GlobalReducer`})
  })

  it(`creates files`, () => {
    assert.file([`redux/action/GlobalReducerAction/GlobalReducerAction.js`])
    assert.file([`redux/action/GlobalReducerAction/GlobalReducerAction.test.js`])
    assert.file([`redux/action/GlobalReducerAction/index.js`])

    assert.file([`redux/reducer/GlobalReducer/GlobalReducer.js`])
    assert.file([`redux/reducer/GlobalReducer/GlobalReducer.test.js`])
    assert.file([`redux/reducer/GlobalReducer/index.js`])

    assert.file([`redux/constant/ActionName/GlobalReducerActionName.js`])

    assert.file([`redux/saga/GlobalReducerSaga/index.js`])
    assert.file([`redux/saga/GlobalReducerSaga/GlobalReducerSaga.js`])
    assert.file([`redux/saga/GlobalReducerSaga/GlobalReducerSaga.test.js`])
  })
})
