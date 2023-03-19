<template>
	<multiselect
		:value="value"
		:options="props.options"
		:multiple="true"
		:close-on-select="false"
		:clear-on-select="false"
		:preserve-search="true"
		@input="updateValue"
		placeholder="Pick some"
		label="name"
		track-by="name"
		:preselect-first="true"
	>
		<template v-slot:selection="{ values, isOpen }"
			><span class="multiselect__single" v-if="values.length" v-show="!isOpen"
				>{{ values.length }} options selected</span
			></template
		>
	</multiselect>
</template>

<script lang="ts" setup>
import Multiselect from 'vue-multiselect';
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['update:modelValue']);

type Options = {
	category: string;
	value: string;
};

const props = defineProps<{
	options: Options;
	value: Options[];
}>();

// eslint-disable-next-line no-undef
const updateValue = (e: globalThis.Event) => {
	const el = e.target as HTMLInputElement;
	emit('update:modelValue', el.value);
};
</script>

<style lang="scss" scoped></style>
