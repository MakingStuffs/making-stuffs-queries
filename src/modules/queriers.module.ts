/**
 * Function to return the first element matching the specified selector, within a specified element.
 * If no element is provided it will default to document.
 * @param selector
 * @param elem
 * @returns HTML node or null if nothing is found.
 */
export const msQuery = (
  selector: string = "body",
  elem: HTMLElement | Document = document
): HTMLElement | null => {
  const element: HTMLElement | null = elem.querySelector(selector);
  return element ? element : null;
};

/**
 * Function to return all elements matching the specified selector within a specified element.
 * Default behaviour returns all a elements within the document element.
 * @param selector
 * @param elem
 * @returns HTML node list or null if nothing is found.
 */
export const msQueryAll = (
  selector: string = "a",
  elem: HTMLElement | Document = document
): Element[] | [] => {
  const nodeList: NodeListOf<Element> = elem.querySelectorAll(selector);
  return nodeList.length > 0 ? [...nodeList] : [];
};
