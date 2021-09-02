//Prompts user with a confirmation window.
//The text that is shown depends on whether or not okay is selected.
let userConfirmation = confirm('Hello, there\'s no real purpose to this confirmation window, so just click okay, thanks')
if(userConfirmation == true) {
    document.write('Ok was clicked!')
} else {
    document.write('Ok was not clicked.')
}
