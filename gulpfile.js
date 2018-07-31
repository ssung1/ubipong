var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", ["compile", "copy-html"], function () {
});

gulp.task("compile", function () {
  // in tsconfig.json, each source directory must be
  // explicitly named
  return tsProject.src()
      .pipe(tsProject())
      // "dist" is created automatically; no need to mkdir
      .js.pipe(gulp.dest("dist"));
});

gulp.task("copy-html", function() {
  // must have ./ (just like "require")
  // but can use ** glob
  return gulp.src("./src/**/*.html")
      .pipe(gulp.dest("dist"));
});

