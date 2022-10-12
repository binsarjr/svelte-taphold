# Svelte Tap Hold
Minimalistic tap and hold component for Svelte/SvelteKit, see [demo here](https://svelte.dev/repl/44fdd823b2004f089e997d5f6ba2fe58?version=3.50.1).

## Installation
```bash
// Using Yarn to install
yarn add --dev svelte-taphold

// or if you prefer NPM
npm install --save-dev svelte-taphold
```

## Usage Sample
```svelte
<script>
	import { taphold } from 'svelte-taphold'
	let ticks = 0 // show how many ticks button has been hold
	let interval = 100
	
	const onTapHold = () => ticks++
	const reset = () => ticks = 0
</script>

<h1>Tap and Hold {ticks}x</h1>
<label for="interval">Interval</label>
<input
	id="interval"
	placeholder="interval"
	bind:value={interval}
	type="number"/>

<!-- svelte-taphold on button -->
<button
	use:taphold={interval}
	on:taphold={onTapHold} >
	Tap and Hold
</button>

<button on:click={reset}>Reset Iteration</button>
```
