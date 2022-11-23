<script lang="ts">
	import { onMount } from "svelte";
	import Router, { replace } from "svelte-spa-router";

	import Nav from "./lib/Nav.svelte";
	import { pages, Route } from "./utils/route";

	onMount(() => replace(Route.Home));
</script>

<main class="flex overflow-x-hidden w-[100vw]">
	<Nav />
	<div class="flex flex-col w-full">
		<Router routes={pages} />
	</div>
</main>
