
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const cleanCSS = require("gulp-clean-css");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");

const argv = require('yargs').argv; // Gets the arguments that you specifiy when you run gulp
const isProduction = (argv.production === undefined) ? false : true;
const isDebug = !isProduction;
const babelify = (argv.babelify === undefined) ? false : true;

const SCSS_DIR = "./public/stylesheets/scss";
const CSS_DIR = "./public/stylesheets";
const JS_DIR = "./views/src";

// Title used for system notifications
const notifyInfo = {
	title: "Gulp"
};

// Error notification settings for plumber
const plumberErrorHandler = {
	errorHandler: notify.onError({
		title: notifyInfo.title,
		icon: notifyInfo.icon,
		message: "Error: <%= error.message %>"
	})
};

function scss_compile(src, dest, mapsDest) {
	gulp.src(src)
	.pipe(plumber(plumberErrorHandler))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cleanCSS({
		debug: isDebug,
		compatibility: "ie9",
		inline: ["none"], // disables all inlining,
		sourceMaps: true,
	}), function(output) { console.log(output); })
	.pipe(sourcemaps.write(mapsDest))
	.pipe(gulp.dest(dest));
}

/**
 * @task scripts
 * compile all the JS into one minified file
 * @param babelify
 * Adds a transpiling step for compilation of ES6+ JavaScript
 */
gulp.task("scripts", function () {
	// set up the browserify instance on a task basis
	const b = browserify({
		entries: JS_DIR + "/main.js",
		debug: isDebug
	});

	if (babelify === true) {
		// Turn JavaScript into ES5
		b.transform("babelify", { presets: ["env"] });
	}

	return b.bundle()
		.on("error", notify.onError({
			message: 'Error: <%= error.message %>'
		}))
		.on("error", function (err) {
			console.error("Error:", err);
		})
		.pipe(source("./main.min.js"))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		// Add transformation tasks to the pipeline here.
		.pipe(uglify())
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./public/javascripts/"));
});

/**
* @task styles
* compile all style files from scss to css
*/
gulp.task("styles", function () {
	gulp.start("theme-styles");
});
/**
* @task theme-styles
* compile the WordPress theme
*/
gulp.task("theme-styles", function() {
	scss_compile(SCSS_DIR + "/style.scss", CSS_DIR, "./");
});

/**
* @task watch
* Recompile styles and scripts on file change
*/
gulp.task("watch", function () {
	gulp.watch([SCSS_DIR + "/**/*.scss"], ["styles"]);
	gulp.watch([JS_DIR + "/**/*.js"], ["scripts"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);