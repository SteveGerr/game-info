<template>
	<div class="games-app">
		<RouterView />
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.games-app {
	display: flex;
	justify-content: space-between;
	min-height: 100vh;
	background: url('assets/img/bg.webp');
	background-size: cover;
	background-repeat: no-repeat;

	@include text-body;
	color: $gray-400;
}
</style>
