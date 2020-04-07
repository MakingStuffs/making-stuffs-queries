"use strict";

import { msQueryAll } from '../making-stuffs-queries';

describe('Test the msQueryAll function', () => {

    test('Test querying non-existent elements in the document body - should return null', () => {
        expect(msQueryAll('a')).toBe(null);
    });
    
    test('Test querying non-existent elements in a specified parent - should return null', () => {
        const parent = document.createElement('div');
        expect(msQueryAll('a', parent)).toBe(null);
    });

    test('Test the default empty call -- Should return all anchor links', () => {
        for(let i = 0; i < 5; i++) {
            const link = document.createElement('a');
            document.body.append(link);
        }
        const linkList = document.querySelectorAll('a');
        expect(msQueryAll()).toStrictEqual(linkList);
    });

    test('Test that function can get all specified children within a parent - Should return a list of anchors', () => {
        const parent = document.createElement('div');
        for(let i = 0; i < 5; i++) {
            const link = document.createElement('a');
            parent.appendChild(link);
        }
        const linkList = parent.querySelectorAll('a');
        expect(msQueryAll('a', parent)).toStrictEqual(linkList);
    });

});