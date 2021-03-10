<script>
	export let name, party;
	const test = '테스트 일이삼사';
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>{test}</h2>
	<div>
		Test Start
		<div class="test">{ party }</div>
	</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	.test{font-size:16px;line-height:20px;color:red}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>