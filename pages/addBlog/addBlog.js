let categoriesURL = 'https://api.blog.redberryinternship.ge/api/categories';

let authHeader = {
    Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
  };


let form1 = document.querySelector('.form1')
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
let blogWordsInput = document.querySelector('.blogWordsInput');
let minTwoWords = document.querySelector('.minTwoWords');
let rbEmail = document.querySelector('.rbEmail')
let acc = document.querySelector('.acc')
let arrow4 = document.querySelector('.arrow4')
let categoriesChoose = document.querySelector('#categoriesChoose')
let makePublic1 = document.querySelector('.makePublic1')


makePublic1.disabled = true



let isFormValid = {
    nameInput: false,
    title: false,
    description: false,          
    email: false,
}

form1.addEventListener('change', function(){

    validateEmail();
    validateNameAuthor();
    validateBlogWordsInput();
    validateNameTitle()
    
 
   
    if(isFormValid.email && isFormValid.nameInput && isFormValid.description && isFormValid.title){
        makePublic1.disabled = false;
        makePublic1.style.backgroundColor = 'rgba(93, 55, 243, 1)'
    }else{
        makePublic1.disabled = true;
        makePublic1.style.backgroundColor = 'rgba(228, 227, 235, 1)'
        
    }
})
let validInputsCount = 0;



headerImg.addEventListener("click", function () {
    window.location.href = "../../index.html";
});

arrow4.addEventListener("click", function () {
    window.location.href = "../../index.html";
});



nameAuthor.addEventListener("input", validateNameAuthor);
nameTitle.addEventListener("input", validateNameTitle);
publicInput.addEventListener('input', validatePublicInput);
blogWordsInput.addEventListener('input', validateBlogWordsInput);
rbEmail.addEventListener('input', validateEmail);


function createFileInput() {
    uploadFile.innerHTML = `
    <input type="file" id="fileInput" style="display: none;">
    <img src="/assets/images/folder-add.png" alt="">
    <label  class="dropFile" for="fileInput">
        <p>ჩააგდეთ ფაილი აქ ან </p>
        <span class="chooseFile">აირჩიეთ ფაილი</span>
    </label>
    `
}
createFileInput();



function appearImg(file) {
    uploadFile.innerHTML = ''
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('.imgDiv')
    uploadFile.appendChild(imgDiv)

        //SVG

    let imgName = document.createElement('p')
    imgName.classList.add('imgName')
    imgDiv.innerText = file.name

    let Xbutton = document.createElement('button')
    Xbutton.innerText= 'X'
    imgDiv.appendChild(Xbutton)
    Xbutton.addEventListener('click', function(){
        createFileInput();
    })


}





fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
    appearImg(selectedFile)
    
});







function validateNameAuthor() {
     isFormValid.nameInput = true;


    // Check if the input value has more than four characters
    if (nameAuthor.value.length > 4) {
        p1.style.color = 'rgba(20, 216, 28, 1)';
        isFormValid.nameInput = true;
    } else {
        p1.style.color = 'rgba(234, 25, 25, 1)';
        isFormValid.nameInput = false;
    }

    // Check if the input value has more than two words
    const words = nameAuthor.value.split(/\s+/);
    if (words.length >= 2) {
        p2.style.color = 'rgba(20, 216, 28, 1)';
        isFormValid.nameInput = true;
    } else {
        p2.style.color = 'rgba(234, 25, 25, 1)';
        isFormValid.nameInput = false;
    }

    // Check if the input value contains only Georgian words
    const georgianPattern = /^[\u10A0-\u10FF\s]+$/; 
    if (georgianPattern.test(nameAuthor.value)) {
        p3.style.color = 'rgba(20, 216, 28, 1)';
        isFormValid.nameInput = true;
    } else {
        p3.style.color = 'rgba(234, 25, 25, 1)';
        isFormValid.nameInput = false;
    }

    if (nameAuthor.isValid) {
        p1.style.color = '';
        p2.style.color = '';
        p3.style.color = '';
        
    }

    // Set border color based on overall validity
    nameAuthor.style.borderColor = isFormValid.nameInput ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    nameAuthor.style.backgroundColor = isFormValid.nameInput ? '' : 'rgba(250, 242, 243, 1)';
}



function validateBlogWords() {
    isFormValid.description = true;
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
        isFormValid.description = false;
    }

    if (isFormValid.description) {
        minTwoWords.style.color = '';
    }
}




