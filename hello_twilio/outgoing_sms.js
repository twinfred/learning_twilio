var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var date = new Date()
var curr_time = date.getHours() + ":" + date.getMinutes();

client.messages.create({
    body: 'Greetings! The current time is: ' + curr_time + ' VR121BT74PS2I0B',
    to: '+',  // Text this number
    from: '+' // From a valid Twilio number
})
.then((message) => console.log(message.sid));