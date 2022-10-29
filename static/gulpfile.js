"use strict";

const gulp = require("gulp"),
  less = require("gulp-less"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  log = require("fancy-log"),
  uglify = require("gulp-uglify");

var themePath = ".";

gulp.task("babelJS", function () {
  return gulp
    .src([themePath + "/src/scripts/*.js"])
    .pipe(concat("script.js"))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      log("Babel!");
    });
});
gulp.task("uglifyJS", function () {
  return gulp
    .src([themePath + "/build/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      log("Ugly!");
    });
});
gulp.task("concatJS", function () {
  return gulp
    .src([themePath + "/src/scripts/plugins/*.js", themePath + "/build/*.js"])
    .pipe(concat("script.js"))
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      log("Concat!");
    });
});
gulp.task("lessCSS", function () {
  return gulp
    .src(themePath + "/src/less/style.less")
    .pipe(less())
    .on("end", function () {
      log("Less: Copilado");
    })
    .pipe(postcss([autoprefixer() /*cssnano()*/]))
    .on("end", function () {
      log("Js: Copilado!");
    })
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      log("Tudo ok!");
    });
});

gulp.task(
  "default",
  gulp.series(function (done) {
    gulp.watch(themePath + "/src/less/**/*.less", gulp.series("lessCSS"));
    gulp.watch(
      themePath + "/src/scripts/**/*.js",
      gulp.series("babelJS", /*"uglifyJS",*/ "concatJS")
    );
    done();
  })
);

gulp.task(
  "build",
  gulp.series("lessCSS", "babelJS", /*"uglifyJS",*/ "concatJS")
);
