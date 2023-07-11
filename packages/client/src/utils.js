/**
 * Mutates a {@link URLSearchParams} object with the given values.
 *
 * NOTE: This is a side-effect function, it will mutate the given params object.
 *
 * @param {URLSearchParams} params
 * @param {Record<string, unknown>} values
 * @param {string[]} ignore
 *
 * @returns {void}
 *
 * @sse {@link encodeParam} for more information on how the params are encoded.
 */
export const encodeParams = (params, values, ignore = []) => {
	Object.entries(values)
		.filter(([key]) => !ignore.includes(key))
		.forEach(([key, value]) => encodeParam(params, key, value));
};

/**
 * Mutates a {@link URLSearchParams} object with the given key and value.
 *
 * ## Types
 * Arrays
 * 	- Any key that the value is an array will be appended with `[]`,
 * 	this is to allow keys to be destructed without escaping the `[]` characters.
 * 	- Example: `foo[]=bar&foo[]=baz`
 *
 * Object
 * 	- A key of `foo` with a value of `{ bar: "baz" }` will be encoded as `foo[bar]=baz`,
 *  other keys will be ignored.
 *
 * For everything else, the value will be encoded according to {@link encodeValue}.
 * For an example, the key `foo` with a value of `bar` will be encoded as `foo=bar`.
 *
 * @param {URLSearchParams} params
 * @param {string} key
 * @param {unknown} value
 *
 * @returns {void}
 */
export const encodeParam = (params, key, value) => {
	if (Array.isArray(value)) {
		const appendedKey = key.endsWith("[]") ? key : `${key}[]`;
		return value.forEach((val) => params.append(appendedKey, encodeValue(val)));
	}

	if (typeof value === "object" && value !== null) {
		const first = Object.keys(value)[0];
		return params.set(`${key}[${first}]`, encodeValue(value[first]));
	}

	return params.set(key, encodeValue(value));
};

/**
 * Encodes a value to a string.
 *
 * ## Types
 * - Date -> ISO String
 * - String | Number -> String
 *
 * @param {unknown} value
 * @returns {string}
 * @throws if the value is not supported.
 */
export const encodeValue = (value) => {
	if (value instanceof Date) {
		return value.toISOString();
	}

	if (typeof value === "string" || typeof value === "number") {
		return value.toString();
	}

	throw new Error(`Cannot encode value of type ${typeof value}`);
};
