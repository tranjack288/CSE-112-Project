/**
 * @param {int} min Minimum int value (inclusive)
 * @param {int} max Maximum int value (exclusive)
 * @returns {int} Random int value between min and max
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

