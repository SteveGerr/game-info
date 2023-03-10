<template>
	<div class="games-app">
		<RouterView/>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.games-app {
	display: flex;
	justify-content: space-between;

	@include text-body;
	color: $primary
}
</style>
