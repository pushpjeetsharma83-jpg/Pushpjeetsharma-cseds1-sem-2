
let heading = document.getElementById("heading");
let message = document.getElementById("message");
let paragraph = document.getElementById("paragraph");

document.getElementById("textBtn").onclick = function() {

    heading.innerHTML = message.value;
};

document.getElementById("colorBtn").onclick = function() {

    document.body.style.backgroundColor = "lightblue";
};

document.getElementById("fontBtn").onclick = function() {

    paragraph.style.fontSize = "25px";
};

document.getElementById("toggleBtn").addEventListener("click", function() {

    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
});

document.getElementById("resetBtn").onclick = function() {

    heading.innerHTML = "Welcome to JavaScript";

    message.value = "";

    paragraph.style.display = "block";

    paragraph.style.fontSize = "18px";

    document.body.style.backgroundColor = "#f0f2f5";
};

message.onchange = function() {

    console.log("Input Changed");
};

message.onmouseover = function() {

    message.style.backgroundColor = "#e6f0ff";
};

message.onmouseout = function() {

    message.style.backgroundColor = "white";
};

