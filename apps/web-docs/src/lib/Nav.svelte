<script lang="ts">
	import { location, link } from "svelte-spa-router";
	import { Route } from "../utils/route";

	const places = [
		{ name: "Home", path: Route.Home },
		{
			name: "Packages",
			children: [
				{ name: "@dexutils/client", path: Route.Client },
				{ name: "@dexutils/typings", path: Route.Typings }
			]
		}
	];
</script>

<div class="flex flex-col w-[22rem] h-[100vh] border-r-gbh-2 border-r items-center">
	<span class="py-6 select-none">@DexUtils/web-docs</span>

	<div class="flex flex-col gap-4 w-full pl-8 select-none text-start">
		{#each places as place}
			{#if !place.children}
				<a use:link href={place.path} class:active={$location === place.path}>{place.name}</a>
			{:else}
				<div class="flex flex-col gap-2">
					<span>{place.name}</span>
					{#each place.children as child}
						<a use:link href={child.path} class="ml-8"
						   class:active={$location === child.path}>{child.name}</a>
					{/each}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
    .active {
        text-decoration: underline;
    }
</style>