module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			["expo-router/babel"],
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
					alias: {
						tests: ['./tests/'],
						"@components": "./src/components",
						"@helpers": "./src/helpers",
						"@hooks": "./src/hooks",
						"@routes": "./src/routes",
						"@store": "./src/store",
						"@themes": "./src/themes",
						"@types": "./src/types",
						"@utils": "./src/utils",
						"@views": "./src/views"
					}
				}
			]
		]
	};
};
