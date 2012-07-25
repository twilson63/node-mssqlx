var es = require('event-stream'),
  sql = require('./sql');

// Create a through stream for a sql request
es.connect(
  process.openStdin(),
  es.map(sql),
  process.stdout
);

