
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

territory.groupByContinent = function(){
  var result = _.groupBy(countries, function(c){
    return c.continent_code;
  });

  result = _.map(result, function(territories, continent_code){
    var nameMap = {
      AF: "Africa",
      AS: "Asia",
      EU: "Europe",
      NA: "North America",
      SA: "South America",
      OC: "Oceania",
      AN: "Antarctica"
    };

    var continent_name = nameMap[continent_code];

    var continent = {
      continent_code: continent_code,
      continent_name: continent_name,
      territories: territories
    }

    return continent;
  });

  return result;
};

module.exports = territory

