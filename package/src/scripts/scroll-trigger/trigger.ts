import { TriggerOption, ToggleInfo, Offset } from "./scroll-trigger-option";
import { Vector2 } from "../numerics/vector2";
import { Direction } from "./scroll-animation-loop";

export class Trigger implements TriggerOption {
    offset: Offset;
    toggle: ToggleInfo;
    once = true;
    visible = false;
    active = true;

    public readonly element: Element | HTMLElement;

    /**
     * Creates a new Trigger from the given element and options
     *
     * @param element
     * @param options
     */
    constructor(element: Element | HTMLElement, options: TriggerOption) {
        this.element = element;

        options = Object.assign(new TriggerOption({}), options);

        this.offset = options.offset;
        this.toggle = options.toggle;
        this.once = options.once;
        this.active = true;

        for (const className of this.toggle.class.out) {
            this.element.classList.add(className);
        }
    }

    /**
     * Checks if the Trigger is in the viewport, calls the callbacks and toggles the classes
     * @param parent
     * @param direction top, bottom, left, right
     * @returns If the element is visible
     */
    async checkVisibility(parent: HTMLElement | HTMLDocument | Window, direction: Direction) {
        if (!this.active) {
            return this.visible;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parentWidth = (parent as any).offsetWidth || (parent as any).innerWidth || 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parentHeight = (parent as any).offsetHeight || (parent as any).innerHeight || 0;

        const parentFrame = {
            left: 0,
            top: 0,
            right: parentWidth,
            bottom: parentHeight,
            width: parentWidth,
            height: parentHeight
        };
        const rect = this.getBounds();

        const visible = await this._checkVisibility(rect, parentFrame, direction);

        if (visible !== this.visible) {
            this.visible = visible;

            await this.toggleCallback();
            this.toggleClass();

            if (this.visible && this.once) {
                this.active = false;
            }
        }

        return visible;
    }

    /**
     * Get the bounds of this element
     * @return rect
     */
    getBounds(): ClientRect {
        return this.element.getBoundingClientRect();
    }

    /**
     * Get the calculated offset to place on the element
     * @param rect
     * @param direction top, bottom, left, right
     * @returns offset position
     * @private
     */
    private getElementOffset(rect: ClientRect, direction: Direction): Vector2 {
        const offset = { x: 0, y: 0 };

        offset.x = rect.width * this.offset.element.x(this, rect, direction);
        offset.y = rect.height * this.offset.element.y(this, rect, direction);
        return offset;
    }

    /**
     * Get the calculated offset to place on the viewport
     * @param parent parent position
     * @param direction top, bottom, left, right
     * @returns offset position
     * @private
     */
    private async getViewportOffset(parent: ClientRect, direction: Direction) {
        const offset = { x: 0, y: 0 };
        offset.x = parent.width * this.offset.viewport.x(this, parent, direction);
        offset.y = parent.height * this.offset.viewport.y(this, parent, direction);
        return offset;
    }

    /**
     * Check the visibility of the trigger in the viewport, with offsets applied
     * @param rect
     * @param parent
     * @param direction top, bottom, left, right
     * @returns is visible
     */
    private async _checkVisibility(rect: ClientRect, parent: ClientRect, direction: Direction) {
        const elementOffset = await this.getElementOffset(rect, direction);
        const viewportOffset = await this.getViewportOffset(parent, direction);

        let visible = true;

        if ((rect.left - viewportOffset.x) < -(rect.width - elementOffset.x)) {
            visible = false;
        }

        if ((rect.left + viewportOffset.x) > (parent.width - elementOffset.x)) {
            visible = false;
        }

        if ((rect.top - viewportOffset.y) < -(rect.height - elementOffset.y)) {
            visible = false;
        }

        if ((rect.top + viewportOffset.y) > (parent.height - elementOffset.y)) {
            visible = false;
        }

        return visible;
    }

    /**
     * Toggles the classes
     */
    private toggleClass() {
        if (this.visible) {
            for (const className of this.toggle.class.in) {
                this.element.classList.add(className);
            }
            for (const className of this.toggle.class.out) {
                this.element.classList.remove(className);
            }
        }
        else {
            for (const className of this.toggle.class.in) {
                this.element.classList.remove(className);
            }
            for (const className of this.toggle.class.out) {
                this.element.classList.add(className);
            }
        }
    }

    /**
     * Toggles the callback
     * @return async task
     */
    private toggleCallback(): void | Promise<void> {
        if (this.visible) {
            return this.toggle.callback.in(this);
        }
        else {
            return this.toggle.callback.out(this);
        }
    }
}