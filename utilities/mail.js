var nodemailer = require("nodemailer");
var fs = require('fs');
var path = require('path');

var transport = nodemailer.createTransport({

    service: 'Gmail',
    auth: {
        user: "truptin02@gmail.com",
        pass: "#Narayan02"
    }
});

//console.log("SMTP Configured");

var mailOptions = {
    from: 'truptin02@gmail.com', // sender address
    to: 'snande@uncc.edu,truptinatural@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
    //text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'path': 'Reports/Allure_Report.pdf',
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        response.send(error);
    } else {
        console.log("Message sent: " + info.response);
        response.send(info);
    }

});