const http = require('http');
const express = require('express');
const app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', function (req, res) {
    const twiml = new MessagingResponse();

    console.log(req.body.FromCountry);

    twiml.message(
        'Hi! It looks like your phone number was born in ' + req.body.FromCountry
    );

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})

http.createServer(app).listen(8081, function () {   
   console.log("This app is listening at local host 8081");
})