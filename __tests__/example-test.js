const example = function (a,b) {
    return a + b;
}

describe('example', () => {
    it('returns null', () => {
        expect(example(2, 3)).toEqual(5);
    });
});