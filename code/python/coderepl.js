var editor = ace.edit("editor", {
    theme: "ace/theme/xcode",
    mode: "ace/mode/python",
    autoScrollEditorIntoView: true,
    fontSize: 16,
    maxLines: 15,
    minLines: 15
});

var consolewin = ace.edit("consolewin", {
    theme: "ace/theme/terminal",
    autoScrollEditorIntoView: true,
    fontSize: 16,
    maxLines: 8,
    minLines: 8
});
consolewin.renderer.setScrollMargin(10, 10, 10, 10);

var
    preamble = `
# pre
`;

var postamble = `
# post

`;

var selectionText = "";

function clearConsoleWin() {
    consolewin.setValue("");
    consolewin.clearSelection(); // This will remove the highlight over the text
}

function selectAllEditor() {
    editor.selectAll();
}

function deleteSelectedCode() {
    selectionText = editor.getSelection();
    editor.insert("");
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    let tt = consolewin.getValue() + text;
    consolewin.setValue(tt);
    consolewin.clearSelection();
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {
    console.log("inside runit");
    var prog = editor.getValue(); //document.getElementById("editor").value;
    console.log(prog);
    clearConsoleWin();

    Sk.configure({
        output: outf,
        read: builtinRead,
        __future__: Sk.python3
    });

    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
            console.log('success');
        },
        function(err) {
            outf(err.toString());
            console.log(err.toString());
        });
}

document.getElementById('runjs').addEventListener('click', runit);
document.getElementById('clear').addEventListener('click', clearConsoleWin);
document.getElementById('selall').addEventListener('click', selectAllEditor);
document.getElementById('clearcode').addEventListener('click', deleteSelectedCode);