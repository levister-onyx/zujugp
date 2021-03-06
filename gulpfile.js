const sass = require("gulp-sass")(require("node-sass"));
const gulp = require("gulp");
const themeKit = require("@shopify/themekit");

gulp.task("sass", function () {
  return gulp
    .src("sass/custom.scss")
    .pipe(sass())
    .pipe(gulp.dest("assets"));
});

gulp.task("watch", function () {
  gulp.watch("sass/*.scss", gulp.series("sass"));
  themeKit.command("watch", {
    allowLive: false,
    env: "development",
  });
});