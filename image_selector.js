
//Changes the larger image (image1) to the image in the mouseovered thumbnail (thumbnail_1a/b/c).
//I am almost certain there's a less repetative way to do this, but this will have to do for now.
document.getElementById('thumbnail_1a').onmouseover = function() {
    document.getElementById('image1').setAttribute("src", "image1a.png");
};

document.getElementById('thumbnail_1b').onmouseover = function() {
    document.getElementById('image1').setAttribute("src", "image1b.jpeg");
};

document.getElementById('thumbnail_1c').onmouseover = function() {
    document.getElementById('image1').setAttribute("src", "image1c.jpeg");
};