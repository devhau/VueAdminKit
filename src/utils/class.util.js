
export const makeNumClass = (className, prex, Num, pr = '-') => {
    if (Num === 0) {
        return `${className} ${prex}${pr}auto`;
    }
    if (0 < Num && Num <= 12) {
        return `${className} ${prex}${pr}${Num}`;
    }
    return className;
}

export const makeTextClass = (className, prex, value, pr = '-') => {
    if (value !== '') {
        return `${className} ${prex}${pr}${value}`;
    }
    return className;
}
export const makeValueByData = (data, field, isDefaultData = true) => {
    if (data && field) {
        return data[field] ?? data;
    }
    if (isDefaultData) {
        return data;
    }
    return null;
}