<template>
	<ul v-if="store.filterGameByName.length" class="list">
		<list-item v-for="game in store.filterGameByName" :key="game.id" :item="game" />
	</ul>
	<p v-else>Nothing found</p>
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
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	justify-content: center;
	align-items: start;
	gap: 1rem;
	overflow: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;

	p {
		@include text(2rem, 3rem, 600);
		text-align: center;
		color: $primary;
	}
}
</style>
