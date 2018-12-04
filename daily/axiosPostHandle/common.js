export function isObject(obj) {
    return obj && typeof obj === 'object';
}

export function isArray(arr) {
    return arr instanceof Array;
}

export function isString(str) {
    return typeof str === 'string';
}

export function isFunction(func) {
    return typeof func === 'function';
}

export function isFormData(form) {
    return form instanceof FormData;
}

// 对象属性复制
export function objectAssign(dest, source) {
    if (Object.assign) {
        return Object.assign(dest, source);
    }
    for (var key in source) {
        dest[key] = source[key]
    }
    return dest;
}

// 字符串去空格
export function strTrim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}
