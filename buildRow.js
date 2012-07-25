module.exports = function(columns){
  var row = {};
  columns.forEach(function(column){
    row[column.metadata.colName] = column.value;
  });
  return row;
}
