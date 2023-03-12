<template>
	<div class="main-page">
		<h1 class="main-page__heading">Game finder</h1>
		<ListGames class="list" />
		<div class="filters"></div>
	</div>
</template>

<script lang="ts" setup>
import ListGames from '@/components/games-list/ListGames.vue';

</script>

<style lang="scss">
.main-page {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	grid-template-areas:
	"heading heading"
	"filters list";
	width: 100%;
	max-width: 55vw;
	height: 96vh;
	margin: 1rem auto;
	padding: 0 3rem;
	gap: 2rem;
	background-color: $secondary3;
	border-radius: 5rem;

	@include text-body;
	color: $primary;

	&__heading {
		grid-area: heading;
		@include text-h1;
		color: $primary;
	}

	.list {
		display: grid;
		grid-area: list;
		justify-content: flex-end;
	}

	.filters {
		display: grid;
		grid-area: filters;
	}
}
</style>
