"use strict";

const gulp = require("gulp"),
  less = require("gulp-less"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  log = require("fancy-log"),
  uglify = require("gulp-uglify"),
  tailwindcss = require("tailwindcss");

var themePath = ".";

gulp.task("babelJS", function () {
  return gulp
    .src([themePath + "/src/scripts/*.js"])
    .pipe(concat("script.js"))
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      //log("Babel!");
    });
});
gulp.task("uglifyJS", function () {
  return gulp
    .src([themePath + "/build/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      // log("Ugly!");
    });
});

gulp.task("concatJS", function () {
  return gulp
    .src([themePath + "/src/scripts/**/*.js", themePath + "/build/*.js"])
    .pipe(concat("script.js"))
    .pipe(gulp.dest(themePath + "/build"))
    .on("end", function () {
      log("JS: copilado");
    });
});

gulp.task("lessCSS", function () {
  return (
    gulp
      // COPILA LESS
      .src(themePath + "/src/less/style.less")
      .pipe(less())
      .on("end", function () {
        //log("Less: Copilado");
      })
      // COPILA TAILWIND
      .pipe(
        postcss([tailwindcss("tailwind.config.js"), require("autoprefixer")])
      )
      .on("end", function () {
        //log("Tailwind: Copilado!");
      })
      // COPILA JS
      .pipe(postcss([autoprefixer() /*cssnano()*/]))
      .on("end", function () {
        //log("Postcss: Copilado!");
      })
      .pipe(gulp.dest(themePath + "/build"))
      .on("end", function () {
        log("CSS / Less / Tailwind: copilados");
      })
  );
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

gulp.task("build", gulp.series("lessCSS", "babelJS", "uglifyJS", "concatJS"));
