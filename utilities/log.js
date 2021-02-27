var mylog = require('winston');

mylog.remove(mylog.transports.Console);
mylog.add(mylog.transports.Console, {timestamp: true});
mylog.add(mylog.transports.File, {filename: 'project-log.log'});

module.exports = mylog;