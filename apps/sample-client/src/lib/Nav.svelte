<script lang="ts">
	import { Route, route } from "../utils/route";
	import { onDestroy } from "svelte";

	let currentRoute: number;
	const places = Object.entries(Route).filter(([_, i]) => typeof i === "number");
	const unsub = route.subscribe((r) => currentRoute = r);

	function updateRoute(r: number) {
		route.set(r);
	}

	onDestroy(unsub);
</script>

<div class="flex flex-col w-[22rem] h-[100vh] border-r-gbh-2 border-r items-center">
	<span class="py-6">@DexUtils/client</span>

	<div class="flex flex-col gap-4 w-full pl-8">
		{#each places as [place, index]}
			<button class="text-start"
			   class:active={currentRoute === index}
			   on:click={() => updateRoute(index)}>
				{place}
			</button>
		{/each}
	</div>
</div>

<style>
	.active {
		text-decoration: underline;
	}
</style>