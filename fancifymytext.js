


function makeBig(){
    document.getElementById("userText").style.fontSize = "24pt";
}

function fancifyText(){
    document.getElementById("userText").style.fontWeight = "bold";
    document.getElementById("userText").style.color = "blue";
    document.getElementById("userText").style.textDecoration = "underline";
}
    
function makeBoring(){
    document.getElementById("userText").style.fontWeight = "normal";
}

function moo(){
    
    let str = document.getElementById("userText").value + "";
    str = str.toUpperCase();
    let sentences = String(str).split(".");
    let final = sentences.join("-Moo.");
    document.getElementById("userText").value = final;
}

