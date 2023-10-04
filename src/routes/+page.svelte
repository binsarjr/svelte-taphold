<script>
	import { taphold } from '../lib';

	let ticks = 0; // show how many ticks button has been hold
	let interval = 100;
	let size = 30;

	const onTapHold = () => ticks++;
	const reset = () => (ticks = 0);

	const bigger = () => size++;
	const smaller = () => size--;
	const resetSize = () => (size = 30);
</script>

<h1 style="font-size: {size}px" class="text-center my-3">Tap and Hold <span>{ticks}x</span></h1>
<div class="form-group mb-4">
  <label for="interval">Interval</label>
  <input id="interval" class="form-control" placeholder="interval" bind:value={interval} type="number" />
</div>

<!-- svelte-taphold on button -->
<div class="form-group mb-4">
  <button class="btn btn-primary" use:taphold={interval} on:taphold={onTapHold}> Tap and Hold </button>
  <button class="btn btn-danger" on:click={reset}>Reset Iteration</button>
</div>

<div class="form-group">
	<button class="btn btn-primary" use:taphold={200} on:taphold={bigger}>Bigger Me</button>
	 <button class="btn btn-primary" use:taphold={200} on:taphold={smaller}>Smaller Me</button>
	<button class="btn btn-danger" on:click={resetSize}>Reset Size</button>
</div>
