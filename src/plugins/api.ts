import api from '@/api/index';

interface GlobalPropertiesI {
	globalProperties: {
		$api: {
			games: {
				allGames(): any;
			};
		}
	}
}

interface AppI {
	config: GlobalPropertiesI
}

const apiPlugin = {
	install(app: AppI) {
		app.config.globalProperties.$api = api;
	},

};

export default apiPlugin;
