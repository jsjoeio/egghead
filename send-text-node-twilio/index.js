require('dotenv').load()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.messages
  .create({
    body: 'Hello from the world of Node!',
    from: process.env.TWILIO_NUMBER,
    to: process.env.PHONE_NUMBER
  })
  .then(() => console.log('success!'))
  .done()