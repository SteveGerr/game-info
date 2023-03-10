/* eslint-disable no-return-assign */
import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import { GamesListI } from '../interfaces/GamesI';
import GamesApi from '../api/GamesApi';

export const useGamesStore = defineStore('games', () => {
	const gamesList: Ref<GamesListI[]> = ref([]);

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

	return {
		gamesList,
		getGames,
	};
});
