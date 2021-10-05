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

export const msAppend = (
  children: HTMLElement | HTMLElement[],
  parent: HTMLElement = document.body
): void => {
  if (!children) return;
  if (children instanceof HTMLElement === false && !Array.isArray(children))
    return;
  if (parent && parent instanceof HTMLElement === false) return;

  if (Array.isArray(children)) {
    for (let child of children) {
      if (child instanceof HTMLElement) {
        parent.append(child);
      } else {
        continue;
      }
    }
    if (parent.childElementCount === 0) return;
  } else {
    parent.appendChild(children);
  }
};
