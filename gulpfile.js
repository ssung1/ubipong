var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", ["compile"], function () {
});

gulp.task("compile", function () {
  return tsProject.src()
      .pipe(tsProject())
      // "dist" is created automatically; no need to mkdir
      .js.pipe(gulp.dest("dist"));
});
