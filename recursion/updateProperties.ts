/**
 * Takes an object or array of objects and returns the same type with the specified property updated.
 * @param {T} source
 * @param {string} key
 * @param {(oldValue: string | number | boolean | null) => string | number | boolean | null} changeFunc
 * @returns {T}
 */
const updateProperties = <T extends object | object[]>(source: T, key: string, changeFunc: (oldValue: string | number | boolean | null) => string | number | boolean | null): T => {
    if (Array.isArray(source)) {
        return source.map(item => updateProperties(item, key, changeFunc)) as T;
    } else if (source && typeof source === 'object') {
        return Object.entries(source).reduce((acc, [sourceKey, value]) => {
                if (key === sourceKey) {
                    acc[sourceKey] = changeFunc(value);
                } else {
                    acc[sourceKey] = updateProperties(value, key, changeFunc);
                }
                return acc;
            }, {}) as T;
    }

    return source;
}
