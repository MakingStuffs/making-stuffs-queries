/**
 * Function to return the first element matching the specified selector, within a specified element.
 * If no element is provided it will default to document.
 * @param selector The query selector to look for
 * @param element The element to query for children of (defaults to document)
 * @returns HTML node or null if nothing is found.
 */
export const msQuery = (
  selector = "body",
  element: HTMLElement | Document = document
): HTMLElement | null => {
  const result: HTMLElement | null = element.querySelector(selector);
  return result || null;
};
