/* eslint-disable no-return-assign */
import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import { GamesListI, GameI } from '../interfaces/GamesI';
import GamesApi from '../api/GamesApi';

export const useGamesStore = defineStore('games', () => {
	const gamesList: Ref<GamesListI[]> = ref([]);
	const gameDetails: Ref<GameI> = ref({} as GameI);

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

	return {
		getGameDetails,
		gameDetails,
		gamesList,
		getGames,
	};
});
