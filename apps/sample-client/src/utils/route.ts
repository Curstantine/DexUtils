import { writable } from "svelte/store";
import type { SvelteComponent } from "svelte";

import Home from "../pages/home.svelte";
import Manga from "../pages/Manga.svelte";
import Authors from "../pages/Authors.svelte";

export enum Route {
	Home,
	Manga,
	Authors,
}

export const pages: Record<Route, typeof SvelteComponent> = {
	[Route.Home]: Home,
	[Route.Manga]: Manga,
	[Route.Authors]: Authors,
};

export const route = writable(Route.Home);
