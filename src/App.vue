<template>
  <div>123</div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import GamesApi from './api/GamesApi';
import { GamesI } from './interfaces/GamesI';

const games: Ref<GamesI[]> = ref([]);

const getAllGames = async () => {
	const res = await GamesApi.getAllGames();
	games.value = res.data;
};

getAllGames();
</script>

<style lang="scss">
</style>
