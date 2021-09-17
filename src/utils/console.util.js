function getConsole() {
    if (typeof window !== "undefined") {
        return window.console;
    }
    return {};
}
const console = getConsole();

export { console };