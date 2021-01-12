import { Trigger } from "./trigger";
export class TriggerCollection {
    triggers: Trigger[] = [];

    /**
     * Adds one or multiple Trigger objects
     * @param trigger trigger for add
     */
    add(trigger: Trigger) {
        if (trigger instanceof Trigger) {
            // single
            return this.triggers.push(trigger);
        }
        else {
            console.error("Object added to TriggerCollection is not a Trigger. Object: ", trigger);
        }
    }

    /**
     * Removes one or multiple Trigger objects
     * @param triggers triggers for remove
     */
    remove(trigger: Trigger) {
        this.triggers = this.triggers.filter((x) => x !== trigger);
    }

    /**
     * Lookup one or multiple triggers by a query string
     * @param {string} selector
     * @returns triggers
     */
    query(selector: string) {
        return this.triggers.filter((trigger) => {
            const element = trigger.element;
            const parent = element.parentNode;
            if (!parent) { return false; }
            const nodes = [].slice.call(parent.querySelectorAll(selector));
            return nodes.indexOf(element as never) > -1;
        });
    }

    /**
     * Lookup one or multiple triggers by a certain HTMLElement or NodeList
     * @param element
     * @returns triggers
     */
    search(element: HTMLElement) {
        return this.triggers.filter((trigger) => trigger.element === element);
    }

    /**
     * Calls a function on all triggers
     * @param callback
     */
    call(callback: (trigger: Trigger) => void) {
        for (const trigger of this.triggers) {
            callback(trigger);
        }
    }
}
