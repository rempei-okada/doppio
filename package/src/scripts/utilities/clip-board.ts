/**
 * copy to clip board．
 * @param text text to copy
 */
export function copyToClipBoard(text: string) {
    const listener = (e: ClipboardEvent) => {
        if (!e.clipboardData) return;
        e.clipboardData.setData("text/plain", text);
        e.preventDefault();
        document.removeEventListener("copy", listener);
    };
    document.addEventListener("copy", listener);
    document.execCommand("copy");
}
