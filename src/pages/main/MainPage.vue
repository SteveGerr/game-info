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
	grid-template-rows: repeat(2, auto) 1fr;
	grid-template-areas:
	'heading'
	'filters'
	'list';
	width: 100%;
	padding: 1.5rem;
	background-color: $background-color;

	@include text-body;
	color: $primary;

	@media (min-width: $bp-tablet) {
		grid-template-columns: auto;
		grid-template-rows: repeat(2, auto) 1fr;
		max-width: 85vw;
		height: 96vh;
		margin: 1rem auto;
		padding: 3rem;
		gap: 2rem;
		border-radius: 5rem;
	}

	&__heading {
		grid-area: heading;
		margin: 0 0 2rem 0;
		font-family: 'CirceGlyphs';
		@include text-h1-mobile;
		color: $primary;

		@media (min-width: $bp-tablet) {
			margin: 0;
			@include text-h1;
		}
	}

	&__list {
		display: grid;
		grid-area: list;
		justify-content: center;
	}

	&__filters {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-area: filters;
		align-items: start;
		margin: 0 0 2rem 0;
		gap: 1rem;

		@media (min-width: $bp-tablet) {
			grid-template-columns: repeat(2, 1fr);
			gap: 3rem;
		}
	}
}
</style>
