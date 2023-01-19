export default function chunkify<T>(array: Array<T>, chunkSize: number): Array<Array<T>> {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
    }