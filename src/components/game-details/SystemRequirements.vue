<template>
	<div class="system-requirements">
		<h1 class="system-requirements__heading">System requirements</h1>
		<ul class="system-requirements__list">
			<li
				v-for="(value, name, i) in d.item.minimum_system_requirements"
				:key="i"
				>
				<span class="system-requirements__key">{{	name }}: </span>
				<span class="system-requirements__value">{{	value }}</span>
			</li>
		</ul>
	</div>
</template>
<script lang="ts" setup>
import { GameI } from '@/interfaces/GamesI';
import { defineProps } from 'vue';

const d = defineProps<{
	item: GameI,
}>();
</script>

<style lang="scss" scoped>
	.system-requirements {
		display: grid;
		width: 100%;
		padding: 3rem;
		gap: 3rem;

		&__heading {
			@include text-h3;
			color: $primary;
		}

		&__list {
			display: grid;
			gap: 2rem;
		}

		&__value {
			color: $gray-500;
		}

		&__key {
			display: inline-block;
			width: 15rem;
		}
	}
</style>
