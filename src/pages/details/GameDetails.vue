<template>
	<div class="game-details">
		<h1 class="game-details__heading">
			{{ store.gameDetails.title }}
			<button-arrow class="game-details__back" />
		</h1>
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
	gap: 3rem;

	@media screen and (max-width: $bp-tablet) {
		max-width: 100%;
		margin: 5px;
	}

	&__back {
		position: absolute;
		top: 7rem;
		left: -8rem;
		background: $gray-100-opacity;
		padding: 5px;
		border-radius: 5px;

		@media screen and (max-width: $bp-tablet) {
			top: auto;
			bottom: -25px;
			left: 8px;

			&.button-arrow {
				max-width: 25px;
			}
		}

	}

	&__heading {
		position: relative;
		width: 100%;
		padding: 3rem;
		@include text-h1;
		color: $primary;
		font-family: 'CirceGlyphs';
		text-align: left;
		background-color: $gray-100-opacity;
		border-radius: 0.8rem;

		@media screen and (max-width: $bp-tablet) {
			padding: 5px;
			@include text(30px, 38px, 600);
		}
	}

	&__description {
		display: grid;
		gap: 5rem;
		padding: 3rem;
		background-color: $background-color;
		border-radius: 0.8rem;
		color: $gray-200;
	}
}
</style>
