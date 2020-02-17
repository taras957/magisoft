const doMath = require('./math.js')

describe( 'Math functions', ()=>{
test("mathFunc Should return sum of two values ", () => {
  expect(doMath("1+2")).toBe(3);
  expect(doMath("9×2")).toBe(18);
  expect(doMath("10.2+2")).toBeCloseTo(12.2);
  expect(doMath("10÷2")).toBe(5);
  expect(doMath("10÷0")).toBe(0);
});
})


