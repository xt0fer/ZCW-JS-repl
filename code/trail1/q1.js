// algebra trail 1
let questions = [{
        question: 0,
        award: 0,
        setuptext: `
// === Y equals ?

// Look at each of these formulas, and determine what *y* is based on 
// substituting the given value of *x*.
// ----
// If y = 3x + 5 and x = 2, what is y?
// ----
// Answer
// ****
// x = 2
// y = 3x + 5
// y = (3 times x) plus 5
// y = (3 times 2) plus 5
// y = 6 plus 5
// y = 11
// ****
// So, you need to change the 0 below to 11, then click the Run Javascript button
// to submit your answer for testing.
// If you get it right, you can click Next Question to move on.
// You can also skip a question, if you're stuck.
`,
        samplecode: `
function f() {
    return 0;
}
// change the 0 above to 11 and click the Run Javascript button.
// then, click the Next Question button.
`,
        testcases: `
testassert(f, 11);
`
    },
    {
        question: 1,
        award: 10,
        setuptext: `
// Given the following formula,
// y = 6x - 7
// what is y,
// if x = 2 ?

// edit the line y = 0 and change the 0 to your answer.
`,
        samplecode: `

function f() {
    y = 0;
    return y;
}
`,
        testcases: `
testassert(f, 5);
`
    },
    {
        question: 2,
        award: 10,
        setuptext: `
// Given the following formula,
// y = 3x + 8
// what is y, if x = 5?

// edit the line y = 0 and change the 0 to your answer.
`,
        samplecode: `

function f() {
    y = 0;
    return y;
}
`,
        testcases: `
testassert(f, 23);
`
    },
    {
        question: 3,
        award: 10,
        setuptext: `
// Given the following formula,
// y = 4x - 5
// what is y, if x = 2?

// edit the line y = 0 and change the 0 to your answer.
`,
        samplecode: `

function f() {
    y = 0;
    return y;
}
`,
        testcases: `
testassert(f, 3);
`
    },

]