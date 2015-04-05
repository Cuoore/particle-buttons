var gulp = gulp || require('gulp'),
 requireDir  = require('require-dir'),
 higgsboson = higgsboson || require('./higgsboson.json');

requireDir(higgsboson.higgsparticles, { recurse: true });
