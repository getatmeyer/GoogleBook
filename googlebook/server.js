var express = require ("express");
var mongoose = require ("mongoose");
var path = require ("path");

var db = require("./models");
console.log(db, "<----data is loading");

var port = 3000;


// contact to Mongoose DB
var MONGODB_URI = process.env.MONGODB_URI || "mongogb://localhost/googlebooks"