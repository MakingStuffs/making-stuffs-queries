# Making Stuffs Queries

![example workflow](https://github.com/makingstuffs/making-stuffs-queries/actions/workflows/tests.yml/badge.svg)

A simple lightweight library to make DOM querying and manipulation a little less laborious. The main purpose of this library is to save time from having to write out `document.someKindOfFunction` every time you wish to interact with the DOM.

In order to add this functionality to a simple static webpage simply include the build file in the _dist_ folder, or clone the repo and rebuild the files yourself.

To add the library to your npm project simply run `npm i -D making-stuffs-queries`.

I will continue adding to this repo as, and when, I create new functions which I think are beneficial. If you have any suggestions or find any bugs please feel free to report them or make a pull request.

Anyway, here are some examples:

## msQuery()

Replaces `document.querySelector()` and takes two optional arguments:

1. A selector (typeof `string`), to be used as you would use the standard syntax for `document.querySelector`. Defaults to `body`.

2. An element (typeof `HTMLElement`), to be passed if you wish to query a specific element. Defaults to `document`.

### Example 1: Calling an Element with a Class of 'example'

```
const example = msQuery('.example');
```

### Example 2: Calling an Element with an ID of 'example'

```
const example = msQuery('#example');
```

### Example 3: Calling an Element with a href of 'github.com'

```
const example = msQuery('[href="github.com"]');
```

### Example 4: Calling the First `<div></div>` on the Page

```
const example = msQuery('div');
```

## msQueryAll()

Replaces `document.querySelectorAll()` and takes one optional argument:

1. A selector (typeof `string`), to be used as you would with the standard syntax for `document.querySelectorAll`. Defaults to `a`.

### Example 1: Get all elements with a class of 'test'

```
const elemList = msQueryAll('.test');
```

## msCreate()

Replaces the default `document.createElement()` function and takes two optional arguments:

1. An element `tagName` (typeof `string`), used as you would use the standard syntax for the `document.createElement()` function. Defaults to `div`.

2. An object containing attributes in a key/value pair system (typeof `object`). To be used as if each key/value pair is being fed into the `setAttribute()` function.

If you would like to add hyphenated attributes to the created element, such as data attributes, you need to add them with an underscore. For example, if you wished to add `data-index` attribute you would pass an object in the second argument with the following: `{ data_index: 'an index' }`.

If you would like to set some content for the newly created element you can do so by simply adding an `innerHTML` key to the object passed for the second parameter. For example, to create a `<h1></h1>` element with a title of _Hey_ you would add the following to your options object: `{ innerHTML: 'Hey' }`.

### Example 1: Create a `<div></div>` with a class of 'test'

```
const elem = msCreate(null, { class: 'test' });
```

### Example 2: Create an anchor link with a href of 'github.com', data-role of 'button', class of 'test', and content of 'Anchor link'

```
const link = msCreate('a', { href: 'github.com', data_role: 'button', class: 'test', innerHTML: 'Anchor Link' });
```

## msAppend()

Replaces the default document.append() and takes two arguments:

1. Either an element (typeof `HTMLElement`) or an array of elements which are to be appended to the parent. Required.

2. An element (typeof `HTMLElement`) to which the provided child nodes will be appended. If no argument is provided the function will default to `document.body`

### Example 1: Append an array of elements to the document body

```
msAppend([element1, element2]);
```

### Example 2: Append an array of elements to a provided parent

```
msAppend([element1, element2], parentElement);
```

### Example 3: Append a single element to the document body

```
msAppend(element);
```

### Example 4: Append a single element to a passed parent element

```
msAppend(childElement, parentElement);
```
