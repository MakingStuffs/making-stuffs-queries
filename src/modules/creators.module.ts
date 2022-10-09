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
export const msCreate = (
  elem: string | null = "div",
  params?: MSCreateParams
): ExtendedHTMLElement => {
  // Elem is not a string
  if (elem && typeof elem !== "string")
    throw new Error("Parameter 1 must be of type string");
  // Elem has characters other than letters
  if (elem && !/^[a-z]+$/.test(elem))
    throw new Error("HTML tags can only contain letters");

  const elemType = !elem ? "div" : elem;

  const newElem: ExtendedHTMLElement = document.createElement(
    elemType
  ) as ExtendedHTMLElement;

  // Ensure the params parameter is a true object and not an array or a falsey object
  if (typeof params === "object" && !!params && !Array.isArray(params)) {
    const attributes = Object.keys(params);
    for (let i = 0; i < attributes.length; i += 1) {
      // Check if the passed attribute matches the correct pattern
      if (/^[a-z]+((-|_){1}[a-z]+)?$/i.test(attributes[i])) {
        // If innerHTML safely set with insert adjacentHTML
        if (attributes[i] === "innerHTML") {
          newElem.insertAdjacentHTML("afterbegin", params[attributes[i]]);
        } else {
          // IF the attribute has an underscore hyphenate it
          const attr = attributes[i].replace("_", "-");
          // Set the attribute on the element
          newElem.setAttribute(attr, params[attributes[i]]);
        }
      }
    }
  }
  return newElem;
};
