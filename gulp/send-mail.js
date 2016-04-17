'use strict';

var config     = require('../config.json');
var gulp       = require('gulp');
var nodemailer = require('nodemailer');
var mailgun    = require('nodemailer-mailgun-transport');
var fs         = require('fs');

/**
 * Send a specific email template using Mailgun
 * @param  {string} template Template name
 * @return {[type]}          [description]
 */
function sendEmail(template) {
    try {
        var mailgunAuth = {
            auth: {
                domain  : config.mailgun.domain,
                api_key : config.mailgun.api_key
            }
        };

        var templatePath    = config.path.templates + '/' + template + '.html';
        var transporter     = nodemailer.createTransport(mailgun(mailgunAuth));
        var templateContent = fs.readFileSync(templatePath, 'utf8');

        var mailOptions = {
            from    : config.send.from,
            to      : config.send.to,
            subject : config.send.subject + ' - ' + template,
            html    : templateContent,
            text    : templateContent
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                return console.log(error);
            } else {
                return console.log('Message sent: \n\t' + info.message);
            }
        });

    } catch(e) {
        if (e.code == 'ENOENT') {
            console.log('An error occurred. Check whether the provided template name is correct and the template exists in the ' + config.path.templates + ' directory.');
        } else if (e instanceof TypeError) {
            console.log('An error occurred. Check whether all settings in config.json are correct.');
        } else {
            console.log(e);
        }
    }
}

// Send an email; the template name is provided as a task argument
gulp.task('send', function() {
    var emailNameIdx;
    var allowedParamNames = [
        '--template',
        '--email',
        '-t',
        '-e'
    ];

    try {
        for (var i = 0; i < allowedParamNames.length; i++) {
            emailNameIdx = process.argv.indexOf(allowedParamNames[i]);
            if (emailNameIdx != -1) {
                break;
            }
        }

        if (emailNameIdx !== -1) {
            emailNameIdx++;
            return sendEmail(process.argv[emailNameIdx]);
        } else {
            throw 'You need to provide a template name, try:\n  gulp send --template your_template\n';
        }
    } catch(e) {
        console.log(e);
    }
});