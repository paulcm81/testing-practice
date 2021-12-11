// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function sum() {

}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the sum of two numbers.

  const num1 = 5;
const num2 = 3;

// add two numbers
const dif = num1 - num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);


  var result = sum(1, 1);
  if (result !== 2) throw new Error('Expected sum(1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.

  questionText = questionText.replace(/[0-9]/g, '');

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  function findSmallestNumberAmongMixedElements(arr) {
    var shortest = arr.filter(function (a, b) {
        return typeof a === 'number' ? 0 : a - b;
    });
    if (shortest.length === 0) return 0;
    return Math.min.apply(null, shortest);
}

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
