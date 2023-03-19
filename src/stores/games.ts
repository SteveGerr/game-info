/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
import { defineStore } from 'pinia';
import { computed, ref, Ref } from 'vue';
import { GamesListI, GameI } from '../interfaces/GamesI';
import GamesApi from '../api/GamesApi';

export const useGamesStore = defineStore('games', () => {
	type SelectValue = {
		[x:string]: string
	}

	const gamesList: Ref<GamesListI[]> = ref([]);
	const gameDetails: Ref<GameI> = ref({} as GameI);
	const searchValue: Ref<string> = ref('');
	const selectValue: Ref<SelectValue> = ref({});

	const filterGameByName = computed(() => {
		const result = gamesList.value.filter(
			(game) => game.title.toLowerCase().includes(searchValue.value.toLowerCase())
			// eslint-disable-next-line function-paren-newline
		);
		return result;
	});

	const gamesCategory = computed(() => {
		// Create unique game category
		const category = [...new Set(gamesList.value.map((game) => game.genre))];
		// formate options list for select
		return category.map((cat) => {
			const options = {
				category: cat,
				value: cat,
			};
			return options;
		});
	});

	const getGames = async () => {
		try {
			await GamesApi.getAllGames().then((res) => {
				const { data } = res;
				gamesList.value = data;
			});
		} catch (error) {
			console.log(error);
		}
	};

	const getGameDetails = async (idGame: string) => {
		try {
			await GamesApi.getGame(idGame).then((res) => {
				gameDetails.value = res.data;
			});
		} catch (error) {
			console.log(error);
		}
	};

	const getGamesByCategory = async () => {
		try {
			await GamesApi.getGameByCategory('shooter');
		} catch (error) {
			console.log(error);
		}
	};

	const sortByCategory = (category: SelectValue) => {
		selectValue.value = category;
		getGamesByCategory();
	};

	return {
		getGamesByCategory,
		filterGameByName,
		getGameDetails,
		sortByCategory,
		gamesCategory,
		selectValue,
		searchValue,
		gameDetails,
		gamesList,
		getGames,
	};
});
