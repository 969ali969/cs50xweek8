let first = document.getElementById("first");

    first.onmouseover = function() {
        first.innerHTML = "My very first Website by the way";
        first.style.color = "purple";
        console.log("hello");
    };

    first.onmouseout = function() {
        first.innerHTML = "Welcome to my website";
        first.style.color = "black";
    };
