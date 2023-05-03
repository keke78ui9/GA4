function findLast<T>(
    list: Array<T>
    , predicate: (value: T, index: number, obj: T[]) => unknown)
    : T | undefined {

    for (let index = list.length - 1; index >= 0; index--) {
        let currentValue = list[index];
        let predicateResult = predicate(currentValue, index, list);
        if (predicateResult) {
          return currentValue;
        }
    }        

    return undefined;
}

export {findLast};

