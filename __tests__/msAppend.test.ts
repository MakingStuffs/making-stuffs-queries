import { msAppend, msCreate } from "../src";

describe("Test the msAppend function", () => {
  test("Pass an array of children without a parent -- Should append them to the document body", () => {
    const elem1 = msCreate(null, { id: "elem1" });
    const elem2 = msCreate(null, { id: "elem2" });
    msAppend([elem1, elem2]);
    expect(document.body.childNodes[0]).toStrictEqual(elem1);
    expect(document.body.childNodes[1]).toStrictEqual(elem2);
  });

  test("Pass a single elem without a parent -- Should append it to the document body", () => {
    const elem = msCreate(null, { id: "elem1" });
    msAppend(elem);
    expect(document.body.childNodes[0]).toStrictEqual(elem);
  });

  test("Pass a single elem with a parent -- Should append it to the parent", () => {
    const parent = msCreate(null, { id: "parent" });
    const child = msCreate(null, { id: "child" });
    msAppend(child, parent);
    expect(parent.childNodes[0]).toStrictEqual(child);
  });

  test("Pass an array of children with a parent -- Should append them to the parent", () => {
    const elem1 = msCreate(null, { id: "elem1" });
    const elem2 = msCreate(null, { id: "elem2" });
    const parent = msCreate(null, { id: "parent" });
    msAppend([elem1, elem2], parent);
    expect(parent.childNodes[0]).toStrictEqual(elem1);
    expect(parent.childNodes[1]).toStrictEqual(elem2);
  });
});
