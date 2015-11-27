var gulp   = require('gulp');
var Elixir = require('laravel-elixir');
var candor = require('gulp-candor');

/*
 |----------------------------------------------------------------
 | Candor Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Candor documents into their
 | HTML equivalents, ready for the real world!
 |
 */

Elixir.extend('candor', function(src, output, options) {
    new Elixir.Task('candor', function() {
        return gulp.src('resources/assets/candor/' + src)
            .pipe(candor(options))
            .on('error', function(e) {
                new Elixir.Notification().error(e, 'Candor Compilation Failed');
                this.emit('end');
            })
            .pipe(gulp.dest('resources/views/' + output))
            .pipe(new Elixir.Notification('Candor Compiled!'))
    })
    .watch('resources/assets/candor' + '/**/*.cdor');
});