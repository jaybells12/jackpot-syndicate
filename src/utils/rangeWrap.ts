/**
 * Wraps a number when it breaches the defined range.
 * @param {number} min The lower end of the range
 * @param {number} max The upper end of the range
 * @param {number} current The value to be wrapped
 * @returns {number} The wrapped value within the given range
 */

export const rangeWrap = (
  min: number,
  max: number,
  current: number
): number => {
  if (current >= min && current <= max) {
    return current
  }

  const range = max - min + 1

  while (current < min) {
    current += range
  }

  return current % range
}
