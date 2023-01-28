export interface MSCreateParams {
  [key: string]: string;
}

/**
 * Function to create a new HTML Element according to the provided string.
 * If no element parameter is provided it will default to a div container.
 * If the element parameter is provided but is not of the type string returns null.
 * If the params parameter is not of the true object type it will be ignored
 * If the innerHTML object key is provided the newly created element's innerHTML will be set
 * If a param key is provided with an underscore it will be converted to a hyphen
 *
 * @param element The element tagname to create (defaults to div)
 * @param params Key/value object of attributes to set on the element
 * @returns Newly created HTML node
 */
export const msCreate = (
  element: keyof HTMLElementTagNameMap | undefined = "div",
  params?: MSCreateParams
): HTMLElement => {
  // Element is not a string
  if (element && typeof element !== "string")
    throw new Error("Parameter 1 must be of type string");
  // Element has characters other than letters
  if (element && !/^[a-z]+$/.test(element))
    throw new Error("HTML tags can only contain letters");

  const elementType: keyof HTMLElementTagNameMap = !element ? "div" : element;

  const newElement: HTMLElement = document.createElement(elementType);

  // Ensure the params parameter is a true object and not an array or a falsey object
  if (typeof params === "object" && !!params && !Array.isArray(params)) {
    const attributes = Object.keys(params);
    for (let i = 0; i < attributes.length; i += 1) {
      // Check if the passed attribute matches the correct pattern
      if (/^[a-z]+((-|_){1}[a-z]+)?$/i.test(attributes[i])) {
        // If innerHTML safely set with insert adjacentHTML
        if (attributes[i] === "innerHTML") {
          newElement.insertAdjacentHTML("afterbegin", params[attributes[i]]);
        } else if (attributes[i] === "textContent") {
          // Set textContent
          newElement.textContent = params[attributes[i]];
        } else {
          // If the attribute has underscore(s) hyphenate them
          const attr = attributes[i].replace(/_/g, "-");
          // Set the attribute on the element
          newElement.setAttribute(attr, params[attributes[i]]);
        }
      }
    }
  }
  return newElement;
};
