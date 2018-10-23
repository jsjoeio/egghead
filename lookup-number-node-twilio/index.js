require('dotenv').load()
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

client.lookups.phoneNumbers(process.env.PHONE_NUMBER)
  .fetch({ countryCode: 'US' })
  .then(phone_number => console.log(phone_number))
  .done()