export function removeDuplicates<T>(arr: Array<T>) {
    return arr.filter((item: T, index: number) => arr.indexOf(item) === index);
}