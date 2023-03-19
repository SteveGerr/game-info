<template>
	<multiselect
		:model-value="props.value"
		:options="props.options"
		:close-on-select="true"
		@update:model-value="updateValue"
		placeholder="Pick some"
		label="category"
		track-by="category"
		:preselect-first="true"
	>
		<template v-slot:selection="{ values, isOpen }"
			><span class="multiselect__single" v-if="values.length" v-show="!isOpen"
				>{{ values.length }} options selected</span
			>
		</template>
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
	options: Options[];
	value: string;
}>();

// eslint-disable-next-line no-undef
const updateValue = (e: globalThis.Event) => {
	emit('update:modelValue', e);
};
</script>

<style lang="scss" scoped></style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
