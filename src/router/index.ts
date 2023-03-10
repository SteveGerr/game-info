import { createWebHistory, createRouter } from 'vue-router';
import Details from '@/components/GameDetails.vue';
import Main from '@/pages/MainPage.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/details',
		name: 'Details',
		component: Details,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
