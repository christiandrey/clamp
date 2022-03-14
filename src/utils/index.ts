/**
 * Returns true if the provided value is falsy i.e. null or undefined.
 */
export function falsy(val: unknown) {
	return val === null || val === undefined;
}
