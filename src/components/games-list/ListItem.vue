<template>
	<li class="list-item">
		<router-link class="list-item__wrap" :to="`/details/${props.item.id}`">
			<p class="list-item__title">{{ props.item.title }}</p>
			<img class="list-item__image" :src="props.item.thumbnail" alt="photo" />
			<div class="list-item__genre">{{ props.item.genre }}</div>
			<div class="list-item__platform">{{ props.item.platform }}</div>
		</router-link>
	</li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import { GamesListI } from '@/interfaces/GamesI';

const props = defineProps<{
	item: GamesListI;
}>();
</script>

<style lang="scss" scoped>
.list-item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	border: 0.1rem solid $gray-200;
	border-radius: 0.8rem;
	background-color: $gray-100;

	&__wrap {
		width: 100%;
	}

	&__title {
		height: 6.2rem;
		margin: 1rem 0;
		@include text(2.8rem, 3rem, 600);
		color: $primary;
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		padding: 0 0 2rem 0;
	}

	&__genre,
	&__platform {
		@include text(2rem, 3rem, 500);
		color: $gray-400;
	}
}
</style>
