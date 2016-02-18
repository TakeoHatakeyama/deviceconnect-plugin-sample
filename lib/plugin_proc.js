console.log('module load.');

var express = require('express');

var plugin_proc = {};

plugin_proc.execute = function(req, res, params) {
  
  res.send('call plugin.execute : api: ' + req.params.api + ', profile: ' + req.params.profile + ', attribute: ' + req.params.attribute);
};

module.exports = plugin_proc;
