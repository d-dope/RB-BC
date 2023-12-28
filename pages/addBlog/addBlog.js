let headerImg = document.querySelector(".headerImg");
let nameAuthor = document.querySelector(".nameAuthor");
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let nameTitle = document.querySelector('.nameTitle');
let minTwoSymbol = document.querySelector('.minTwoSymbol');
let uploadFile = document.querySelector('.uploadFile')
let blogWords = document.querySelector('.blogWords');
let publicInput = document.querySelector(".publicInput")
let rounded = document.querySelector('.rounded')
let blogWordsInput = document.querySelector('.blogWordsInput');
let minTwoWords = document.querySelector('.minTwoWords');
let rbEmail = document.querySelector('.rbEmail')
let acc = document.querySelector('.acc')


headerImg.addEventListener("click", function () {
    window.location.href = "../../index.html";
});


// Select the elements

let fileInput = document.querySelector('#fileInput'); // Add an ID to your hidden input

// Add a click event listener to the uploadFile element
uploadFile.addEventListener('click', function () {
    // Trigger a click on the hidden file input
    fileInput.click();
});

// Add a change event listener to the file input
fileInput.addEventListener('change', function (event) {
    // Handle the selected file as needed
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);

    // Perform the file upload logic here, for example, you can send the file to a server
    // using XMLHttpRequest or fetch API.
    // Here is a basic example using FormData and fetch:
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('your_upload_endpoint', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server if needed
            console.log('Upload successful:', data);
        })
        .catch(error => {
            // Handle errors
            console.error('Upload failed:', error);
        });
});




nameAuthor.addEventListener("input", validateNameAuthor);
nameTitle.addEventListener("input", validateNameTitle);
publicInput.addEventListener('input', validatePublicInput);
rounded.addEventListener('input', validateRounded);
blogWordsInput.addEventListener('input', validateBlogWordsInput);
rbEmail.addEventListener('input', validateEmail);



uploadFile.addEventListener('click', () => {
    // Trigger a click on the hidden file input
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    // Handle the selected file as needed
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
    // You can perform further actions with the selected file here
});

function validateNameAuthor() {
    let isValid = true;

    // Check if the input value has more than four characters
    if (nameAuthor.value.length > 4) {
        p1.style.color = 'rgba(20, 216, 28, 1)';
    } else {
        p1.style.color = 'rgba(234, 25, 25, 1)';
        isValid = false;
    }

    // Check if the input value has more than two words
    const words = nameAuthor.value.split(/\s+/);
    if (words.length >= 2) {
        p2.style.color = 'rgba(20, 216, 28, 1)';
    } else {
        p2.style.color = 'rgba(234, 25, 25, 1)';
        isValid = false;
    }

    // Check if the input value contains only Georgian words
    const georgianPattern = /^[\u10A0-\u10FF\s]+$/; // Georgian Unicode range
    if (georgianPattern.test(nameAuthor.value)) {
        p3.style.color = 'rgba(20, 216, 28, 1)';
    } else {
        p3.style.color = 'rgba(234, 25, 25, 1)';
        isValid = false;
    }

    if (isValid) {
        p1.style.color = '';
        p2.style.color = '';
        p3.style.color = '';
    }

    // Set border color based on overall validity
    nameAuthor.style.borderColor = isValid ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    nameAuthor.style.backgroundColor = isValid ? '' : 'rgba(250, 242, 243, 1)';
}



function validateBlogWords() {
    let isValid = true;
    const inputValue = blogWordsInput.value.trim();

    // Check if the input value has more than two characters
    if (inputValue.length >= 2) {
        blogWordsInput.style.borderColor = 'rgba(20, 216, 28, 1)';
        blogWordsInput.style.backgroundColor = 'white';
        minTwoWords.style.color = 'rgba(20, 216, 28, 1)';
    } else {
        blogWordsInput.style.borderColor = 'rgba(234, 25, 25, 1)';
        blogWordsInput.style.backgroundColor = 'rgba(250, 242, 243, 1)';
        minTwoWords.style.color = 'rgba(234, 25, 25, 1)';
        isValid = false;
    }

    if (isValid) {
        minTwoWords.style.color = '';
    }
}




function validateNameTitle() {
    let isValid = true;
    // Check if the input value has at least 2 characters
    if (nameTitle.value.length >= 2) {
        minTwoSymbol.style.color = 'rgba(20, 216, 28, 1)';
    } else {
        minTwoSymbol.style.color = 'rgba(234, 25, 25, 1)';
        isValid = false;
    }

    if (isValid) {
        minTwoSymbol.style.color = '';
    }

    nameTitle.style.borderColor = isValid ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    nameTitle.style.backgroundColor = isValid ? '' : 'rgba(250, 242, 243, 1)';
}

function validatePublicInput() {
    let isValid = true;
    // You can add your validation logic for publicInput here
    // For example, checking if the date is in the correct format

    // Set border color based on overall validity
    publicInput.style.borderColor = isValid ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    publicInput.style.backgroundColor = isValid ? '' : 'rgba(250, 242, 243, 1)';
}

function validateRounded() {
    let isValid = true;
    // You can add your validation logic for rounded here

    // Set border color based on overall validity
    rounded.style.borderColor = isValid ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    rounded.style.backgroundColor = isValid ? '' : 'rgba(250, 242, 243, 1)';
}

function validateBlogWordsInput() {
    let isValid = true;
    const inputValue = blogWordsInput.value.trim();

    // Check if the input value has more than two characters
    if (inputValue.length >= 2) {
        blogWordsInput.style.borderColor = 'rgba(20, 216, 28, 1)';
        blogWordsInput.style.backgroundColor = 'white';
        minTwoWords.style.color = 'rgba(20, 216, 28, 1)';
    } else {
        blogWordsInput.style.borderColor = 'rgba(234, 25, 25, 1)';
        blogWordsInput.style.backgroundColor = 'rgba(250, 242, 243, 1)';
        minTwoWords.style.color = 'rgba(234, 25, 25, 1)';
        isValid = false;
    }

    if (isValid) {
        minTwoWords.style.color = '';
    }
}

function validateEmail() {
    const isValidEmail = rbEmail.value.trim().endsWith('@redberry.ge');

    if (isValidEmail) {
        rbEmail.style.borderColor = 'rgba(20, 216, 28, 1)';
        rbEmail.style.backgroundColor = 'white';
    } else {
        rbEmail.style.borderColor = 'rgba(234, 25, 25, 1)';
        rbEmail.style.backgroundColor = 'rgba(250, 242, 243, 1)';
    }
}

// Set initial border color to red
rbEmail.style.borderColor = '';

// Set initial border color to red
nameAuthor.style.borderColor = '';
nameTitle.style.borderColor = '';
publicInput.style.borderColor = '';
publicInput.style.backgroundColor = '';
rounded.style.borderColor = '';
rounded.style.backgroundColor = '';
blogWordsInput.style.borderColor = '';
blogWordsInput.style.backgroundColor = '';

// Set initial state of p1, p2, p3, minTwoSymbol, minTwoWords, and any other elements
p1.style.color = '';
p2.style.color = '';
p3.style.color = '';
minTwoSymbol.style.color = '';
minTwoWords.style.color = '';




