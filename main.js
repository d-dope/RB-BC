let blogsAPIUrl = 'https://api.blog.redberryinternship.ge/api/blogs'
let categoriesURL = 'https://api.blog.redberryinternship.ge/api/categories'

let blogs;
let filteredBlogs;
let categories;

let authHeader = {
  Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
}


let blogsContainer = document.querySelector(".blogContainer")
let categoriesDiv = document.querySelector(".categories")
let loginButton = document.querySelector(".loginButton")
let loginContainer = document.querySelector(".loginContainer")






// საიტის მთავარი გვერდი,რომ ჩაიტვირთება გაკეთდეს რექვესთი,რომელიც დააბრუნებს ყველა ბლოგს.
fetch(blogsAPIUrl, {
  headers: authHeader
}).then(res => res.json()).then(res => {
  blogs = res.data
  filteredBlogs = blogs;

  filteredBlogs.forEach(blog => {
    createBlogCard(blog)
  })
})


// საიტის მთავარი გვერდი,რომ ჩაიტვირთება გაკეთდეს რექვესთი კატეგორიებზე, რომელიც დააბრუნებს ყველა კატეგორიას და გამოვიტანთ html-ში.
fetch(categoriesURL, {
    headers: authHeader
  })
  .then(res => res.json())
  .then(data => {
    categories = data.data;

    // console.log(categories)
    categories.forEach(cat => {
      categoriesDiv.append(createCategoryButton(cat))
    })

})





function createCategoryButton(categoryData) {
  let button = document.createElement("button");
  button.classList.add("catButton");
  button.textContent = categoryData.title;
  button.style.color = categoryData.text_color;
  button.style.backgroundColor = categoryData.background_color;
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    // Toggle "active" class on the clicked button
    button.classList.toggle("active");

    // Filter blogs based on the clicked category
    filteredBlogs = filterBlogsByCategoryId(categoryData.id);

    // Clear the blogsContainer
    blogsContainer.innerHTML = '';

    // Display filtered blogs
    filteredBlogs.forEach(blog => {
       createBlogCard(blog);
    });
  });

  return button;
}


let categoriess = []



