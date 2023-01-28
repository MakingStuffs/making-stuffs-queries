/**
 * Function to return all elements matching the specified selector within a specified element.
 * Default behaviour returns all a elements within the document element.
 * @param selector The CSS query (defaults to "a")
 * @param element The element to query (defaults to document)
 * @returns HTML node list or an empty array if nothing is found.
 */
export const msQueryAll = (
  selector = "a",
  element: HTMLElement | Document = document
): Element[] | [] => {
  const nodeList: Element[] = Array.from(element.querySelectorAll(selector));
  return nodeList.length > 0 ? [...nodeList] : [];
};
