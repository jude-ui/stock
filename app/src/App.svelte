<script>
	export let name, party;
	const test = '테스트 일이삼사';

  function handleClick() {
    console.log('test');
  }

</script>

<main>
	<h1>Hello { name }!</h1>
	<h2>{ test }</h2>
  <div>{ party }</div>

  <a href="#none" on:click|preventDefault={ handleClick } style="display:block;margin-top:10px;font-size:16px;line-height:20px;color:#000;text-decoration:underline">링크 주소링크 주소링크 주소링크 주소링크 주소링크 주소</a>
</main>

<style>

</style>