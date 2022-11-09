export function taphold(node: HTMLElement, interval = 200) {
    let intervalIds: any[] = [] // save interval id

    const handler = () => {
        node.dispatchEvent(new CustomEvent("taphold"));
    };

    const stopHandler = () => {
        intervalIds.map(id => clearInterval(id))
        intervalIds = []
    }

    const tapAndHold = (event: any) => {
        // right click
        if (event.which === 3) {
            return
        }
        handler() // tap
        intervalIds.push(setInterval(() => handler(), interval)) // hold


        // stop handler when document mouseup.
        document.addEventListener("mouseup", stopHandler, { once: true });
        document.addEventListener("touchend", stopHandler, { once: true });
    }


    if ('ontouchstart' in document.documentElement) {
        node.addEventListener("touchstart", tapAndHold)
    } else {
        node.addEventListener("mousedown", tapAndHold)
    }

    return {
        update(newInterval: number) {
            interval = newInterval;
        },
        destroy() {
            node.removeEventListener("mousedown", tapAndHold);
            node.removeEventListener("touchstart", tapAndHold);
        }
    };
}