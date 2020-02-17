const {sum} = require('./main.js')

test("mathFunc Should return sum of two values ", () => {
    expect(sum(1,2)).toBe(3);
});