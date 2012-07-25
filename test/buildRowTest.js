var buildRow = require('../buildRow');

describe('buildRow', function() {
  it('should convert name, value to object ', function(){
    buildRow([{metadata: { colName: 'id'}, value: 1},{metadata: { colName: 'desc'}, value: 'Hello World'}]).should.eql({id: 1, desc: 'Hello World'});
  });
});