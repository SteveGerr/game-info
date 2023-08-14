<template>
	<multiselect
		:model-value="props.selectValue"
		:options="props.options"
		:close-on-select="true"
		@update:model-value="updateValue"
		placeholder="Pick some"
		:preselect-first="true"
	>
	</multiselect>
</template>

<script lang="ts" setup>
import Multiselect from 'vue-multiselect';
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
	options: string[];
	selectValue: string;
}>();

// eslint-disable-next-line no-undef
const updateValue = (e: globalThis.Event) => {
	emit('update:modelValue', e);
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style lang="scss">
.multiselect__tags {
	border-radius: 0;
	border: 1px solid $gray-500;
	background: $background-color;
	@include text(1.8rem, 1.5rem, 600);
	color: $gray-100;
}

.multiselect__input {
	background: transparent;
	color: $gray-100;
}

.multiselect__content-wrapper {
	background: $background-color-options;
	color: $white;
}

.multiselect__option--highlight {
	background: $primary;
	&::after {
		background: $primary;
	}
}

.multiselect__placeholder {
	margin-bottom: 0px;
 padding-top: 5px;
	color: $select-placeholder;
}

.multiselect__select::before {
	top: 76%;
}

.multiselect__input, .multiselect__single {
	background: transparent;
	color: $select-placeholder;
}
.multiselect__single {
	line-height: 23px;
}
</style>
