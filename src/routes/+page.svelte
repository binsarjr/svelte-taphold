<script>
	import { taphold } from '../lib';

	let ticks = 0; // show how many ticks button has been hold
	let interval = 100;

	const onTapHold = () => ticks++;
	const reset = () => (ticks = 0);
</script>

<h1>Tap and Hold {ticks}x</h1>
<label for="interval">Interval</label>
<input id="interval" placeholder="interval" bind:value={interval} type="number" />

<!-- svelte-taphold on button -->
<button use:taphold={interval} on:taphold={onTapHold}> Tap and Hold </button>

<button on:click={reset}>Reset Iteration</button>
