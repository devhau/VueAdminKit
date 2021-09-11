export const moduleToRouter = (modules) => {
    return Object.keys(modules).map((key) => {
        const item = modules[key];
        return {
            path: `/${key}`,
            name: key,
            component: item.page,
        }
    })
}