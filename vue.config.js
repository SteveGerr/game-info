const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	publicPath: '/game-info/',
	transpileDependencies: true,

	css: {
		loaderOptions: {
			scss: {
				// eslint-disable-next-line quotes
				additionalData: `@import '@/assets/styles/index.scss';`,
			},
		},
	},
});
