<template>
	<div class="sorting">
		<p>Sorting</p>
		<app-select
			:selectValue="store.selectValue"
			:options="store.gamesCategories"
			@update:model-value="(e) => store.getGamesByCategory(e)"
		/>
	</div>
</template>

<script lang="ts" setup>
import AppSelect from '@/components/common/select/AppSelect.vue';
import { useGamesStore } from '@/stores/games';

const store = useGamesStore();
</script>

<style lang="scss" scoped></style>
