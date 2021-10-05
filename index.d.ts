interface MSCreateParams {
  [key: string]: string;
}

interface ExtendedHTMLElement extends Element, HTMLElement {
  [key?: string]: string;
}
