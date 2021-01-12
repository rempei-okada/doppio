/**
 * Open window.
 * @param url URL
 * @param title window title
 * @param features window option
 */
export function openSubWindowAsync(url: string, title: string, features: string): Promise<void> {
    return new Promise(resolve => {
        const subWindow = window.open(url, title, features);
        if (!subWindow) throw new Error("Failed to open window.");

        const intervalId = setInterval(() => {
            if (subWindow.closed) {
                clearInterval(intervalId);
                resolve();
            }
        }, 500);
    });
}
