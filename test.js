var expect = require('expect.js')
var territory = require('./');

describe('territories', function(){
  it('should work', function(){
    console.log(territory.getAll());
    console.log(territory.getByContinent());
  });
});
