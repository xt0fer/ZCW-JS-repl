let prolog_code = `
function testassert(ffun, answ) {
    if (ffun() === answ) {
        console.log("Success!");
    }
        console.log("Tests not passed!");
}
`;