function validateNameTitle() {
    isFormValid.title = true;
   
    // Check if the input value has at least 2 characters
    if (nameTitle.value.length >= 2) {
        minTwoSymbol.style.color = 'rgba(20, 216, 28, 1)';
        isFormValid.title = true;
    } else {
        minTwoSymbol.style.color = 'rgba(234, 25, 25, 1)';
        isFormValid.title = false;
    }

    if (isFormValid.title) {
        minTwoSymbol.style.color = '';
    }

    nameTitle.style.borderColor = isFormValid.title ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    nameTitle.style.backgroundColor = isFormValid.title ? '' : 'rgba(250, 242, 243, 1)';
}

function validatePublicInput() {
    let isValid = true;
 

    // Set border color based on overall validity
    publicInput.style.borderColor = isValid ? 'rgba(20, 216, 28, 1)' : 'rgba(234, 25, 25, 1)';
    publicInput.style.backgroundColor = isValid ? '' : 'rgba(250, 242, 243, 1)';
}



function validateBlogWordsInput() {
    isFormValid.description = true;
    const inputValue = blogWordsInput.value.trim();

    // Check if the input value has more than two characters
    if (inputValue.length >= 2) {
        blogWordsInput.style.borderColor = 'rgba(20, 216, 28, 1)';
        blogWordsInput.style.backgroundColor = 'white';
        minTwoWords.style.color = 'rgba(20, 216, 28, 1)';
        isFormValid.description = true;
    } else {
        blogWordsInput.style.borderColor = 'rgba(234, 25, 25, 1)';
        blogWordsInput.style.backgroundColor = 'rgba(250, 242, 243, 1)';
        minTwoWords.style.color = 'rgba(234, 25, 25, 1)';
        isFormValid.description = false;
    }

    if (isFormValid.description) {
        minTwoWords.style.color = '';
    }
}

