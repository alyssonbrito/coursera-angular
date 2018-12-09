var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/",
            //startPath: "/index.html",
            //open:true,
            //directory: true
        }
    });
});
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "src/",
            directory: true
        }
    });

    gulp.watch("src/**/*.html").on("change", reload);
    gulp.watch("src/**/*.js").on("change", reload);
    gulp.watch("src/**/*.css").on("change", reload);
});

gulp.task('default', ['browser-sync'] , function() {
    gulp.watch(['src/**/*.html', 'src/**/*.js', 'src/**/*.css'], reload);
});
