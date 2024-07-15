function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// script.js

// Function to display value
function display(val) {
    document.querySelector('.cal input').value += val;
}

// Function to clear the display
function Clear() {
    document.querySelector('.cal input').value = "";
}

// Function to delete the last character
function del() {
    let display = document.querySelector('.cal input').value;
    document.querySelector('.cal input').value = display.slice(0, -1);
}

// Function to calculate the result
function Calculate() {
    let display = document.querySelector('.cal input').value;
    try {
        document.querySelector('.cal input').value = eval(display);
    } catch (err) {
        alert("Invalid input");
        Clear();
    }
}
