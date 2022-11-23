
/**Array Destructuring */
function calculate(a, b) {
    const adder = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;
    return [adder, sub, mul, div];
}
const [add, sub, mul, div] = calculate(8, 3);

/**Spread Operator */
const myArray3 = ['This is a spread Operator', 'Its Working Finely'];

/**.map Array Method */
const myArray2 = ['Sum is: ' + add, 'Substruction is: ' + sub, 'Multiplication is: ' + mul, 'Division is: ' + div, ...myArray3].map((item) => <p>{item}</p>);

export {myArray2}