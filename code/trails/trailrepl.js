var editor = ace.edit("editor", {
    theme: "ace/theme/xcode",
    mode: "ace/mode/javascript",
    autoScrollEditorIntoView: true,
    fontSize: 16,
    maxLines: 30,
    minLines: 15
});

var consolewin = ace.edit("consolewin");
consolewin.setOptions({
    theme: "ace/theme/terminal",
    autoScrollEditorIntoView: true,
    fontSize: 16,
    maxLines: 8,
    minLines: 3
});
consolewin.renderer.setScrollMargin(10, 10, 10, 10);

var
    preamble = `
// pre
(function () {
    function testassert(ffun, answ) {
        if (ffun() === answ) {
            console.log("Success!");
            return true;
        }
        console.log("Tests not passed!, Incorrect answer.");
        return false;
    }
    function testassertbinary(ffun, a1, a2, answ) {
        if (ffun(a1, a2) === answ) {
            console.log("Success!");
            return true;
        }
        console.log("Tests not passed!, Incorrect answer.");
        return false;
    }
    function testassertunary(ffun, a1, answ) {
        if (ffun(a1) === answ) {
            console.log("Success!");
            return true;
        }
        console.log("Tests not passed!, Incorrect answer.");
        return false;
    }

    var _logg = [];
    console.log = function() {
        let args = [];
        for (var k = 0; k < arguments.length; k++) {
            args.push(arguments[k]);
        }
        _logg.push(args.join(" "));
    }
//pre
`;

var postamble = `
//post
return _logg.join("\\n") + "\\n";

})();

//post
`;

var selectionText = "";
// current question index
var currentq = 0;
var currentScore = 0;

window.addEventListener('message',

    function(e) {
        // Sandboxed iframes which lack the 'allow-same-origin'
        // header have "null" rather than a valid origin. This means you still
        // have to be careful about accepting data via the messaging API you
        // create. Check that source, and validate those inputs!
        var frame = document.getElementById('sandboxed');
        if (e.origin === "null" && e.source === frame.contentWindow) {
            consolewin.setValue(e.data);
            consolewin.clearSelection(); // This will remove the highlight over the text
            let target = 'Success!';
            let result = e.data.replace(/\n|\r/g, "");

            console.log("compare " +
                (result == target) + result + "-" + target);
            if (result == target) {
                updateCurrentScore(questions[currentq].award);
                document.getElementById("runjs").disabled = true;
                document.getElementById("nextq").disabled = false;
            }
        }
    });

function evaluate() {
    var frame = document.getElementById('sandboxed');
    // var code = document.getElementById('code').value;
    var code = preamble + editor.getValue() + questions[currentq].testcases + postamble;

    clearConsoleWin();
    console.log(code);
    // Note that we're sending the message to "*", rather than some specific
    // origin. Sandboxed iframes which lack the 'allow-same-origin' header
    // don't have an origin which you can target: you'll have to send to any
    // origin, which might alow some esoteric attacks. Validate your output!
    frame.contentWindow.postMessage(code, '*');
}

function updateCurrentScore(add) {
    currentScore = currentScore + add;
    document.getElementById('currentScore').innerHTML = "Current Score: " + currentScore +
        " - Progress(" + (currentq + 1) + " of " + (questions.length) + ")";
}

function skipQuestion() {
    advanceQuestion();
}

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

function loadquestion() {
    if (currentq >= questions.length) {
        // we're done with the trail
        alert("Congrats! You're final score was " + currentScore);
        document.getElementById('nextq').disabled = true;
        document.getElementById('runjs').disabled = true;
        document.getElementById('skipq').disabled = true;
        editor.selectAll();
        editor.insert("");
        return;
    }
    let current = questions[currentq];
    document.getElementById('runjs').disabled = false;


    editor.selectAll();
    editor.insert(current.setuptext + current.samplecode);
    updateCurrentScore(0);
}

function advanceQuestion() {
    currentq = currentq + 1;
    loadquestion();
    clearConsoleWin();
    document.getElementById('nextq').disabled = true;
    document.getElementById('runjs').disabled = false;
}

function initRepl() {
    document.getElementById('runjs').addEventListener('click', evaluate);
    document.getElementById('runjs').disabled = true;
    document.getElementById('skipq').addEventListener('click', skipQuestion);
    document.getElementById('nextq').addEventListener('click', advanceQuestion);
    document.getElementById('nextq').disabled = true;

    document.getElementById("sandboxed").style.display = "none";
}

window.onload = function() {
    initRepl();
    loadquestion();
}