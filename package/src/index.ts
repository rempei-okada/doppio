import styles from "./index.scss";

export function load() {
    if (typeof document !== "undefined") {
        styles.use();
    }
}

export function unload() {
    if (typeof document !== "undefined") {
        styles.unuse();
    }
}

export * from "./scripts";


