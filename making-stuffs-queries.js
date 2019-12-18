"use strict";
export const msQuery = (selector = 'body', elem = document) => {
    return elem.querySelector(selector);
}

export const msQueryAll = (selector = 'a', elem = document) => {
    return elem.querySelectorAll(selector);
}

export const msCreate = (elem = null, params = null) => {
    const elemType = !elem || typeof elem !== 'string' ? 'div' : elem;
    const newElem = document.createElement(elemType);
    if (typeof params === 'object' && !!params && !Array.isArray(params)) {
        const attributes = Object.keys(params);
        for (let i = 0; i < attributes.length; i++) {
            newElem.setAttribute(attributes[i], params[attributes[i]]);
        }
    }
    return newElem;
}

export const msAppend = (children = null, parent = document.body) => {
    if (!children || !children instanceof HTMLElement || !Array.isArray(children)) return;
    if (Array.isArray(children)) {
        for(let child of children) {
            if(child instanceof HTMLElement) {
                parent.append(child);
            } else {
                return;
            }
        }
    } else {
        return parent.append(children);
    }
}