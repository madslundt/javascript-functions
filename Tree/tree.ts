interface ITree<T> {
    children?: ITree<T>[],
    level: number 
}

/**
 * Takes a list of items and returns a nested list in a tree structure where level is included.
 * @param {T[]} list - Input list containing a unique key and a parent key.
 * @param {string} keyId - Key for each item's unique id in the list.
 * @param {string} parentKeyId - Key for each item's parent id in the list. 
 * @param {string | number} parentId - Starting parent id. Null is allowed for root.
 * @param {number} maxLevel - Number of max levels. Levels greater than maxLevel is not nester further.
 * @param {number} level - The starting level. Default 0.
 */
const getListToTree = <T>(
    list: T[], 
    keyId: string, 
    parentKeyId: string, 
    parentId: string | number, 
    maxLevel: number, 
    level: number = 0
): ITree<T>[] => {
    let result: ITree<T>[] = [];

    for (const item of list) {
        if (item[parentKeyId] === parentId) {
            const rest = getListToTree<T>(list, keyId, parentKeyId, item[keyId], maxLevel, ++level);
            if (level > maxLevel) {
                rest.push({
                    ...item,
                    level: level
                });
                result = result.concat(rest)
            } else {
                result = result.concat({
                    ...item,
                    level: level,
                    children: rest,
                });
            }
        }
    }

    return result;
}

export {
    ITree,
    getListToTree
};
