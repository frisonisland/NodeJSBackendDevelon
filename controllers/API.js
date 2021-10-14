'use strict';

var utils = require('../utils/writer.js');
var API = require('../service/APIService');

module.exports.removeDuplicates = function removeDuplicates (req, res, next) {
  var body = req.swagger.params['body'].value;
  API.removeDuplicates(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sumArray = function sumArray (req, res, next) {
  var body = req.swagger.params['body'].value;
  API.sumArray(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.upperCaseFirstlastName = function upperCaseFirstlastName (req, res, next) {
  var body = req.swagger.params['body'].value;
  API.upperCaseFirstlastName(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
