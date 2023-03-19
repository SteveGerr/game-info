<template>
	<div class="main-page">
		<h1 class="main-page__heading">Game finder</h1>
		<ListGames class="main-page__list" />
		<div class="main-page__filters">
			<app-search />
			<app-sorting />
		</div>
	</div>
</template>

<script lang="ts" setup>
import ListGames from '@/components/games-list/ListGames.vue';
import AppSearch from '@/components/search/AppSearch.vue';
import AppSorting from '@/components/app-sorting/AppSorting.vue';
</script>

<style lang="scss">
.main-page {
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, auto) 1fr;
	grid-template-areas:
		'heading'
		'filters'
		'list';
	width: 100%;
	max-width: 65vw;
	height: 96vh;
	margin: 1rem auto;
	padding: 3rem;
	gap: 2rem;
	background-color: $background-color;
	border-radius: 5rem;

	@include text-body;
	color: $primary;

	&__heading {
		grid-area: heading;
		@include text-h1;
		font-family: 'CirceGlyphs';
		color: $primary;
	}

	&__list {
		display: grid;
		grid-area: list;
		justify-content: center;
	}

	&__filters {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-area: filters;
		align-items: start;
		gap: 3rem;
	}
}
</style>
