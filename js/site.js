// Get the string from the user
// Controller function
function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

// Reverse the string
// Logic function
function reverseString(userString) {
    let revString = [];

    for (let i = userString.length -1 ; i >= 0 ; i--) {
        revString += userString[i];
    }

    return revString;
}

// Display the reversed string to the user
// View function
function displayString(revString) {
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    
    document.getElementById("alert").classList.remove("invisible");
}