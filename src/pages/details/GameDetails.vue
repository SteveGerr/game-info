<template>
	<div class="game-details">
		<button-arrow class="game-details__back" />
		<h1 class="game-details__heading">{{	store.gameDetails.title }}</h1>
		<game-details-info :item="store.gameDetails" />
		<div class="game-details__description" v-html="store.gameDetails.description"></div>
		<system-requirements :item="store.gameDetails" />
	</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import GameDetailsInfo from '@/components/game-details/GameDetailsInfo.vue';
import buttonArrow from '@/components/common/buttons/ButtonArrow.vue';
import SystemRequirements from '@/components/game-details/SystemRequirements.vue';
import { useGamesStore } from '../../stores/games';

const store = useGamesStore();
const route = useRoute();
const gameId = route.params.id;

const getGame = async (id: any) => {
	await store.getGameDetails(id);
};

getGame(gameId);
</script>

<style lang="scss" scoped>
	.game-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 80vw;
		margin: 5rem auto;
		position: relative;

		&__back {
			position: absolute;
			top: 7rem;
			left: -8rem;
		}

		&__heading {
			width: 100%;
			padding: 3rem;
			@include text-h1;
			color: $primary;
			text-align: left;
		}

		&__description {
			display: grid;
			gap: 5rem;
			padding: 3rem;
		}
	}
</style>