function createBlogCard(card) {
  let cats = '';
 
  card.categories.forEach(cat => {
    cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`
    // categoriess.append(cat.id)
  })

  // Assuming 'card' and 'cats' are available in the scope

// Create the main card container
let cardContainer = document.createElement('div');
cardContainer.classList.add('card');
// console.log(cardContainer)
// Create the card image
const cardImage = document.createElement('img');
cardImage.src = card.image;
cardImage.alt = '';
cardImage.classList.add('cardImg');

// Create the author heading
const authorHeading = document.createElement('h3');
authorHeading.classList.add('author');
authorHeading.textContent = card.author;

// Create the public date paragraph
const publicDateParagraph = document.createElement('p');
publicDateParagraph.classList.add('publicDate');
publicDateParagraph.textContent = card.publish_date;

// Create the title heading
const titleHeading = document.createElement('h1');
titleHeading.classList.add('title');
titleHeading.textContent = card.title;

// Create the categories container
const categoriesContainer = document.createElement('div');
categoriesContainer.classList.add('categoriesInBlog');
categoriesContainer.innerHTML = cats;

// Create the description heading
const descriptionHeading = document.createElement('h2');
descriptionHeading.classList.add('description');
descriptionHeading.textContent = card.description;

// Create the seeMore container
const seeMoreContainer = document.createElement('div');
seeMoreContainer.classList.add('seeMoreDiv');

// Create the seeMore link
const seeMoreLink = document.createElement('a');
seeMoreLink.classList.add('seeMore');
seeMoreLink.id = 'seeMoreLink';
seeMoreLink.textContent = 'სრულად ნახვა';
seeMoreLink.setAttribute("href", "pages/blog/blog.html")

seeMoreLink.addEventListener("click", (a) => {
  blogsContainer.innerHTML = ''
  createFullCard();
})

// Create the arrow image
const arrowImage = document.createElement('img');
arrowImage.src = 'assets/images/Arrow (1).svg';
arrowImage.alt = 'SVG Image';
arrowImage.classList.add('svgImageRow');

// Append elements to the seeMore container
seeMoreContainer.appendChild(seeMoreLink);
seeMoreContainer.appendChild(arrowImage);

// Append all elements to the main card container
cardContainer.appendChild(cardImage);
cardContainer.appendChild(authorHeading);
cardContainer.appendChild(publicDateParagraph);
cardContainer.appendChild(titleHeading);
cardContainer.appendChild(categoriesContainer);
cardContainer.appendChild(descriptionHeading);
cardContainer.appendChild(seeMoreContainer);

// Assuming there is a parent container (replace 'parentContainer' with the actual parent container)
const parentContainer = document.querySelector('.blogContainer');
parentContainer.appendChild(cardContainer);
// console.log(parentContainer)
  
//   return `
//   <div class="card">
//   <img src="${card.image}" class="cardImg" alt="">
//   <h3 class="author">${card.author}</h3>
//   <p class="publicDate">${card.publish_date}</p>
//   <h1 class="title">${card.title}</h1>
//   <div class="categoriesInBlog">
//     ${cats}
//   </div>
//   <h2 class="description">${card.description}</h2>
//   <div class="seeMoreDiv">
//     <!-- Added id attribute to the "seeMore" link -->
//     <a class="seeMore" id="seeMoreLink">სრულად ნახვა</a>
//     <img src="assets/images/Arrow (1).svg" alt="SVG Image" class="svgImageRow">
//   </div>
// </div>
//   `
}

function seeMoreF(){
  
}


function filterBlogsByCategoryId(categoryId) {
  let filtered = blogs.filter(blog => {
    return blog.categories.some(cat => cat.id == categoryId)
  })
  return filtered;
}




  loginButton.addEventListener("click", () => {
    let emailInput = document.querySelector(".emailInput").value;
    loginContainer.innerHTML = '';

    loginContainer.appendChild(appearLogin());

    let userInfo = {
      "email": emailInput
    }
  
    fetch("https://api.blog.redberryinternship.ge/api/login", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
    }).then(res => {
      if(res.ok){
        console.log("Works!")
      }else{

        alert("Doesn't")
      }
    })

  })

 




function appearLogin() {
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  let loginForm = document.createElement('div');
  loginForm.classList.add('loginForm');
  document.body.appendChild(loginForm);

  let exitButton = document.createElement('div')
  let exitSvg = document.createElement('img');
  exitButton.classList.add('exitButton')
  exitSvg.classList.add('exitSvg')
  exitSvg.src = '/assets/images/add.svg'; 
  exitSvg.alt = 'Exit';
  exitButton.appendChild(exitSvg);
  loginForm.appendChild(exitButton)

  exitSvg.addEventListener('click', closeLoginForm);

  let loginFormP = document.createElement('p')
  loginFormP.classList.add("loginFormP")
  loginFormP.innerText = 'შესვლა'
  loginForm.appendChild(loginFormP);

  let loginFormEmail = document.createElement('p')
  loginFormEmail.classList.add("loginFormEmail")
  loginFormEmail.innerText = 'ელ-ფოსტა'
  loginForm.appendChild(loginFormEmail);

  let emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Example@redberry.ge';
  emailInput.classList.add('emailInput');
  loginForm.appendChild(emailInput);

  let submitButton = document.createElement('button');
  submitButton.textContent = 'შესვლა';
  submitButton.classList.add('submitButton');
  loginForm.appendChild(submitButton);

  centerLoginForm(loginForm);


  overlay.addEventListener('click', closeLoginForm);

  return loginForm;
}



function centerLoginForm(loginForm) {
  let topPosition = (window.innerHeight - loginForm.offsetHeight) / 2;
  let leftPosition = (window.innerWidth - loginForm.offsetWidth) / 2;

  loginForm.style.top = topPosition + 'px';
  loginForm.style.left = leftPosition + 'px';
}

// function closeLoginForm() {
//   let overlay = document.querySelector('.overlay');
//   let loginForm = document.querySelector('.loginForm');

//   document.body.removeChild(overlay);
//   document.body.removeChild(loginForm);

//   document.body.style.overflow = ''; // Restore scrolling
// }

// loginButton.addEventListener('click', () => {
//   let loginForm = appearLogin();
//   document.body.style.overflow = 'hidden'; 
// });


function closeLoginForm() {
  const overlay = document.querySelector('.overlay');
  const loginForm = document.querySelector('.loginForm');

  // Remove event listeners to prevent memory leaks
  overlay.removeEventListener('click', closeLoginForm);
 

  // Remove overlay and loginForm from the document
  overlay.remove();
  loginForm.remove();

  // Restore scrolling
  document.body.style.overflow = '';
}

// Add event listener to close the login form when the Esc key is pressed


// Add event listener to close the login form when overlay is clicked
// overlay.addEventListener('click', closeLoginForm);

  function createFullCard() {
    return `
  <div class="card">
  <img src="${card.image}" class="cardImg" alt="">
  <h3 class="author">${card.author}</h3>
  <p class="publicDate">${card.publish_date}</p>
  <h1 class="title">${card.title}</h1>
  <div class="categoriesInBlog">
    ${cats}
  </div>
  <h2 class="description">${card.description}</h2>
  <div class="seeMoreDiv">
    <!-- Added id attribute to the "seeMore" link -->
    <a class="seeMore" id="seeMoreLink">სრულად ნახვა</a>
    <img src="assets/images/Arrow (1).svg" alt="SVG Image" class="svgImageRow">
  </div>
</div>
  `

  }


