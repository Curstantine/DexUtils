<script lang="ts">
	import { link } from "svelte-spa-router";
	import { Route } from "../utils/route.js";
</script>

<h1 class="text-4xl px-8 py-4"># DexUtils</h1>
<div class="flex flex-col px-8">
	<span>
		DexUtils is a collection of libraries/apps made to
		make interacting with MangaDex API easier.
	</span>

	<span class="mt-4">DX:</span>
	<ul class="list-disc ml-8">
		<li>
			<a use:link href={Route.Client}>@dexutils/client</a>
		</li>
		<li>
			<a use:link href={Route.Typings}>@dexutils/typings</a>
		</li>
	</ul>
</div>

