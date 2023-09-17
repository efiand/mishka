import { Path } from './constants.js';
import clean from 'gulp-clean';
import gulp from 'gulp';
import processImages from 'gulp-libsquoosh';

const saveImages = () =>
	gulp
		.src(Path.Images.RASTERS)
		.pipe(clean())
		.pipe(processImages({ webp: { quality: 75 } }))
		.pipe(gulp.dest(Path.Images.PUBLIC));

export default saveImages;
