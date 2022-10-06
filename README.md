# Svelte Tap Hold
A simple action for handle tap and hold action for Svelte/SvelteKit.

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