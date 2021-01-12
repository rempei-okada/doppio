/**
 * delay
 * @param msec milliseconds
 */
export function delay(msec: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, msec));
}