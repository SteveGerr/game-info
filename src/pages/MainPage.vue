<template>
	<div class="main-page">
		<ListGames />
	</div>
</template>

<script lang="ts" setup>
import ListGames from '@/components/ListGames.vue';

</script>

<style lang="scss">
.games-app {
	display: flex;
	justify-content: space-between;

	@include text-body;
	color: $primary
}
</style>
