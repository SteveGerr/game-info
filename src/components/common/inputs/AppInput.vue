<template>
	<div class="app-input">
		<label class="app-input__label" for="input">
			<input
				id="input"
				class="app-input__input"
				:value="modelValue"
				@input="updateValue"
				type="text"
				placeholder="Enter the game"
			/>
		</label>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
	modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

// eslint-disable-next-line no-undef
const updateValue = (e: globalThis.Event) => {
	const el = e.target as HTMLInputElement;
	emit('update:modelValue', el.value);
};
</script>

<style lang="scss" scoped>
.app-input {
	display: flex;

	&__label {
		width: 100%;
		border: 1px solid $gray-500;
	}

	&__input {
		width: 100%;
		padding: 0.7rem;
		background: $background-color;
		@include text(1.4rem, 1.3rem, 600);
		color: $gray-100;
		border: none;
		outline: none;

		@media (min-width: $bp-tablet) {
			padding: 0.6rem;
			@include text(1.8rem, 1.5rem, 600);
		}
	}
}
</style>
