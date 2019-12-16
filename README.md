# Making Stuffs Queries
A simple lightweight library to make DOM querying and manipulation a little less laborious. The main purpose of this library is to save time from having to write out `document.someKindOfFunction` everytime you wish to interact with the DOM. 

I will continue adding to this repo as, and when, I create new functions which I think are beneficial. 

Anyway, here are some examples:

## msQuery
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