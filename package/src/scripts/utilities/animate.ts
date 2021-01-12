import { delay } from "./delay";

/**
 * animate element
 * @param element animate element
 * @param property animate style propery
 * @param value style value
 * @param duration animation time (ms)
 * @param deleyTime animation delay time (ms)
 */
export async function animate(element: HTMLElement, property: string, value: string, duration: number, deleyTime = 0): Promise<void> {
    const tmp = element.style.transition;
    element.style.transition = "all " + duration + "ms";
    await delay(deleyTime);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (element.style as any)[property] = value;
    await delay(duration);
    element.style.transition = tmp;
}
