function updateLineNumbers(textarea, gutter){
    //check if there is a different amount of lines
    const linesInTextarea = textarea.value.split("\n").length;
    const linesInGutter = gutter.children.length;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight+'px';
    var diff = linesInTextarea - linesInGutter;
    // more lines in the text area then in the gutter => add more numbers;
    if (diff > 0){
        // use fragment so dont need to affect the document as much
        fragment = document.createDocumentFragment();
        while(diff > 0){
            curLine = (linesInTextarea - diff + 1)
            const curNum =  document.createElement("span");
            curNum.className = "num"
            curNum.id = curLine
            curNum.onclick = function(){moveCursorToLine(curNum.id)};
            curNum.innerHTML = (curLine+'').padStart(3).replace(/ /g, "&nbsp;&nbsp;");
            fragment.appendChild(curNum);
            diff--;
        }
        gutter.appendChild(fragment);
    }
    while (diff < 0){
        gutter.removeChild(gutter.lastChild)
        diff++;
    }
}

function moveCursorToLine(number){
    tarea=document.getElementById("editor");
    var lines = tarea.value.split("\n");
    var startPos = 0;
    for(var x = 0; x < number-1; x++) {
        startPos += (lines[x].length+1);
    }
    tarea.focus();
    tarea.setSelectionRange(startPos, startPos);
}
const inputevnts = ["propertychange", "input", "keydown", "keyup"];
for (i=0;i<inputevnts.length;i++){
    document.getElementById('editor').addEventListener(inputevnts[i], function(){
        updateLineNumbers(document.getElementById('editor'), document.getElementById('gutter'))
    })
}

const mouseevnts = ["mousedown","click","mouseup"]
for (i=0;i<mouseevnts.length;i++){
    document.addEventListener(mouseevnts[i], function(){
        document.getElementById('editor').focus();
    })
}

document.getElementById('editor').value = "";
document.getElementById('editor').focus();
updateLineNumbers(document.getElementById('editor'), document.getElementById('gutter'))
