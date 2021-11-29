// algebra trail 1
let questions = [{
        question: 0,
        award: 0,
        setuptext: `
// If you are asked to produce a function that calculated a more complicated expression, perhaps
// ****
// x + y * 5
// ****
// You could just write
// 
// function whoa(x, y) {
//         return x + y * 5;
// }
// 
// Use these as *patterns* to solve the problems below. If you get it right, you can click Next Question to move on.
// You can also skip a question, if you're stuck.
`,
        samplecode: `
function whoa(x, y) {
        return 0;
}        
// change the 0 above to (x + y * 5) click the Run Javascript button.
// then, click the Next Question button.
`,
        testcases: `
testassertbinary(whoa, 2, 2, 20);
`
    },
    {
        question: 1,
        award: 10,
        setuptext: `
//Complete the function to calculate multiplication of two input values. x=4 and y=4 should print 16.
//
        
        `,
        samplecode: `
function multiply(x, y) {
        return 0;
}
`,
        testcases: `
testassertbinary(multiply,4,4, 16);
`
    },
    {
        question: 2,
        award: 10,
        setuptext: `
// Write a simple function that returns the product of two numbers:  17 * 3
`,
        samplecode: `

function f() {
    return 0;
}
`,
        testcases: `
testassert(f, (17 * 3));
`
    },
    {
        question: 3,
        award: 10,
        setuptext: `
// Using Arithmetic Operators, write a function to 
// return the computed product of 789 x 123.
`,
        samplecode: `

function f() {
    return 0;
}
`,
        testcases: `
testassert(f, (789 * 123));
`
    },
    {
        question: 4,
        award: 10,
        setuptext: `
// Complete the function to calculate the square of an input value. 
// Remember that the square of a number is the result of
// multiplying that number times itself.

`,
        samplecode: `

function f(x) {
    return 0;
}
`,
        testcases: `
testassertunary(f, 2, 4);
`
    },

    {
        question: 5,
        award: 10,
        setuptext: `
// Make a function that returns the string value "Zip Code" from the given function.
`,
        samplecode: `

function f() {
    return "";
}
`,
        testcases: `
testassert(f, "Zip Code");
`
    },
    {
        question: 6,
        award: 10,
        setuptext: `
// Using the JavaScript length method, return the 
// length of the string "ZipCodeRocks" using the given function.
`,
        samplecode: `

function f() {
    return "".length;
}
`,
        testcases: `
testassert(f, 12);
`
    },
    {
        question: 6,
        award: 10,
        setuptext: `
// Using the JavaScript length method, return the 
// length of the string "ZipCodeRocks" using the given function.
 
// Example 1
// input: "hello".length
// output: 5
 
// Example 2
// input: "Delaware".length
// output: 8
`,
        samplecode: `

function f() {
return "".length;
}
`,
        testcases: `
testassert(f, 12);
`
    },
    {
        question: 7,
        award: 20,
        setuptext: `
// Write function which takes two numbers (t, f)
// The first is the number of touchdowns in a football game
// the second is the number of field goals
// the function should produce a team's total score
// so, if there are 3 touchdowns and 2 fieldgoals, the the total score would be 27
`,
        samplecode: `

function footballscore(t, f) {
return 0;
}
`,
        testcases: `
testassertbinary(footballscore, 3, 2, 27);`
    },
    {
        question: 8,
        award: 20,
        setuptext: `
// Write function which takes a temperature of a room
// if the temp is lower than 68, the heater should be turned on.
// so the function should return true.
// if is the temp >= 68, it should return false.
`,
        samplecode: `

function turnOnHeater(temp) {
return false;
}
`,
        testcases: `
        testassertunary(turnOnHeater, 77, true);`
    },
]