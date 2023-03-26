/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
import { defineStore } from 'pinia';
import { computed, ref, Ref } from 'vue';
import { GamesListI, GameI } from '../interfaces/GamesI';
import GamesApi from '../api/GamesApi';

export const useGamesStore = defineStore('games', () => {
	const gamesList: Ref<GamesListI[]> = ref([]);
	const gameDetails: Ref<GameI> = ref({} as GameI);
	const searchValue: Ref<string> = ref('');
	const selectValue: Ref<string> = ref('');
	const gamesCategories: Ref<string[]> = ref([]);

	const filterGameByName = computed(() => {
		const result = gamesList.value.filter(
			(game) => game.title.toLowerCase().includes(searchValue.value.toLowerCase())
			// eslint-disable-next-line function-paren-newline
		);
		return result;
	});

	const getGames = async () => {
		try {
			await GamesApi.getAllGames().then((res) => {
				const { data } = res;
				gamesList.value = data;

				const categories = [...new Set(data.map((game: GameI) => game.genre))];

				gamesCategories.value = categories as string[];
				gamesCategories.value.unshift(' ');
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

	const getGamesByCategory = async (genre: string) => {
		try {
			await GamesApi.getAllGames().then((res) => {
				const { data } = res;
				if (genre !== ' ') {
					gamesList.value = data.filter((game: GameI) => game.genre.includes(genre));
				} else {
					gamesList.value = data;
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getGamesByCategory,
		filterGameByName,
		gamesCategories,
		getGameDetails,
		selectValue,
		searchValue,
		gameDetails,
		gamesList,
		getGames,
	};
});
