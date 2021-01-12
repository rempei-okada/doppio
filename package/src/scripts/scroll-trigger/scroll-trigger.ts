import { ScrollOption, TriggerOption } from "./scroll-trigger-option";
import { Trigger } from "./trigger";
import { TriggerCollection } from "./trigger-collection";
import ScrollAnimationLoop, { Direction } from "./scroll-animation-loop";
import { Vector2 } from "../numerics/vector2";

export class ScrollTrigger {
    private scrollOptions: ScrollOption;
    private collection: TriggerCollection;
    private loop: ScrollAnimationLoop | null;

    /**
     * Constructor for the scroll trigger
     * @param {DefaultOptions} [options=DefaultOptions] options
     */
    constructor(options?: Partial<ScrollOption>) {
        this.collection = new TriggerCollection();

        this.scrollOptions = Object.assign(options || {}, new ScrollOption({}));

        this.loop = new ScrollAnimationLoop({
            sustain: this.scrollOptions.sustain,
            element: this.scrollOptions.element,
            callback: (position, direction) => {
                this.scrollCallback(position, direction);
            },
            start: () => {
                this.scrollStart();
            },
            stop: () => {
                this.scrollStop();
            },
            directionChange: (direction: Direction) => {
                this.scrollDirectionChange(direction);
            }
        });
    }

    /**
     * Add elements as triger.
     * @param objects elements
     * @param options options.
     * @returns this instance
     */
    add(objects: HTMLElement[], options: TriggerOption) {
        for (const item of objects) {
            if (item instanceof Trigger) {
                this.collection.add(item);
                return this;
            }
            else {
                this.collection.add(new Trigger(item as HTMLElement, options));
            }
        }

        return this;
    }

    /**
     * Removes triggers
     * @param triggers triggers for registter
     * @returns this instance
     */
    remove(triggers: HTMLElement[] | NodeList | Trigger[]) {
        if (Array.isArray(triggers) && triggers.length && triggers[0] instanceof Trigger) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            triggers.forEach((x: any) => this.collection.remove(x));
            return this;
        }

        (triggers as HTMLElement[])
            .reduce((x, y) => [...x, ...this.collection.search(y)], [] as Trigger[])
            .forEach(this.collection.remove);
        return this;
    }

    /**
     * Callback for checking triggers
     * @param position  overlap position
     * @param direction direction
     * @private
     */
    private scrollCallback(position: Vector2, direction: Direction) {
        this.collection.call((trigger: Trigger) => {
            trigger.checkVisibility(this.scrollOptions.element, direction);
        });

        this.scrollOptions.callback(position, direction);
    }

    /**
     * When the scrolling started
     * @private
     */
    private scrollStart() {
        this.scrollOptions.start();
    }

    /**
     * When the scrolling stopped
     * @private
     */
    private scrollStop() {
        this.scrollOptions.stop();
    }

    /**
     * When the direction changes
     * @param direction direction
     */
    private scrollDirectionChange(direction: Direction) {
        this.scrollOptions.directionChange(direction);
    }

    /**
     * Reattaches the scroll listener
     */
    private listen() {
        if (this.loop) { return; }

        this.loop = new ScrollAnimationLoop({
            sustain: this.scrollOptions.sustain,
            element: this.scrollOptions.element,
            callback: (position, direction) => {
                this.scrollCallback(position, direction);
            },
            start: () => {
                this.scrollStart();
            },
            stop: () => {
                this.scrollStop();
            },
            directionChange: (direction: Direction) => {
                this.scrollDirectionChange(direction);
            }
        });
    }

    /**
     * Kills the scroll listener
     */
    private kill() {
        if (this.loop) this.loop.kill();
        this.loop = null;
    }
}