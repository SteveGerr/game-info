<template>
	<div class="game-details-info">
		<div class="game-details-info__text">
			<div class="game-details-info__paragraph" v-for="(value, name, i) in info" :key="i">
				<span class="game-details-info__name">{{ name }}: </span>
				<span class="game-details-info__value">{{ value }}</span>
			</div>
			<a
				class="game-details-info__link"
				:href="d.item.game_url"
				target="_blank"
				rel="noopener noreferrer"
			>
				Home page
			</a>
		</div>
		<div class="game-details-info__image">
			<img :src="d.item.thumbnail" :alt="d.item.title" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { GameI } from '@/interfaces/GamesI';
import { defineProps } from 'vue';

const d = defineProps<{
	item: GameI;
}>();

interface InfoI {
	genre: string;
	platform: string;
	developer: string;
}

const info: InfoI = {
	genre: d.item.genre,
	platform: d.item.platform,
	developer: d.item.developer,
};
</script>

<style lang="scss" scoped>
.game-details-info {
	display: grid;
	grid-template-columns: auto auto;
	padding: 3rem;
	gap: 10rem;
	width: 100%;
	background-color: $background-color;
	border-radius: 0.8rem;

	@media screen and (max-width: $bp-tablet) {
		grid-template-columns: auto;
	}

	&__text {
		display: grid;
		gap: 1rem;
	}

	&__name {
		display: inline-block;
		width: 15rem;
		@include text(2rem, 1.2rem, 500);
		color: $gray-400;
	}

	&__value {
		@include text(2.4rem, 1.2rem, 500);
		font-style: italic;
		color: $gray-200;

		@media screen and (max-width: $bp-tablet) {
			@include text(1.4rem, 1rem, 500);
		}
	}

	&__image {
		img {
			border-radius: 3rem;
			width: 100%;
		}
	}

	&__link {
		text-decoration: underline;
		color: $secondary3;
	}
}
</style>
