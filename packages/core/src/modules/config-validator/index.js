'use strict'

const Joi = require('joi')
const { ConfigurationError } = require('../../errors')

class ConfigurationValidator {

  validate (name, rules, options) {
    const result = Joi.validate(options, rules)
    if (result.error) {
      throw new ConfigurationError(
        `Could not register ${name} due to invalid configuration: ${result.error}`
      )
    }
    return result.value
  }
}

module.exports = new ConfigurationValidator()
