const htmlmin = require('html-minifier-terser');

module.exports = eleventyConfig => {
    eleventyConfig.addTransform('html-minify', (content, path) => {
        if (path && path.endsWith('.html') && eleventyConfig.globalData.settings.isProduction) {
            return htmlmin.minify(content, {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                includeAutoGeneratedTags: false,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            });
        }
        return content;
    });
};