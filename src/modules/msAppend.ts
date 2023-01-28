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
 * @param children Element(s) to append to the parent
 * @param parent The element to append to (defaults to document.body)
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
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        parent.appendChild(child);
      }
    });
  } else {
    parent.appendChild(children);
  }
};
