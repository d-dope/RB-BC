let blogsAPIUrl = 'https://api.blog.redberryinternship.ge/api/blogs';
let categoriesURL = 'https://api.blog.redberryinternship.ge/api/categories';
let blogsAPIUrlId = 'https://api.blog.redberryinternship.ge/api/blogs/1';

let authHeader = {
  Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
};

let main = document.querySelector("main")
let blogsContainer = document.querySelector(".blogContainer");
let categoriesDiv = document.querySelector(".categories");
let categoriesContainer = document.querySelector(".categoriesContainer")
let loginButton = document.querySelector(".loginButton");
let loginContainer = document.querySelector(".loginContainer");
let headerImg = document.querySelector(".headerImg")
let blogs;
let filteredBlogs;
let categories;
let emailInput;
let emailLabel;
let redError;
let svgImage;
let loginForm;
let okButton;
let overlay;
let sliderBlogs;
let sliderDesc;

let filter1 = JSON.parse(localStorage.getItem('filterCategory')) || [];


// Load blogs on page load
fetch(blogsAPIUrl, {
    headers: authHeader
  })
  .then((res) => res.json())
  .then((res) => {
    blogs = res.data;
    filteredBlogs = blogs;
    if(filter1.length > 0){
      filteredBlogs = findRelatedBlogs(filter1)
    }else{
      filteredBlogs = blogs;
    }

    filteredBlogs.forEach((blog) => {
      blogsContainer.appendChild(createBlogCard(blog));
    });
  });


  
  // Load categories on page load
fetch(categoriesURL, {
    headers: authHeader,
  })
  .then((res) => res.json())
  .then((data) => {
    categories = data.data;

    categories.forEach((cat) => {
      categoriesDiv.append(createCategoryButton(cat));
    });
  });



// Function to create a category button
function createCategoryButton(categoryData) {
  let button = document.createElement("button");
  button.classList.add("catButton");
  button.textContent = categoryData.title;
  button.style.color = categoryData.text_color;
  button.style.backgroundColor = categoryData.background_color;
  button.style.cursor = "pointer";
  
  if(filter1.length > 0 && filter1.some(category => category.id == categoryData.id)){
    button.classList.toggle("active");
  }

  button.addEventListener("click", () => {
    
    if(button.classList.contains('active')){
      button.classList.remove('active')

      filter1 = filter1.filter(c => {
        return c.id != categoryData.id

      })
 
      console.log(filter1)
    } else {
      button.classList.add('active')
      filter1.push(categoryData)
    }
   
    localStorage.setItem('filterCategory', JSON.stringify(filter1))
  
    if(filter1.length > 0){
      filteredBlogs = findRelatedBlogs(filter1);
    } else {
      filteredBlogs = blogs;
    }
    blogsContainer.innerHTML = '';
    filteredBlogs.forEach((blog) => {
      blogsContainer.appendChild(createBlogCard(blog))
    });
  });

  return button;
}


headerImg.addEventListener("click", function () {
  window.location.href = "index.html"
})