function validateEmail() {
     isFormValid.email = rbEmail.value.trim().endsWith('@redberry.ge');

    if (isFormValid.email) {
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
// rounded.style.borderColor = '';
// rounded.style.backgroundColor = '';
blogWordsInput.style.borderColor = '';
blogWordsInput.style.backgroundColor = '';

// Set initial state of p1, p2, p3, minTwoSymbol, minTwoWords, and any other elements
p1.style.color = '';
p2.style.color = '';
p3.style.color = '';
minTwoSymbol.style.color = '';
minTwoWords.style.color = '';




// Retrieve values and styles from localStorage and set them in the respective fields
document.addEventListener('DOMContentLoaded', function () {
    const fields = ['nameAuthor', 'nameTitle', 'blogWordsInput', 'publicInput', 'rbEmail'];

    fields.forEach(function (field) {
        const storedValue = localStorage.getItem(`${field}_value`);
        const storedBorderColor = localStorage.getItem(`${field}_borderColor`);
        const storedBackgroundColor = localStorage.getItem(`${field}_backgroundColor`);

        if (storedValue) {
            const inputField = document.querySelector(`.${field}`);
            inputField.value = storedValue;
            inputField.style.borderColor = storedBorderColor;
            inputField.style.backgroundColor = storedBackgroundColor;
        }
    });
});

// Event listeners to store values and styles in localStorage on input change
const inputFields = document.querySelectorAll('.nameAuthor, .nameTitle, .blogWordsInput, .publicInput, .rbEmail');

inputFields.forEach(function (inputField) {
    inputField.addEventListener('input', function () {
        localStorage.setItem(`${inputField.classList.value}_value`, inputField.value);
        localStorage.setItem(`${inputField.classList.value}_borderColor`, inputField.style.borderColor);
        localStorage.setItem(`${inputField.classList.value}_backgroundColor`, inputField.style.backgroundColor);
        localStorage.setItem()
    });
});

function addCategoryOption(cat) {
    let option = document.createElement('option')
    option.innerText = cat.title
    option.classList.add('category')
    option.classList.add('workCategory')
    option.style.color = cat.text_color
    option.style.backgroundColor = cat.background_color
    categoriesChoose.appendChild(option)
    option.value = cat.id
    
    
}



fetch(categoriesURL, {
    headers: authHeader,
  })
  .then((res) => res.json())
  .then((data) => {
    categories = data.data;

    categories.forEach((cat) => {
      
      addCategoryOption(cat);
    });
  });


makePublic1.addEventListener('click', function(){
    fetch(categoriesURL, {
        method: 'POST',
        body: JSON.stringify({
            
            title: nameTitle.value,
            description: blogWordsInput.value,          
            author: nameAuthor.value,
            categories: categoriesChoose.value,
            email: rbEmail.value

        }),
        headers: authHeader,

      })
      
})


document.addEventListener('DOMContentLoaded', function () {
    let body = document.body;
    let overlay;
    let loginForm;
    let emailInput;
    let redError;
    let svgImage;
    let emailLabel;
    let okButton;



    makePublic1.addEventListener('click', function () {
        body.innerHTML = '';
        body.appendChild(appearLogin());
        greenLoginForm();
    });


  
    function appearLogin() {
        overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";
      
        loginForm = document.createElement("div");
        loginForm.classList.add("loginForm");
        document.body.appendChild(loginForm);
      
        let exitButton = document.createElement("div");
        let exitSvg = document.createElement("img");
        exitButton.classList.add("exitButton");
        exitSvg.classList.add("exitSvg");
        exitSvg.src = "/assets/images/add.svg";
        exitSvg.alt = "Exit";
        exitButton.appendChild(exitSvg);
        loginForm.appendChild(exitButton);
      
        exitSvg.addEventListener("click", closeLoginForm);
      
        let loginFormP = document.createElement("p");
        loginFormP.classList.add("loginFormP");
        loginFormP.innerText = "შესვლა";
        loginForm.appendChild(loginFormP);
      
        let loginFormEmail = document.createElement("p");
        loginFormEmail.classList.add("loginFormEmail");
        loginFormEmail.innerText = "ელ-ფოსტა";
        loginForm.appendChild(loginFormEmail);
      
        emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.placeholder = "Example@redberry.ge";
        emailInput.classList.add("emailInput");
        loginForm.appendChild(emailInput);
      
      
      
        redError = document.createElement('div')
        redError.classList.add('redError')
        loginForm.appendChild(redError);
        redError.style.display = "none"
      
        svgImage = document.createElement('img');
        svgImage.src = 'assets/images/info-circle.svg';
        redError.appendChild(svgImage);
      
        emailLabel = document.createElement('p')
        emailLabel.classList.add('emailLabel')
        emailLabel.innerText = 'ელ-ფოსტა არ მოიძებნა'
        redError.appendChild(emailLabel)
      
      
        let submitButton = document.createElement("button");
        submitButton.textContent = "შესვლა";
        submitButton.classList.add("submitButton");
        loginForm.appendChild(submitButton);
      
        submitButton.addEventListener("click", function () {
          emailInput = document.querySelector(".emailInput");
          emailCheckFunc();
      
          document.body.style.overflow = "";
        })
      
        centerLoginForm(loginForm);
      
        overlay.addEventListener("click", closeLoginForm);
      
      
        return loginForm;
      }


    function greenLoginForm() {
        loginForm.innerHTML = '';
      
        let done = document.createElement('img')
        done.src = '../../assets/images/tick-circle.svg'
        done.classList.add('done')
        loginForm.appendChild(done)
      
        let successedAuth = document.createElement('h1')
        successedAuth.classList.add('successedAuth')
        successedAuth.innerText = 'ჩანაწი წარმატებით დაემატა'
        loginForm.appendChild(successedAuth)
      
        okButton = document.createElement("button");
        okButton.textContent = "მთავარ გვერდზე დაბრუნება";
        okButton.classList.add("okButton");
        
        loginForm.appendChild(okButton);
      
      
        okButton.addEventListener('click', function () {
      
            document.location.href = '../../index.html'

      
        });
      
      
      }

    
});

        function centerLoginForm(loginForm) {
            let topPosition = (window.innerHeight - loginForm.offsetHeight) / 2;
            let leftPosition = (window.innerWidth - loginForm.offsetWidth) / 2;
        
            loginForm.style.top = topPosition + "px";
            loginForm.style.left = leftPosition + "px";
        }
        
        // Function to close the login form
        function closeLoginForm() {
            const overlay = document.querySelector(".overlay");
            const loginForm = document.querySelector(".loginForm");
        
            overlay.removeEventListener("click", closeLoginForm);
        
            overlay.remove();
            loginForm.remove();
        
        }





  