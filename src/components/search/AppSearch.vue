<template>
	<div class="search">
		<span>Search</span>
		<app-input :model-value="value" @change="change" />
	</div>
</template>

<script lang="ts" setup>
import { useGamesStore } from '@/stores/games';
import { ref, Ref } from 'vue';
import AppInput from '../common/inputs/AppInput.vue';

const value: Ref<string> = ref('');

const store = useGamesStore();

// eslint-disable-next-line no-undef
const change = (e: globalThis.Event) => {
	const el = e.target as HTMLInputElement;
	store.searchValue = el.value;
};
</script>

<style lang="scss" scoped>
.search {
	display: flex;
	flex-direction: column;
}
</style>
