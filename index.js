
var countryContinent =  require("./country_continent.js");
var countryNames = require("./country_en.js");
var _ = require("underscore");

var territory = {}
var countries = {}

var getNameFromCode = function(opts){
  var code = opts.code;
  var name = "N/A";

  country = _.find(countryNames, function(country){
    return country.country_code == code;
  });

  if(country){
    name = country.country_name;
  }

  return name;
};

var joint = function(){
  var countries = _.map(countryContinent, function(c){
    var result = {
      code: c.country_code,
      continent_code: c.continent_code
    }

    result.name = getNameFromCode({code: c.country_code}); 
    return result;
  });

  return countries;
};

countries = joint();


territory.getAll = function(){
  return countries;
};

territory.getByContinent = function(){
  var result = _.groupBy(countries, function(c){
    return c.continent_code;
  });

  return result;
};

module.exports = territory

