const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		autoprefixer({
			browsers: ['last 2 versions', '> 1%', 'Firefox ESR', 'ie > 9']
		})
	]
};