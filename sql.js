// # sql
var tedious = require('tedious'),
  buildRow = require('./buildRow'),
  nconf = require('nconf');
// Takes a SQL String and executes it on a SQL Server Database 
// and returns results via err,data callback
module.exports = function(sql, callback) {
  var results = [], count = 0;

  nconf.file('./config.json');  

  var cn = new tedious.Connection(nconf.get('production'));
  var req = new tedious.Request(sql.toString(), function(err, rowCount) { });
  req.on('row', function(columns) {
    results.push(buildRow(columns));
    count = count + 1;
  });

  req.on('doneProc', function(rowCount) {
    callback(null, JSON.stringify(results));
    //HACK need to wait for state to change to login to close
    setTimeout(function() { cn.close(); }, 1000);
  });

  cn.on('connect', function(){
    cn.execSql(req);
  });
}