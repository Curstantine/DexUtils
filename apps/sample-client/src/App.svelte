<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { type Manga } from "@dexutils/typings";
	import { getMangaByUUID } from "@dexutils/client";
	import { route, pages, type Route } from "./utils/route";
	import Nav from "./lib/Nav.svelte";

	let currentRoute: Route;
	const unsub = route.subscribe((r) => currentRoute = r);

	let manga: Manga;
	onMount(async () => {
		const resp = await getMangaByUUID("f9c33607-9180-4ba6-b85c-e4b5faee7192");
		manga = resp.data;
	});

	onDestroy(unsub);
</script>

<main class="flex overflow-x-hidden w-[100vw]">
	<Nav />
	<div class="flex flex-col w-full">
		<svelte:component this={pages[currentRoute]} />
	</div>
</main>
