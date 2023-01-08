/**
 * Parses arrays, objects and strings into a query string.
 */
export const encodeParams = (params: URLSearchParams, key: string, value: unknown) => {
	if (Array.isArray(value)) {
		if (!key.endsWith("[]") && value.length === 2) {
			return params.set(`${key}[${value[0]}]`, encodeValue(value[1]));
		}

		const arrayedKey = key.endsWith("[]") ? key : `${key}[]`;
		return value.forEach((val) => params.append(arrayedKey, encodeValue(val)));
	}

	if (typeof value === "object" && value !== null) {
		const first = Object.keys(value as object)[0];
		return params.set(`${key}[${first}]`, encodeValue((value as Record<string, unknown>)[first]));
	}

	return params.set(key, encodeValue(value));
}

export const encodeValue = (value: unknown): string => {
	if (value instanceof Date) {
		return value.toISOString();
	}

	if (typeof value === "string" || typeof value === "number") {
		return value.toString();
	}

	throw new Error(`Cannot encode value of type ${typeof value}`);
}