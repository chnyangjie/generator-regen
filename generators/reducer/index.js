'use strict'
const Generator = require(`yeoman-generator`)
const chalk = require(`chalk`)
const yosay = require(`yosay`)

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the perfect ${chalk.red(`generator-regen`)} generator!`)
    )

    const prompts = [
      {
        type: `input`,
        name: `reducerName`,
        message: `what's reducer's name`,
        default: `NewReducer`
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    let reducerName = this.props.reducerName
    // reducer
    this.fs.copyTpl(
      this.templatePath(`redux/reducer/reducer.ejs`),
      this.destinationPath(`redux/reducer/${reducerName}/${reducerName}.js`),
      {
        reducerName: reducerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`redux/reducer/index.ejs`),
      this.destinationPath(`redux/reducer/${reducerName}/index.js`),
      {
        reducerName: reducerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`redux/reducer/reducer.test.ejs`),
      this.destinationPath(`redux/reducer/${reducerName}/${reducerName}.test.js`),
      {
        reducerName: reducerName
      }
    )
    // actionName
    this.fs.copy(
      this.templatePath(`redux/constant/ActionName/reducerActionName.js`),
      this.destinationPath(`redux/constant/ActionName/${reducerName}ActionName.js`)
    )
    //action
    this.fs.copyTpl(
      this.templatePath(`redux/action/reducerAction.ejs`),
      this.destinationPath(`redux/action/${reducerName}Action/${reducerName}Action.js`),
      {
        reducerName: reducerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`redux/action/index.ejs`),
      this.destinationPath(`redux/action/${reducerName}Action/index.js`),
      {
        reducerName: reducerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`redux/action/reducerAction.test.ejs`),
      this.destinationPath(`redux/action/${reducerName}Action/${reducerName}Action.test.js`),
      {
        reducerName: reducerName
      }
    )
    //saga
    this.fs.copyTpl(
      this.templatePath(`redux/saga/saga.ejs`),
      this.destinationPath(`redux/saga/${reducerName}Saga/${reducerName}Saga.js`),
      {
        reducerName: reducerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`redux/saga/index.ejs`),
      this.destinationPath(`redux/saga/${reducerName}Saga/index.js`),
      {
        reducerName: reducerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`redux/saga/saga.test.ejs`),
      this.destinationPath(`redux/saga/${reducerName}Saga/${reducerName}Saga.test.js`),
      {
        reducerName: reducerName
      }
    )
  }

  install() {
  }
}
