import type { RouteDefinition } from "svelte-spa-router";

import Home from "../pages/Home.svelte";
import Client from "../pages/Client.svelte";
import Typings from "../pages/Typings.svelte";

export enum Route {
	Home = "/home",
	Typings = "/packages/typings",
	Client = "/packages/client",
}

export const pages: RouteDefinition = {
	[Route.Home]: Home,
	[Route.Client]: Client,
	[Route.Typings]: Typings,
};