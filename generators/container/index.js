'use strict'
const Generator = require(`yeoman-generator`)
const chalk = require(`chalk`)
const yosay = require(`yosay`)

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the exceptional ${chalk.red(`generator-regen`)} generator!`)
    )


    const prompts = [
      {
        type: `input`,
        name: `containerName`,
        message: `what's container's name`,
        default: `NewContainer`
      }
    ]

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props
    })
  }

  writing() {
    let containerName= this.props.containerName
    this.fs.copyTpl(
      this.templatePath(`container/container.ejs`),
      this.destinationPath(`container/${containerName}/${containerName}.js`),
      {
        containerName: containerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`container/index.ejs`),
      this.destinationPath(`container/${containerName}/index.js`),
      {
        containerName: containerName
      }
    )
    this.fs.copyTpl(
      this.templatePath(`container/container.test.ejs`),
      this.destinationPath(`container/${containerName}/${containerName}.test.js`),
      {
        containerName: containerName
      }
    )
  }

  install() {
  }
}