// Function to create a blog card
function createBlogCard(card) {
  let cats = "";
  card.categories.forEach((cat) => {
    cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`;
  });

  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = card.image;
  cardImage.alt = "";
  cardImage.classList.add("cardImg");

  const authorHeading = document.createElement("h3");
  authorHeading.classList.add("author");
  authorHeading.textContent = card.author;

  const publicDateParagraph = document.createElement("p");
  publicDateParagraph.classList.add("publicDate");
  publicDateParagraph.textContent = card.publish_date;

  const titleHeading = document.createElement("h1");
  titleHeading.classList.add("title");
  titleHeading.textContent = card.title;

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("categoriesInBlog");
  categoriesContainer.innerHTML = cats;

  const descriptionHeading = document.createElement("h2");
  descriptionHeading.classList.add("description");
  descriptionHeading.textContent = card.description;

  const seeMoreContainer = document.createElement("div");
  seeMoreContainer.classList.add("seeMoreDiv");

  const seeMoreLink = document.createElement("a");
  seeMoreLink.classList.add("seeMore");
  seeMoreLink.id = "seeMoreLink";
  seeMoreLink.textContent = "სრულად ნახვა";

  const arrowImage = document.createElement("img");
  arrowImage.src = "assets/images/Arrow (1).svg";
  arrowImage.alt = "SVG Image";
  arrowImage.classList.add("svgImageRow");

  seeMoreContainer.appendChild(seeMoreLink);
  seeMoreContainer.appendChild(arrowImage);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(authorHeading);
  cardContainer.appendChild(publicDateParagraph);
  cardContainer.appendChild(titleHeading);
  cardContainer.appendChild(categoriesContainer);
  cardContainer.appendChild(descriptionHeading);
  cardContainer.appendChild(seeMoreContainer);


  seeMoreLink.addEventListener("click", () => {
    openDetailedView(card);
  });


  return cardContainer;
}


// Function to open detailed view of a blog
function openDetailedView(card) {

  categoriesContainer.style.display = "none";
  main.innerHTML = "";
  blogsContainer.innerHTML = '';
  if (sliderBlogs) {
    sliderBlogs.style.display = 'none'
  }

  if(sliderDesc) {
  
    sliderDesc.style.display = 'none';

  }
  

  let cats = "";
  card.categories.forEach((cat) => {
    cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`;
  });
 
  let authHeader = {
    Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
  };

  fetch(`${blogsAPIUrl}/${card.id}`, {
      headers: authHeader
    })
    .then((response) => response.json())
    .then((data) => {

      let backSvg = document.createElement('img')
      backSvg.src = "assets/images/Arrow (2).svg"
      backSvg.classList.add('backSvg')
      blogsContainer.appendChild(backSvg)

      backSvg.addEventListener('click', function () {
        window.location.href = 'index.html'
      })


      const detailedView = document.createElement("div");
      detailedView.classList.add("detailed-view");
      detailedView.innerHTML = `
            <div class="container">
                <img class = "imageD" src="${data.image}" alt="">
                <h3 class="authorD">${data.author}</h3>
                <div class="emailAndDate">
                <p class="publicDateD">${data.publish_date}</p> •
                <h3 class="emailD">${data.email}</h3>
                </div>
               
              
                
                <h1 class = "titleD">${data.title}</h1>
                <div class="categoriesInBlogD">
                    ${cats}
                  </div>
                  <h2 class="descriptionD">${data.description}</h2>
                 
            </div>
       

        `;
      blogsContainer.appendChild(detailedView);

      
      
    })
    .catch((error) => {
      console.error("Error fetching blog details:", error);
    });



  // slider
  sliderDesc = document.createElement('div')
  sliderDesc.classList.add("sliderDesc")
  document.body.appendChild(sliderDesc)

  let similarArticles = document.createElement('h1')
  similarArticles.classList.add('similarArticles')
  similarArticles.innerText = 'მსგავსი სტატიები'
  sliderDesc.appendChild(similarArticles)

  let svgsDiv = document.createElement('div')
  svgsDiv.classList.add("svgsDiv")
  sliderDesc.appendChild(svgsDiv)

  let svgPrev = document.createElement('span');
  svgPrev.classList.add('svgPrev');
  svgsDiv.appendChild(svgPrev);
  svgPrev.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect width="44" height="44" rx="22" fill="#E4E3EB"/>
    <path d="M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z" fill="#F3F2FA"/>
  </svg>
`;
  
  let svgPost = document.createElement('span');
svgPost.classList.add('svgPost');
svgPost.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect x="44" y="44" width="44" height="44" rx="22" transform="rotate(180 44 44)" fill="#5D37F3"/>
<path d="M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z" fill="white"/>
</svg>
`;
svgsDiv.appendChild(svgPost);

  


  sliderBlogs = document.createElement('div')
  sliderBlogs.classList.add('sliderBlogs')

  







  const similarBlogs = findRelatedBlogs(card.categories);


  
  // Display similar articles in the sliderBlogs section
  sliderBlogs.innerHTML = '';
  similarBlogs.forEach((blog) => {
    // sliderBlogs.append(createBlogCardInSlider(blog));
    sliderBlogs.append(createBlogCard(blog))
  });



  document.body.appendChild(sliderBlogs)
}

function filterBlogsByCategories(categories) {
  const similarBlogs = blogs.filter((blog) => {
    // Check if the blog has at least one common category with the detailed blog
    return blog.categories.some((cat) => categories.some((detailedCat) => detailedCat.id === cat.id));
  });
  return similarBlogs;
}


