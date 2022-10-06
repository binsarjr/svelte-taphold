# Svelte Tap Hold
A simple handle tap and hold action for Svelte/SvelteKit. [Demo](https://svelte.dev/repl/44fdd823b2004f089e997d5f6ba2fe58?version=3.50.1).



# Instalation
```bash
npm install --save-dev svelte-taphold
```

# How To Use
```svelte
<script>
	import {taphold} from 'svelte-taphold'
	let i=0
	let interval = 100
	
	const onTapHold = () => {
		i++
	}
	const reset = ()=>{
		i=0
	}
</script>

<h1>Tap and Hold {i}x</h1>
<label for="interval">Interval</label>
<input id="interval" placeholder="interval" bind:value={interval} type="number"/>
<button use:taphold={interval} on:taphold={onTapHold}>
	Tap and Hold
</button>
<button on:click={reset}>
	reset
</button>
```