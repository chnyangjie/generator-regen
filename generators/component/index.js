'use strict'
const Generator = require(`yeoman-generator`)
const chalk = require(`chalk`)
const yosay = require(`yosay`)

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the mathematical ${chalk.red(`generator-regen`)} generator!`)
    )

    const prompts = [
      {
        type: `input`,
        name: `componentName`,
        message: `what's component's name`,
        default: `NewComponent`
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    let componentName = this.props.componentName
    this.fs.copyTpl(
      this.templatePath(`component/component.ejs`),
      this.destinationPath(`component/${componentName}/${componentName}.js`),
      {
        componentName: componentName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`component/index.ejs`),
      this.destinationPath(`component/${componentName}/index.js`),
      {
        componentName: componentName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`component/component.test.ejs`),
      this.destinationPath(`component/${componentName}/${componentName}.test.js`),
      {
        componentName: componentName
      }
    )
  }


  install() {
    // this.installDependencies();
  }
}
