"use strict";
export const msQuery = (selector = 'body', elem = document) => {
    return elem.querySelector(selector);
}

export const msQueryAll = (selector = 'a', elem = document) => {
    return elem.querySelectorAll(selector);
}

export const msCreate = (elem = null, params = null) => {
    const elemType = !elem ? 'div' : elem;
    const newElem = document.createElement(elemType);
    if(params && typeof params === 'object') {
        const attributes = Object.keys(params);
        for(let i = 0; i < attributes.length; i++) {
            newElem.setAttribute(attributes[i], params[attributes[i]]);
        }
    }
    return newElem;
}