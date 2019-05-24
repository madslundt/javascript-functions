const merge = <T>(leftSide: T[], rightSide: T[]): T[] => {
    let result: T[] = [];
    let leftIndex: number = 0;
    let rightIndex: number = 0;

    const leftLength = leftSide.length;
    const rightLength = rightSide.length;

    while (leftIndex < leftLength && rightIndex < rightLength) {
        const leftItem = leftSide[leftIndex];
        const rightItem = rightSide[rightIndex];

        if (leftItem < rightItem) {
            result.push(leftItem);
            leftIndex++;
        } else {
            result.push(rightItem);
            rightIndex++;
        }
    }

    if (leftIndex < leftLength) {
        return [...result, ...leftSide.slice(leftIndex)];
    } else {
        return [ ...result, ...rightSide.slice(rightIndex)]
    }
}

const mergeSort = <T>(arr: T[]): T[] => {
    if (arr.length < 2) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, middleIndex);
    const rightSide = arr.slice(middleIndex);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}


export {
    mergeSort,
}
