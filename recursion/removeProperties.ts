/**
 * Takes an object or array of objects and returns the same type with the specified property removed.
 * @param {T} source
 * @param {string} key
 * @param {string[]} ignorePathKeys
 * @returns {T}
 */
const removeProperties = <T extends object | object[]>(
  source: T,
  key: string,
  ignorePathKeys: string[] = []
): T => {
  if (Array.isArray(source)) {
    return source.map(item => removeProperties(item, key)) as T;
  } else if (source && typeof source === 'object') {
    return Object.entries(source).reduce((acc, [ sourceKey, value ]) => {
      if (ignorePathKeys.includes(sourceKey)) {
        acc[ sourceKey ] = value;
      } else if (key !== sourceKey) {
        acc[ sourceKey ] = removeProperties(value, key);
      }
      return acc;
    }, {}) as T;
  }

  return source;
}
