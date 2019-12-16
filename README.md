# Making Stuffs Queries
A simple lightweight library to make DOM querying and manipulation a little less laborious. The main purpose of this library is to save time from having to write out `document.someKindOfFunction` everytime you wish to interact with the DOM. 

I will continue adding to this repo as, and when, I create new functions which I think are beneficial. 

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

2. An object containing attributes in a key/value pair system (typeof `object`). To be used as if each key/value pair is being fed into the `setAttribute()` function. Note that hyphenated attributes are not *yet* supported, this will be added in the next update. 

### Example 1: Create a `<div></div>` with a class of 'test'
```
const elem = msCreate(null, { class: 'test' });
```

### Example 2: Create an anchor link with a href of 'github.com' and class of 'test'
```
const link = msCreate('a', { href: 'github.com', class: 'test' });
```