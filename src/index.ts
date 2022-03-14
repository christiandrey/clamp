import {falsy} from './utils';

/**
 * Clamps a value to a lower and upper limit.
 */
export function clamp(lower: number, number: number, upper: number) {
	if (number < lower) {
		return lower;
	}
	if (number > upper) {
		return upper;
	}
	return number;
}

/**
 * Clamps a value to a lower and upper limit. Loops back to the lower
 * limit when the value exceeds the upper limit and vice versa.
 */
export function loopClamp(lower: number, number: number, upper: number) {
	if (typeof number !== 'number') {
		return;
	}

	return number < lower ? upper : number > upper ? lower : number;
}

/**
 * Clamps a value to a lower and upper limit. The cycle starts all over from
 * the lower limit when the value exceeds the upper limit and vice versa.
 */
export function continuousClamp(lower: number, number: number, upper: number): number {
	if ([lower, number, upper].some(falsy) || lower > upper) {
		return number;
	}

	if (number >= lower && number <= upper) {
		return number;
	}

	const between = (n: number) => n >= lower && n <= upper;
	const base = upper - lower + 1;
	const direction = Math.sign(number - lower);

	while (!between(number)) {
		number = number - base * direction;
	}

	return number;
}
