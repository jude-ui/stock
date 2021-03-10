import App from './App.svelte';

const app = new App({
	target: document.querySelector('#app'),
	props: {
		name: 'world',
		party: 'party'
	}
});

export default app;