//Prompts user for input
//If response is yes, some text and a tiny image is shown. 
//If response is no, then some different text shows without an image.
let userAnswer = prompt('Do you want to see a tiny image show on the page?')
console.log(userAnswer)
if(userAnswer.toLowerCase() == 'yes') {
    let url = "https://via.placeholder.com/10x10"
    document.write('Here is a tiny placeholder image: <img src="' + url + '" id="tinyimage">')
} else {
    document.write('Yes was not entered, but that is okay too. At least there\'s the image thumbnail mouseover effect.')
}