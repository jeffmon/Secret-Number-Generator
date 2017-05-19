'use strict';
module.exports = function() {
  var secretNumber = Math.floor(Math.random() * 10000);
  return function(){
    return secretNumber;
  };
};


/*
  var secretNumberGenerator = (function(){
  var number = 0;
  return function(){
    number = Math.floor(Math.random() * 1000000) + 1;
    return number;
  }
  })();
  var secretNumber;
  secretNumber = secretNumberGenerator();*/

