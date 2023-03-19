<template>
	<div class="sorting">
		<p>Sorting</p>
		<app-select
			:value="store.selectValue"
			:options="store.gamesCategory"
			@update:model-value="(e) => store.sortByCategory(e)"
		/>
	</div>
</template>

<script lang="ts" setup>
import AppSelect from '@/components/common/select/AppSelect.vue';
import { useGamesStore } from '@/stores/games';

const store = useGamesStore();
</script>

<style lang="scss" scoped></style>
