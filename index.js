var gulp   = require('gulp');
var Elixir = require('laravel-elixir');

/*
 |----------------------------------------------------------------
 | Candor Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Candor documents into their
 | HTML equivalents, ready for the real world!
 |
 */

Elixir.extend('candor', function(src, output) {
    config.html.candor = {
        folder: 'candor',
        outputFolder: 'resources/views',
    };

    new Elixir.Task('candor', function() {
        var paths = prepGulpPaths(src, output);

        return gulp.src(paths.src.path)
            .pipe(candor())
            .on('error', function(e) {
                new Elixir.Notification().error(e, 'Candor Compilation Failed');
                this.emit('end');
            })
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Elixir.Notification('Candor Compiled!'))
    })
    .watch(config.get('assets.html.candor.folder') + '/**/*.cdor');
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, output) {
    return new Elixir.GulpPaths()
        .src(src, config.get('assets.html.candor.folder'))
        .output(output || config.get('public.html.candor.outputFolder'), 'index.blade.php');
};
