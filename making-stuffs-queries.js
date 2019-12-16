"use strict";
export const msQuery = (selector = 'body', elem = document) => {
    return elem.querySelector(selector);
}

export const msQueryAll = (selector = 'a', elem = document) => {
    return elem.querySelectorAll(selector);
}

