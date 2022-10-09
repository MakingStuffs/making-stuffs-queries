import { msQuery } from "modules/queriers.module";

describe("Test the msQuery function", () => {
  test("Get an element which is non existent in the document - Should return null", () => {
    expect(msQuery(".non-existent")).toBe(null);
  });

  test("Get an element which is non existent in the specified parent - Should return null", () => {
    const parent = document.createElement("div");
    expect(msQuery(".non-existent", parent)).toBe(null);
  });

  test("Get the body element", () => {
    const bodyElem = document.querySelector("body");
    expect(msQuery()).toStrictEqual(bodyElem);
  });

  test("Get an element by element name", () => {
    const bodyElem = document.querySelector("body");
    expect(msQuery("body")).toStrictEqual(bodyElem);
  });

  test("Get an element by class", () => {
    const testElem = document.createElement("div");
    testElem.classList.add("class");
    document.body.append(testElem);
    expect(msQuery(".class")).toStrictEqual(testElem);
  });

  test("Get an element by id", () => {
    const testElem = document.createElement("div");
    testElem.setAttribute("id", "test-element");
    document.body.append(testElem);
    expect(msQuery("#test-element")).toStrictEqual(testElem);
  });

  test("Get an element by tag", () => {
    const testElem = document.createElement("div");
    testElem.setAttribute("href", "github.com");
    document.body.append(testElem);
    expect(msQuery('[href="github.com"]')).toStrictEqual(testElem);
  });

  test("Get a link from a passed div", () => {
    const testElem = document.createElement("div");
    const nestedElem = document.createElement("div");
    nestedElem.classList.add("test");
    testElem.append(nestedElem);
    expect(msQuery(".test", testElem)).toStrictEqual(nestedElem);
  });
});
