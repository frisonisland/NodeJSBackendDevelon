'use strict';


/**
 * Returns the same array without duplicates
 *
 * body StringArray 
 * returns Sum
 **/
exports.removeDuplicates = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    var result = [];
    body["values"].forEach(
        x => {
          if (result.includes(x)) {
            return;
          }
          result.push(x);
        }
    )
    examples['application/json'] = {"values": result};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the sum of all numbers
 *
 * body NumberArray 
 * returns Sum
 **/
exports.sumArray = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    var sum = 0;
    body["numbers"].forEach(
        x => sum +=x
    )
    examples['application/json'] = {"result": sum};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Uppercase firstname and lastname
 *
 * body FirstLastName 
 * returns FirstLastName
 **/
exports.upperCaseFirstlastName = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    var firstname = "";
    var lastname = "";
    if (body.hasOwnProperty('firstName')) {
      firstname = body["firstName"];
      firstname = firstname[0].toUpperCase() + firstname.substr(1) + " ";
    }
    if (body.hasOwnProperty('lastName')) {
      lastname = body["lastName"];
      if (firstname === "") {
        lastname = lastname[0].toUpperCase() + lastname.substr(1);
      }
    }
    examples['application/json'] = {"result": firstname + lastname};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

