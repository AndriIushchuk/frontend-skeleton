var gulp = require("gulp"),
    protractor = require("gulp-protractor").protractor,
    path = require('../utils').path,
    error = require('../utils').error;

gulp.task('endtoend', function () {
   return gulp
       .src([])
       .pipe(protractor({
           configFile:path('root/protractor-conf.js', true),
           args: ['--baseUrl', 'http://127.0.0.1:8000']
       }))
       .on('error', error);
});