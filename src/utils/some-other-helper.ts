/**
 * Utility functions for the WaveWobble library.
 */

/**
 * Converts a frequency value from Hertz to Megahertz.
 * @param hertz - The frequency in Hertz.
 * @returns The frequency in Megahertz.
 */
export function hertzToMegahertz(hertz: number): number {
    return hertz / 1e6;
}

/**
 * Converts a frequency value from Megahertz to Hertz.
 * @param megahertz - The frequency in Megahertz.
 * @returns The frequency in Hertz.
 */
export function megahertzToHertz(megahertz: number): number {
    return megahertz * 1e6;
}

/**
 * Calculates the phase difference between two signals.
 * @param signal1 - The first signal value.
 * @param signal2 - The second signal value.
 * @returns The phase difference in radians.
 */
export function phaseDifference(signal1: number, signal2: number): number {
    return Math.atan2(Math.sin(signal1 - signal2), Math.cos(signal1 - signal2));
}

/**
 * Linearly interpolates between two values based on a third parameter.
 * @param x0 - The first value.
 * @param x1 - The second value.
 * @param t - The interpolation parameter (should be between 0 and 1).
 * @returns The interpolated value.
 */
export function lerp(x0: number, x1: number, t: number): number {
    return (1 - t) * x0 + t * x1;
}

/**
 * Clamps a value between a minimum and maximum value.
 * @param value - The input value.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}
