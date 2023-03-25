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

<style lang="scss" scoped></style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
