import { msCreate } from '../making-stuffs-queries';

describe('Test the msCreate function', () => {

    test('Check if the default works -- Should return a plain div', () => {
        const elem = msCreate();
        expect(elem instanceof HTMLElement).toBe(true);
    });

    test('Check if passing an element type works -- Should return an anchor link', () => {
        const link = msCreate('a');
        expect(link.tagName).toBe('A');
    });

    test('Check if passing an object for elem works -- Should just return the default div', () => {
        const elem = msCreate(null, { a: 'b' });
        expect(elem.tagName).toBe('DIV');
        expect(elem.classList.length).toBe(0);
    });

    test('Check if passing an array for elem works -- Should just return the default div', () => {
        const elem = msCreate(null, [1,2,3]);
        expect(elem.tagName).toBe('DIV');
        expect(elem.classList.length).toBe(0);
    });

    test('Check if passing an element for elem works -- Should just return null as it is not a string', () => {
        const elem = msCreate(document.createElement('div'));
        expect(elem).toBe(undefined);
    });

    test('Check if passing an object with a class works -- Should return a div with a class of test', () => {
        const elem = msCreate(null, { class: 'test' });
        expect(elem.classList.contains('test')).toBe(true);
        expect(elem instanceof HTMLElement).toBe(true);
        expect(elem.tagName).toBe('DIV');
    });

    test('Check if passing an object with a class and href works -- Should return an anchor link with a href of github.com and class of test', () => {
        const elem = msCreate('a', { class: 'test', href: 'https://github.com' });
        expect(elem instanceof HTMLElement).toBe(true);
        expect(elem.tagName).toBe('A');
        expect(elem.classList.contains('test')).toBe(true);
        expect(elem.href).toBe('https://github.com/');
    });

    test('Check that the object check works -- Should return a div with no attributes', () => {
        const elem = msCreate(null, [1,2,3,4]);
        expect(elem instanceof HTMLElement).toBe(true);
        expect(elem.tagName).toBe('DIV');
        expect(elem.classList.length).toBe(0);
    });

    test('Check that the object check works -- Should return a div with no attributes', () => {
        const elem = msCreate(null, () =>  'hey');
        expect(elem instanceof HTMLElement).toBe(true);
        expect(elem.tagName).toBe('DIV');
        expect(elem.classList.length).toBe(0);
    });

    test('Check that adding innerHTML works -- Should return a div with hello inside', () => {
        const elem = msCreate(null, { innerHTML: 'hello' });
        expect(elem instanceof HTMLElement).toBe(true);
        expect(elem.tagName).toBe('DIV');
        expect(elem.classList.length).toBe(0);
        expect(elem.innerHTML).toBe('hello');
    });

    test('Check that the adding underscored attributes resulted in hyphenated -- Should return a div with a dataset.index value of 2', () => {
        const elem = msCreate(null, {data_index: 2});
        expect(elem instanceof HTMLElement).toBe(true);
        expect(elem.tagName).toBe('DIV');
        expect(elem.dataset.index).toBe("2");
    });

});