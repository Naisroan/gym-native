module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						tests: ['./tests/'],
						"@components": "./src/components",
						"@views": "./src/views",
						"@helpers": "./src/helpers",
						"@hooks": "./src/hooks",
						"@routes": "./src/routes",
						"@store": "./src/store",
						"@themes": "./src/themes",
						"@types": "./src/types",
						"@utils": "./src/utils"
					}
				}
			]
		]
	};
};
