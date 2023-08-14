import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/pages/main/MainPage.vue';
import Details from '@/pages/details/GameDetails.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/details/:id',
		name: 'Details',
		component: Details,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			top: 0,
			behavior: 'smooth',
		};
},
});

export default router;