// Function to create a blog card in the sliderBlogs section
function createBlogCardInSlider(card) {

  let cats = "";
  card.categories.forEach((cat) => {
    cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`;
  });


  let cardContainer = document.createElement("div");
  cardContainer.classList.add("cardInSlider");
  const cardImage = document.createElement("img");

  cardImage.src = card.image;
  cardImage.alt = "";
  cardImage.classList.add("cardImg");

  const authorHeading = document.createElement("h3");
  authorHeading.classList.add("author");
  authorHeading.textContent = card.author;

  const publicDateParagraph = document.createElement("p");
  publicDateParagraph.classList.add("publicDate");
  publicDateParagraph.textContent = card.publish_date;
  
  const titleHeading = document.createElement("h1");
  titleHeading.classList.add("title");
  titleHeading.textContent = card.title;

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("categoriesInBlog");
  categoriesContainer.innerHTML = cats;

  const descriptionHeading = document.createElement("h2");
  descriptionHeading.classList.add("description");
  descriptionHeading.textContent = card.description;

  const seeMoreContainer = document.createElement("div");
  seeMoreContainer.classList.add("seeMoreDiv");

  const seeMoreLink = document.createElement("a");
  seeMoreLink.classList.add("seeMore");
  seeMoreLink.id = "seeMoreLink";
  seeMoreLink.textContent = "სრულად ნახვა";

  const arrowImage = document.createElement("img");
  arrowImage.src = "assets/images/Arrow (1).svg";
  arrowImage.alt = "SVG Image";
  arrowImage.classList.add("svgImageRow");

  seeMoreContainer.appendChild(seeMoreLink);
  seeMoreContainer.appendChild(arrowImage);

  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(authorHeading);
  cardContainer.appendChild(publicDateParagraph);
  cardContainer.appendChild(titleHeading);
  cardContainer.appendChild(categoriesContainer);
  cardContainer.appendChild(descriptionHeading);
  cardContainer.appendChild(seeMoreContainer);



}

// Function to filter blogs by category ID
function filterBlogsByCategoryId(categoryId) {

  let filtered = blogs.filter((blog) => {
    return blog.categories.some((cat) => cat.id == categoryId);
  });
  return filtered;
}

function findRelatedBlogs(categories) {
  let filtered = []

  blogs.forEach(blog => {
    blog.categories.forEach(cat => {
      if (categories.some(category => category.id === cat.id) && !filtered.some(b => b.id === blog.id)) {
        filtered.push(blog)
      }
    })
  })

  return filtered;
}


// Event listener for login button
loginButton.addEventListener("click", () => {

  loginContainer.innerHTML = '';
  loginContainer.appendChild(appearLogin());


});

// Function to display login form
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

// Function to center the login form
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







let emailCheckFunc = () => {
  if (emailInput.value.trim() === '' || !emailInput.value.endsWith('@redberry.ge')) {
    emailInput.style.borderColor = 'red';
    redError.style.display = "flex";
  } else {
    emailInput.style.borderColor = ''; 
    redError.style.display = "none";

    // Perform the additional fetch request
    let userInfo = {
      "email": emailInput.value 
    };

    fetch("https://api.blog.redberryinternship.ge/api/login", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.ok) {

          greenLoginForm()
        } else {
          emailInput.style.borderColor = 'red';
          redError.style.display = "flex";
        }
      });
  }
};

let addBlogButton = document.querySelector(".addBlogButton button")

function greenLoginForm() {
  loginForm.innerHTML = '';

  let done = document.createElement('img')
  done.src = 'assets/images/tick-circle.svg'
  done.classList.add('done')
  loginForm.appendChild(done)

  let successedAuth = document.createElement('h1')
  successedAuth.classList.add('successedAuth')
  successedAuth.innerText = 'წარმატებული ავტორიზაცია'
  loginForm.appendChild(successedAuth)

  okButton = document.createElement("button");
  okButton.textContent = "კარგი";
  okButton.classList.add("okButton");
  okButton.setAttribute("href", "index.html")
  loginForm.appendChild(okButton);


  okButton.addEventListener('click', function () {


    const loginButton = document.querySelector(".loginButton");
    const addBlogButton = document.querySelector(".addBlogButton");

    loginButton.style.display = 'none';
    addBlogButton.classList.add("active");
    loginForm.style.display = 'none'
    document.body.removeChild(overlay);
    

    let addBlog = document.querySelector('.addBlog')

    addBlog.addEventListener('click', function () {
      document.location.href = '/pages/addBlog/addBlog.html'
      document.body.style.overflow = 'scroll';    })

  });


}



