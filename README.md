```
function imageSelector() {
    document.getElementById('thumbnail_1a').onmouseover = function() {
        document.getElementById('image1').setAttribute("src", "image1a.png");
    };

    document.getElementById('thumbnail_1b').onmouseover = function() {
        document.getElementById('image1').setAttribute("src", "image1b.jpeg");
    };

    document.getElementById('thumbnail_1c').onmouseover = function() {
        document.getElementById('image1').setAttribute("src", "image1c.jpeg");
    };
 }

window.addEventListener('DOMContentLoaded', imageSelector);
```