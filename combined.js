
//Prompts the user for how many times they want to see a copied image,
//forces the user to answer between 0 and 100 (0 is a valid option),
//then repeatedly writes that many <img> tags to the document,
//to the location in the document the function is called from.
function copyImagesOntoPage() {
    let userCopyNumber = prompt("How many copied images do you want to see?");

    while (userCopyNumber < 0 || userCopyNumber > 100000) {
        userCopyNumber = prompt("The value has to be between 0 and 100000.")
    }

    for(let i = 0; i < Math.floor(userCopyNumber); i++) {
        document.write('<img src="image1a.png" class="copied_image">')
    }
}


//Prompts user with a confirmation window.
//The user has to click okay, if they dont, then they
//will keep get another confirmation window.
function getUserConfirmation() {
    let userConfirmation = confirm('Hello, there\'s no real purpose to this confirmation window, so just click okay, thanks')
    if(userConfirmation == false) {
        getUserConfirmation();
    } else {
        return userConfirmation;
    }
}

//Once the user provides a confirmation, this is ran.
//Because the value will always be true, the else statement isn't entered.
function handleUserConfirmation(userValue) {
    if(userValue == true) {
        document.write('Ok was clicked!');
    } else {
        document.write('This case should never occur');
    }
}

//Prompts user for input
//If response is yes, some text and a tiny image is shown. 
//If response is no, then some different text shows without an image.
function getUserAnswerForTinyImage() {
    let userAnswer = prompt('Do you want to see a tiny image show on the page?')
    return userAnswer;
}

function handleUserAnswerForTinyImage(userValue) {
    
    console.log(userValue);
    if(userValue.toLowerCase() == 'yes') {
        let url = "https://via.placeholder.com/10x10"
        document.write('Here is a tiny placeholder image: <img src="' + url + '" id="tinyimage">')
    } else {
        document.write('Yes was not entered, but that is okay too. At least there\'s the image thumbnail mouseover effect.')
    }
}


//Changes the larger image (image1) to the image in the mouseovered thumbnail (thumbnail_1a/b/c).
//I am almost certain there's a less repetative way to do this, but this will have to do for now.
//Note the mouseover events cannot occur until the page is loaded otherwise it errors.
//Since I want to be able to call this .js file at the start of the html doc.,
//I need to wait until the page is loaded, or more specifically, just after the
//DOM objects for the thumbnails and image1 are loaded. This can be done by delaying
//the mouseover effects until the DOMContentLoaded event occurs.
//I think once imageSelector is called, the mouseover events contained in it
//will run indefinitely. I do not think waiting for onmouseover events will hold up
//uerConfirmation or userPromptTinyImage if they are called after the listener starts.
//I anticipate that events to act as interrupts and may even work in parallel.
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