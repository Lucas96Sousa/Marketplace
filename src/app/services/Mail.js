const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTestAccount(mailConfig)

module.exports = transport
