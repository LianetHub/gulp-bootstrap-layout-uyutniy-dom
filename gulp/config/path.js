import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./${rootFolder}`;
const srcFolder = `./src`;

export const path = {
	build: {
		files: `${buildFolder}/files/`,
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		cssLibs: `${buildFolder}/css/libs/`,
		normalize: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		jsLibs: `${buildFolder}/js/libs/`,
		images: `${buildFolder}/img/`,
		favicon: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		json: `${buildFolder}/json/`,
		php: `${buildFolder}/`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		scssLibs: `${srcFolder}/scss/libs/*.css`,
		normalize: `${srcFolder}/scss/reset.scss`,
		favicon: `${srcFolder}/fav/**/*`,
		js: `${srcFolder}/js/app.js`,
		jsLibs: `${srcFolder}/js/libs/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		json: `${srcFolder}/json/*.*`,
		php: `${srcFolder}/*.php`,
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		normalize: `${srcFolder}/scss/reset.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		json: `${srcFolder}/json/*.*`,
		fonts: `${srcFolder}/fonts/*.{ttf,otf,woff,woff2}`,
		php: `${srcFolder}/**/*.php`,

	},
	clean: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}