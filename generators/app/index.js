'use strict'
const Generator = require(`yeoman-generator`)
const chalk = require(`chalk`)
const yosay = require(`yosay`)

module.exports = class extends Generator {
  initializing() {
    this.log(
      (`initializing ${chalk.red(`generator-regen`)}`)
    )
  }

  prompting() {
    this.log(
      (`promting ${chalk.red(`generator-regen`)}`)
    )
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the delightful ${chalk.red(`generator-regen`)} generator!`)
    )
    const prompts = [
      {
        type: `input`,
        name: `component name`,
        message: `component name`,
        default: `NewComponent`
      },
      {
        type: `confirm`,
        name: `someAnswer`,
        message: `Would you like to enable this option?`,
        default: true
      }
    ]
    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  configuring() {
    this.log(
      (`configuring ${chalk.red(`generator-regen`)}`)
    )
  }

  default() {
    this.log(
      (`default ${chalk.red(`generator-regen`)}`)
    )
  }

  writing() {
    this.log(
      (`writing ${chalk.red(`generator-regen`)}`)
    )
    // this.fs.copy(
    //   this.templatePath('component.ejs'),
    //   this.destinationPath('component.ejs')
    // );
  }

  conflicts() {
  }

  install() {
    this.log(
      (`install ${chalk.red(`generator-regen`)}`)
    )
    // this.installDependencies();
  }

  end() {
    this.log(
      yosay(`end ${chalk.red(`generator-regen`)}`)
    )
  }
}
