<template>
	<ul class="list">
		<list-item v-for="game in store.gamesList" :key="game.id" :item="game" />
	</ul>
</template>

<script lang="ts" setup>
import { useGamesStore } from '../../stores/games';
import ListItem from './ListItem.vue';

const store = useGamesStore();

const getGames = async () => {
	await store.getGames();
};

getGames();

</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 2rem;
	gap: 1rem;
	overflow: auto;
}
</style>
