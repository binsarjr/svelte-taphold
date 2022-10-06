export function taphold(node, interval = 200) {
    let intervalIds = [] // save interval id

    const handler = () => {
        node.dispatchEvent(new CustomEvent("taphold"));
    };

    const stopHandler = () => {
        intervalIds.map(id => clearInterval(id))
        intervalIds = []
    }

    const tapAndHold = () => {
        handler() // tap
        intervalIds.push(setInterval(() => handler(), interval)) // hold


        // stop handler when document mouseup.
        document.addEventListener("mouseup", stopHandler, { once: true });
        document.addEventListener("touchend", stopHandler, { once: true });
    }


    node.addEventListener("mousedown", tapAndHold);
    node.addEventListener("touchstart", tapAndHold);

    return {
        update(newInterval) {
            interval = newInterval;
        },
        destroy() {
            node.removeEventListener("mousedown", tapAndHold);
            node.removeEventListener("touchstart", tapAndHold);
        }
    };
}
