"use strict";

/**
 * Function to return the first element matching the specified selector, within a specified element.
 * If no element is provided it will default to document.
 * @param selector 
 * @param elem 
 * @returns HTML node or null if nothing is found.
 */
export const msQuery = (selector = 'body', elem = document) => {
    const element = elem.querySelector(selector);
    return element ? element : null;
}

/**
 * Function to return all elements matching the specified selector within a specified element.
 * Default behaviour returns all a elements within the document element.
 * @param selector 
 * @param elem 
 * @returns HTML node list or null if nothing is found.
 */
export const msQueryAll = (selector = 'a', elem = document) => {
    const nodeList = elem.querySelectorAll(selector)
    return nodeList[0] ? nodeList : null;
}

/**
 * Function to create a new HTML Element according to the provided string.
 * If no elem parameter is provided it will default to a div container.
 * If the elem parameter is provided but is not of the type string returns null.
 * If the params parameter is not of the true object type it will be ignored
 * If the innerHTML object key is provided the newly created element's innerHTML will be set
 * If a param key is provided with an underscore it will be converted to a hyphen
 * 
 * @param elem 
 * @param params 
 * @returns Newly created HTML node
 */
export const msCreate = (elem = 'div', params = null) => {

    if(elem && typeof elem !== 'string') return;

    const elemType = !elem ? 'div' : elem;

    const newElem = document.createElement(elemType);

    // Ensure the params parameter is a true object and not an array or a falsey object
    if (typeof params === 'object' && !!params && !Array.isArray(params)) {

        const attributes = Object.keys(params);

        for (let i = 0; i < attributes.length; i++) {
            if(attributes[i] === 'innerHTML') {
                newElem.innerHTML = params[attributes[i]];
            } else {
                const attr = attributes[i].replace('_', '-');
                newElem.setAttribute(attr, params[attributes[i]]);
            }
        }

    }
    return newElem;
}

/**
 * Function to append the element(s) passed as the children parameter to the element passed
 * as the parent parameter.
 * If children parameter is empty or it is not one of the types HTML element or Array the 
 * function will return.
 * If the parent parameter is not of the type HTML Element the function will return.
 * If no parameter is provided for the parent the children will be appended to the document body.
 * If children is an array and it contains an index which is not of the type HTML Element it will 
 * be skipped.
 * Function always returns undefined.
 * @param children 
 * @param parent 
 * @returns undefined;
 */

export const msAppend = (children = null, parent = document.body) => {
    if (!children) return;
    if (!children instanceof HTMLElement && !Array.isArray(children)) return;
    if (parent && !parent instanceof HTMLElement) return;
    if (Array.isArray(children)) {
        for(let child of children) {
            if(child instanceof HTMLElement) {
                parent.append(child);
            } else {
                continue;
            }
        }
        if(parent.childElementCount === 0) return;
    } else {
        parent.appendChild(children);
    }
}