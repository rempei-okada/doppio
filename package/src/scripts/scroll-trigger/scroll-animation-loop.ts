import { ScrollOption } from "./scroll-trigger-option";
import { Vector2 } from "../numerics/vector2";

export type Direction = "bottom" | "top" | "right" | "left" | "none";

export default class ScrollAnimationLoop {
    position: Vector2 = { x: 0, y: 0 };
    direction: "bottom" | "top" | "right" | "left" | "none";
    lastAction: number;
    boundListener: () => void;
    callback: (position: Vector2, dilection: Direction) => void;
    directionChange: (direction: Direction) => void;
    stopCallback: () => void;
    startCallback: () => void;
    element: HTMLElement | Window;
    sustain = 300;
    running = false;

    /**
     * ScrollAnimationLoop constructor.
     * Starts a requestAnimationFrame loop as long as the user has scrolled the scrollElement. Stops after a certain time.
     *
     * @param options The options for the loop
     * @param callback The loop callback
     */
    constructor(options: ScrollOption) {
        const defaults = Object.assign(new ScrollOption({}), options);
        this.element = defaults.element;
        this.sustain = defaults.sustain;
        this.startCallback = defaults.start;
        this.stopCallback = defaults.stop;
        this.directionChange = defaults.directionChange;

        this.callback = defaults.callback;

        this.direction = "none";
        this.position = this.getPosition();
        this.lastAction = this.getTimestamp();

        this.startRun();

        this.boundListener = this.didScroll.bind(this);
        this.element.addEventListener("scroll", this.boundListener);
    }

    /**
     * Kills the loop forever
     */
    kill() {
        this.running = false;
        this.element.removeEventListener("scroll", this.boundListener);
    }

    /**
     * Callback when the user scrolled the element
     */
    private didScroll() {
        const newPosition = this.getPosition();

        if (this.position !== newPosition) {
            let newDirection = this.direction;

            if (newPosition.x !== this.position.x) {
                newDirection = newPosition.x > this.position.x ? "right" : "left";
            }
            else if (newPosition.y !== this.position.y) {
                newDirection = newPosition.y > this.position.y ? "bottom" : "top";
            }
            else {
                newDirection = "none";
            }

            if (newDirection !== this.direction) {
                this.direction = newDirection;
                if (typeof this.directionChange === "function") {
                    this.directionChange(this.direction);
                }
            }

            this.position = newPosition;
            this.lastAction = this.getTimestamp();
        }
        else {
            this.direction = "none";
        }

        if (!this.running) {
            this.startRun();
        }
    }

    /**
     * Starts the loop, calls the start callback
     */
    private startRun() {
        this.running = true;

        if (typeof this.startCallback === "function") {
            this.startCallback();
        }

        this.loop();
    }

    /**
     * Stops the loop, calls the stop callback
     */
    private stopRun() {
        this.running = false;
        this.stopCallback();
    }

    /**
     * The current position of the element
     * @returns position
     */
    private getPosition(): Vector2 {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const left = (this.element as any).pageXOffset || (this.element as any).scrollLeft || document.documentElement.scrollLeft || 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const top = (this.element as any).pageYOffset || (this.element as any).scrollTop || document.documentElement.scrollTop || 0;
        return { x: left, y: top };
    }

    /**
     * The current timestamp in ms
     * @returns {number}
     * @private
     */
    private getTimestamp() {
        return Number(Date.now());
    }

    /**
     * One single tick of the animation
     * @private
     */
    private tick() {
        this.callback(this.position, this.direction);

        const now = this.getTimestamp();

        if (now - this.lastAction > this.sustain) {
            this.stopRun();
        }

        if (this.running) {
            this.loop();
        }
    }

    /**
     * Requests an animation frame
     * @private
     */
    private loop() {
        const frame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).mozRequestAnimationFrame ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).msRequestAnimationFrame ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).oRequestAnimationFrame ||
            ((callback) => { setTimeout(callback, 1000 / 60); });

        frame(this.tick.bind(this));
    }
}