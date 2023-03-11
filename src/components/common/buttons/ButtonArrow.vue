<template>
	<RouterLink class="button-arrow" to="/">
		<img src="@/assets/img/arrow.png" alt="orange arrow">
	</RouterLink>
</template>

<style lang="scss" scoped>
	.button-arrow {
		max-width: 4rem;

		img {
			width: 100%;
			object-fit: contain;
			transform: rotate(180deg);
		}
	}
</style>
