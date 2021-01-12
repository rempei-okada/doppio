import { Direction } from "./scroll-animation-loop";
import { Trigger } from "./trigger";

export class ScrollOption {
    public readonly sustain = 300;
    public readonly element = window;
    public readonly callback: ((position: { x: number; y: number; }, direction: Direction) => void) = () => { };
    public readonly start = () => { };
    public readonly stop = () => { };
    public readonly directionChange: (direction: Direction) => void = () => { };

    /**
     * constructor
     * @param params initial value
     */
    constructor(params: Partial<ScrollOption>) {
        Object.assign(this, params);
    }
}

export interface Vector {
    x: (trigger: Trigger, rect: ClientRect, direction: Direction) => number;
    y: (trigger: Trigger, rect: ClientRect, direction: Direction) => number;
}

export interface Offset {
    viewport: Vector;
    element: Vector;
}

export interface ToggleClassPair {
    in: string[];
    out: string[];
}

export interface ToggleInfo {
    class: ToggleClassPair;
    callback: {
        in: (trigger: Trigger) => void | Promise<void>;
        out: (trigger: Trigger) => void | Promise<void>;
    };
}

export class TriggerOption {
    public once = false;
    public offset: Offset = {
        viewport: {
            x: () => 0,
            y: () => 0,
        },
        element: {
            x: () => 0,
            y: () => 0,
        }
    };

    public readonly toggle: ToggleInfo = {
        class: {
            in: ["visible"],
            out: ["invisible"]
        },
        callback: {
            in: () => { },
            out: () => { },
        }
    };

    /**
     * constructor
     * @param params initial value
     */
    constructor(params: Partial<TriggerOption>) {
        Object.assign(this, params);
    }
}