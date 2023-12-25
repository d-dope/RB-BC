// let blogsAPIUrl = 'https://api.blog.redberryinternship.ge/api/blogs'
// let categoriesURL = 'https://api.blog.redberryinternship.ge/api/categories'
// let blogsAPIUrlId = 'https://api.blog.redberryinternship.ge/api/blogs/1'
// let blogs;
// let filteredBlogs;
// let categories;

// let authHeader = {
//   Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
// }


// let blogsContainer = document.querySelector(".blogContainer")
// let categoriesDiv = document.querySelector(".categories")
// let loginButton = document.querySelector(".loginButton")
// let loginContainer = document.querySelector(".loginContainer")






// // საიტის მთავარი გვერდი,რომ ჩაიტვირთება გაკეთდეს რექვესთი,რომელიც დააბრუნებს ყველა ბლოგს.
// fetch(blogsAPIUrl, {
//   headers: authHeader
// }).then(res => res.json()).then(res => {
//   blogs = res.data
//   filteredBlogs = blogs;

//   filteredBlogs.forEach(blog => {
//     createBlogCard(blog)
//   })
// })


// // საიტის მთავარი გვერდი,რომ ჩაიტვირთება გაკეთდეს რექვესთი კატეგორიებზე, რომელიც დააბრუნებს ყველა კატეგორიას და გამოვიტანთ html-ში.
// fetch(categoriesURL, {
//     headers: authHeader
//   })
//   .then(res => res.json())
//   .then(data => {
//     categories = data.data;

//     // console.log(categories)
//     categories.forEach(cat => {
//       categoriesDiv.append(createCategoryButton(cat))
//     })

// })





// function createCategoryButton(categoryData) {
//   let button = document.createElement("button");
//   button.classList.add("catButton");
//   button.textContent = categoryData.title;
//   button.style.color = categoryData.text_color;
//   button.style.backgroundColor = categoryData.background_color;
//   button.style.cursor = "pointer";

//   button.addEventListener("click", () => {
//     // Toggle "active" class on the clicked button
//     button.classList.toggle("active");

//     // Filter blogs based on the clicked category
//     filteredBlogs = filterBlogsByCategoryId(categoryData.id);

//     // Clear the blogsContainer
//     blogsContainer.innerHTML = '';

//     // Display filtered blogs
//     filteredBlogs.forEach(blog => {
//        createBlogCard(blog);
//     });
//   });

//   return button;
// }


// let categoriess = []



// function createBlogCard(card) {
//   let cats = '';
 
//   card.categories.forEach(cat => {
//     cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`
//     // categoriess.append(cat.id)
//   })

//   // Assuming 'card' and 'cats' are available in the scope

// // Create the main card container
// let cardContainer = document.createElement('div');
// cardContainer.classList.add('card');
// // console.log(cardContainer)
// // Create the card image
// const cardImage = document.createElement('img');
// cardImage.src = card.image;
// cardImage.alt = '';
// cardImage.classList.add('cardImg');

// // Create the author heading
// const authorHeading = document.createElement('h3');
// authorHeading.classList.add('author');
// authorHeading.textContent = card.author;

// // Create the public date paragraph
// const publicDateParagraph = document.createElement('p');
// publicDateParagraph.classList.add('publicDate');
// publicDateParagraph.textContent = card.publish_date;

// // Create the title heading
// const titleHeading = document.createElement('h1');
// titleHeading.classList.add('title');
// titleHeading.textContent = card.title;

// // Create the categories container
// const categoriesContainer = document.createElement('div');
// categoriesContainer.classList.add('categoriesInBlog');
// categoriesContainer.innerHTML = cats;

// // Create the description heading
// const descriptionHeading = document.createElement('h2');
// descriptionHeading.classList.add('description');
// descriptionHeading.textContent = card.description;

// // Create the seeMore container
// const seeMoreContainer = document.createElement('div');
// seeMoreContainer.classList.add('seeMoreDiv');

// // Create the seeMore link
// const seeMoreLink = document.createElement('a');
// seeMoreLink.classList.add('seeMore');
// seeMoreLink.id = 'seeMoreLink';
// seeMoreLink.textContent = 'სრულად ნახვა';
// seeMoreLink.setAttribute("href", "pages/blog/blog.html")

// // seeMoreLink.addEventListener("click", (a) => {
// //   blogsContainer.innerHTML = ''
// //   createFullCard();
// // })

// // Create the arrow image
// const arrowImage = document.createElement('img');
// arrowImage.src = 'assets/images/Arrow (1).svg';
// arrowImage.alt = 'SVG Image';
// arrowImage.classList.add('svgImageRow');

// // Append elements to the seeMore container
// seeMoreContainer.appendChild(seeMoreLink);
// seeMoreContainer.appendChild(arrowImage);

// // Append all elements to the main card container
// cardContainer.appendChild(cardImage);
// cardContainer.appendChild(authorHeading);
// cardContainer.appendChild(publicDateParagraph);
// cardContainer.appendChild(titleHeading);
// cardContainer.appendChild(categoriesContainer);
// cardContainer.appendChild(descriptionHeading);
// cardContainer.appendChild(seeMoreContainer);

// // Assuming there is a parent container (replace 'parentContainer' with the actual parent container)
// const parentContainer = document.querySelector('.blogContainer');
// parentContainer.appendChild(cardContainer);
// // console.log(parentContainer)
  
// //   return `
// //   <div class="card">
// //   <img src="${card.image}" class="cardImg" alt="">
// //   <h3 class="author">${card.author}</h3>
// //   <p class="publicDate">${card.publish_date}</p>
// //   <h1 class="title">${card.title}</h1>
// //   <div class="categoriesInBlog">
// //     ${cats}
// //   </div>
// //   <h2 class="description">${card.description}</h2>
// //   <div class="seeMoreDiv">
// //     <!-- Added id attribute to the "seeMore" link -->
// //     <a class="seeMore" id="seeMoreLink">სრულად ნახვა</a>
// //     <img src="assets/images/Arrow (1).svg" alt="SVG Image" class="svgImageRow">
// //   </div>
// // </div>
// //   `
// }

// function seeMoreF(){
  
// }


// function filterBlogsByCategoryId(categoryId) {
//   let filtered = blogs.filter(blog => {
//     return blog.categories.some(cat => cat.id == categoryId)
//   })
//   return filtered;
// }




//   loginButton.addEventListener("click", () => {
//     let emailInput = document.querySelector(".emailInput").value;
//     loginContainer.innerHTML = '';

//     loginContainer.appendChild(appearLogin());

//     let userInfo = {
//       "email": emailInput
//     }
  
//     fetch("https://api.blog.redberryinternship.ge/api/login", {
//       method: "POST",
//       body: JSON.stringify(userInfo),
//       headers: {
//         "Content-Type": "application/json",
//         'Accept': 'application/json',
//       },
//     }).then(res => {
//       if(res.ok){
//         console.log("Works!")
//       }else{

//         alert("Doesn't")
//       }
//     })

//   })

 




// function appearLogin() {
//   let overlay = document.createElement('div');
//   overlay.classList.add('overlay');
//   document.body.appendChild(overlay);

//   let loginForm = document.createElement('div');
//   loginForm.classList.add('loginForm');
//   document.body.appendChild(loginForm);

//   let exitButton = document.createElement('div')
//   let exitSvg = document.createElement('img');
//   exitButton.classList.add('exitButton')
//   exitSvg.classList.add('exitSvg')
//   exitSvg.src = '/assets/images/add.svg'; 
//   exitSvg.alt = 'Exit';
//   exitButton.appendChild(exitSvg);
//   loginForm.appendChild(exitButton)

//   exitSvg.addEventListener('click', closeLoginForm);

//   let loginFormP = document.createElement('p')
//   loginFormP.classList.add("loginFormP")
//   loginFormP.innerText = 'შესვლა'
//   loginForm.appendChild(loginFormP);

//   let loginFormEmail = document.createElement('p')
//   loginFormEmail.classList.add("loginFormEmail")
//   loginFormEmail.innerText = 'ელ-ფოსტა'
//   loginForm.appendChild(loginFormEmail);

//   let emailInput = document.createElement('input');
//   emailInput.type = 'email';
//   emailInput.placeholder = 'Example@redberry.ge';
//   emailInput.classList.add('emailInput');
//   loginForm.appendChild(emailInput);

//   let submitButton = document.createElement('button');
//   submitButton.textContent = 'შესვლა';
//   submitButton.classList.add('submitButton');
//   loginForm.appendChild(submitButton);

//   centerLoginForm(loginForm);


//   overlay.addEventListener('click', closeLoginForm);

//   return loginForm;
// }



// function centerLoginForm(loginForm) {
//   let topPosition = (window.innerHeight - loginForm.offsetHeight) / 2;
//   let leftPosition = (window.innerWidth - loginForm.offsetWidth) / 2;

//   loginForm.style.top = topPosition + 'px';
//   loginForm.style.left = leftPosition + 'px';
// }

// // function closeLoginForm() {
// //   let overlay = document.querySelector('.overlay');
// //   let loginForm = document.querySelector('.loginForm');

// //   document.body.removeChild(overlay);
// //   document.body.removeChild(loginForm);

// //   document.body.style.overflow = ''; // Restore scrolling
// // }

// // loginButton.addEventListener('click', () => {
// //   let loginForm = appearLogin();
// //   document.body.style.overflow = 'hidden'; 
// // });


// function closeLoginForm() {
//   const overlay = document.querySelector('.overlay');
//   const loginForm = document.querySelector('.loginForm');

//   // Remove event listeners to prevent memory leaks
//   overlay.removeEventListener('click', closeLoginForm);
 

//   // Remove overlay and loginForm from the document
//   overlay.remove();
//   loginForm.remove();

//   // Restore scrolling
//   document.body.style.overflow = '';
// }

// // Add event listener to close the login form when the Esc key is pressed


// // Add event listener to close the login form when overlay is clicked
// // overlay.addEventListener('click', closeLoginForm);

// //   function createFullCard() {
// //     return `
// //   <div class="card">
// //   <img src="${card.image}" class="cardImg" alt="">
// //   <h3 class="author">${card.author}</h3>
// //   <p class="publicDate">${card.publish_date}</p>
// //   <h1 class="title">${card.title}</h1>
// //   <div class="categoriesInBlog">
// //     ${cats}
// //   </div>
// //   <h2 class="description">${card.description}</h2>
// //   <div class="seeMoreDiv">
// //     <!-- Added id attribute to the "seeMore" link -->
// //     <a class="seeMore" id="seeMoreLink">სრულად ნახვა</a>
// //     <img src="assets/images/Arrow (1).svg" alt="SVG Image" class="svgImageRow">
// //   </div>
// // </div>
// //   `

// //   }


//   function createFullCard() {
//      let cats = '';
 
//     card.categories.forEach(cat => {
//       cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`
//       // categoriess.append(cat.id)
//     })
  
//     // Assuming 'card' and 'cats' are available in the scope
  
//   // Create the main card container
//   let cardContainer = document.createElement('div');
//   cardContainer.classList.add('card');
//   // console.log(cardContainer)
//   // Create the card image
//   const cardImage = document.createElement('img');
//   cardImage.src = card.image;
//   cardImage.alt = '';
//   cardImage.classList.add('cardImg');
  
//   // Create the author heading
//   const authorHeading = document.createElement('h3');
//   authorHeading.classList.add('author');
//   authorHeading.textContent = card.author;
  
//   // Create the public date paragraph
//   const publicDateParagraph = document.createElement('p');
//   publicDateParagraph.classList.add('publicDate');
//   publicDateParagraph.textContent = card.publish_date;
  
//   // Create the title heading
//   const titleHeading = document.createElement('h1');
//   titleHeading.classList.add('title');
//   titleHeading.textContent = card.title;
  
//   // Create the categories container
//   const categoriesContainer = document.createElement('div');
//   categoriesContainer.classList.add('categoriesInBlog');
//   categoriesContainer.innerHTML = cats;
  
//   // Create the description heading
//   const descriptionHeading = document.createElement('h2');
//   descriptionHeading.classList.add('description');
//   descriptionHeading.textContent = card.description;
  
//   // Create the seeMore container
//   const seeMoreContainer = document.createElement('div');
//   seeMoreContainer.classList.add('seeMoreDiv');
  
//   // Create the seeMore link
//   const seeMoreLink = document.createElement('a');
//   seeMoreLink.classList.add('seeMore');
//   seeMoreLink.id = 'seeMoreLink';
//   seeMoreLink.textContent = 'სრულად ნახვა';
//   // seeMoreLink.setAttribute("href", "pages/blog/blog.html")
  
 
  
//   // Create the arrow image
//   const arrowImage = document.createElement('img');
//   arrowImage.src = 'assets/images/Arrow (1).svg';
//   arrowImage.alt = 'SVG Image';
//   arrowImage.classList.add('svgImageRow');
  
//   // Append elements to the seeMore container
//   seeMoreContainer.appendChild(seeMoreLink);
//   seeMoreContainer.appendChild(arrowImage);
  
//   // Append all elements to the main card container
//   cardContainer.appendChild(cardImage);
//   cardContainer.appendChild(authorHeading);
//   cardContainer.appendChild(publicDateParagraph);
//   cardContainer.appendChild(titleHeading);
//   cardContainer.appendChild(categoriesContainer);
//   cardContainer.appendChild(descriptionHeading);
//   cardContainer.appendChild(seeMoreContainer);
  
//   // Assuming there is a parent container (replace 'parentContainer' with the actual parent container)
//   const parentContainer = document.querySelector('.blogContainer');
//   parentContainer.appendChild(cardContainer);

//   seeMoreLink.addEventListener('click', () => {
//     openDetailedView(card);
//   });

//   }
//   // let blogsContainer = document.querySelector('.blogContainer');
  
//   function openDetailedView(card) {
//     // Clear existing content
//     blogsContainer.innerHTML = '';
  
//     // Make an API request to fetch detailed blog data
//     fetch(`https://api.blog.redberryinternship.ge/api/blogs/1/${card.id}`)
//       .then(response => response.json())
//       .then(data => {
//         // Create elements for the detailed view
//         const detailedView = document.createElement('div');
//         detailedView.classList.add('detailed-view');
  
//         // Add content to the detailed view using the fetched data
//         detailedView.innerHTML = `
//           <h1>${data.title}</h1>
//           <p>${data.content}</p>
//           <!-- Add more content as needed -->
  
//           <a href="pages/blog/blog.html" class="back-to-blogs">უკავშირდება ბლოგებს</a>
//         `;
  
//         // Append the detailed view to the container
//         blogsContainer.appendChild(detailedView);
//       })
//       .catch(error => {
//         console.error('Error fetching blog details:', error);
//       });
//   }
  
  

//   function createBlogCard(card) {
//     let cats = '';
 
//     card.categories.forEach(cat => {
//       cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`
//       // categoriess.append(cat.id)
//     })
  
//     // Assuming 'card' and 'cats' are available in the scope
  
//   // Create the main card container
//   let cardContainer = document.createElement('div');
//   cardContainer.classList.add('card');
//   // console.log(cardContainer)
//   // Create the card image
//   const cardImage = document.createElement('img');
//   cardImage.src = card.image;
//   cardImage.alt = '';
//   cardImage.classList.add('cardImg');
  
//   // Create the author heading
//   const authorHeading = document.createElement('h3');
//   authorHeading.classList.add('author');
//   authorHeading.textContent = card.author;
  
//   // Create the public date paragraph
//   const publicDateParagraph = document.createElement('p');
//   publicDateParagraph.classList.add('publicDate');
//   publicDateParagraph.textContent = card.publish_date;
  
//   // Create the title heading
//   const titleHeading = document.createElement('h1');
//   titleHeading.classList.add('title');
//   titleHeading.textContent = card.title;
  
//   // Create the categories container
//   const categoriesContainer = document.createElement('div');
//   categoriesContainer.classList.add('categoriesInBlog');
//   categoriesContainer.innerHTML = cats;
  
//   // Create the description heading
//   const descriptionHeading = document.createElement('h2');
//   descriptionHeading.classList.add('description');
//   descriptionHeading.textContent = card.description;
  
//   // Create the seeMore container
//   const seeMoreContainer = document.createElement('div');
//   seeMoreContainer.classList.add('seeMoreDiv');
  
//   // Create the seeMore link
//   const seeMoreLink = document.createElement('a');
//   seeMoreLink.classList.add('seeMore');
//   seeMoreLink.id = 'seeMoreLink';
//   seeMoreLink.textContent = 'სრულად ნახვა';
//   seeMoreLink.setAttribute("href", "pages/blog/blog.html")
  
//   // seeMoreLink.addEventListener("click", (a) => {
//   //   blogsContainer.innerHTML = ''
//   //   createFullCard();
//   // })
  
//   // Create the arrow image
//   const arrowImage = document.createElement('img');
//   arrowImage.src = 'assets/images/Arrow (1).svg';
//   arrowImage.alt = 'SVG Image';
//   arrowImage.classList.add('svgImageRow');
  
//   // Append elements to the seeMore container
//   seeMoreContainer.appendChild(seeMoreLink);
//   seeMoreContainer.appendChild(arrowImage);
  
//   // Append all elements to the main card container
//   cardContainer.appendChild(cardImage);
//   cardContainer.appendChild(authorHeading);
//   cardContainer.appendChild(publicDateParagraph);
//   cardContainer.appendChild(titleHeading);
//   cardContainer.appendChild(categoriesContainer);
//   cardContainer.appendChild(descriptionHeading);
//   cardContainer.appendChild(seeMoreContainer);
  
//   // Assuming there is a parent container (replace 'parentContainer' with the actual parent container)
//   const parentContainer = document.querySelector('.blogContainer');
//   parentContainer.appendChild(cardContainer);
//   // console.log(parentContainer)
    
//   //   return `
//   //   <div class="card">
//   //   <img src="${card.image}" class="cardImg" alt="">
//   //   <h3 class="author">${card.author}</h3>
//   //   <p class="publicDate">${card.publish_date}</p>
//   //   <h1 class="title">${card.title}</h1>
//   //   <div class="categoriesInBlog">
//   //     ${cats}
//   //   </div>
//   //   <h2 class="description">${card.description}</h2>
//   //   <div class="seeMoreDiv">
//   //     <!-- Added id attribute to the "seeMore" link -->
//   //     <a class="seeMore" id="seeMoreLink">სრულად ნახვა</a>
//   //     <img src="assets/images/Arrow (1).svg" alt="SVG Image" class="svgImageRow">
//   //   </div>
//   // </div>
//   //   `
//   }
  
//     // Add event listener to the "See More" link to open the detailed view
//     seeMoreLink.addEventListener('click', () => {
//       openDetailedView(card);
//     });
  















let blogsAPIUrl = 'https://api.blog.redberryinternship.ge/api/blogs';
let categoriesURL = 'https://api.blog.redberryinternship.ge/api/categories';
let blogsAPIUrlId = 'https://api.blog.redberryinternship.ge/api/blogs/1';
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

// Load blogs on page load
fetch(blogsAPIUrl, {
  headers: authHeader
})
  .then((res) => res.json())
  .then((res) => {
    blogs = res.data;
    filteredBlogs = blogs;

    filteredBlogs.forEach((blog) => {
      createBlogCard(blog);
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

  button.addEventListener("click", () => {
    button.classList.toggle("active");
    filteredBlogs = filterBlogsByCategoryId(categoryData.id);
    blogsContainer.innerHTML = '';
    filteredBlogs.forEach((blog) => {
      createBlogCard(blog);
    });
  });

  return button;
}


headerImg.addEventListener("click", function(){
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
  // seeMoreLink.setAttribute("href", "pages/blog/blog.html");
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

  const parentContainer = document.querySelector(".blogContainer");
  parentContainer.appendChild(cardContainer);

  seeMoreLink.addEventListener("click", () => {
    openDetailedView(card);
  });
}

// function createBlogCardInSlider(card) {
//   let cardContainer = document.createElement("div");
//   cardContainer.classList.add("cardInSlider");
//   // ... (your existing code to create the card)

//   // Append the card to the sliderBlogs section
//   sliderBlogs.appendChild(cardContainer);
// }

// Function to open detailed view of a blog
function openDetailedView(card) {
  
  categoriesContainer.style.display = "none";
  main.innerHTML = "";
  blogsContainer.innerHTML = '';

  let cats = "";
  card.categories.forEach((cat) => {
    cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`;
  });
  // Include the authorization header
  let authHeader = {
    Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
  };

  fetch(`${blogsAPIUrl}/${card.id}`, {
    headers: authHeader
  })
    .then((response) => response.json())
    .then((data) => {
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

    let sliderDesc = document.createElement('div')
    sliderDesc.classList.add("sliderDesc")
    document.body.appendChild(sliderDesc)

    let similarArticles = document.createElement('h1')
    similarArticles.classList.add('similarArticles')
    similarArticles.innerText = 'მსგავსი სტატიები'
    sliderDesc.appendChild(similarArticles)

    let svgsDiv = document.createElement('div')
    svgsDiv.classList.add("svgsDiv")
    sliderDesc.appendChild('svgsDiv')

    let svgPrev = document.createElement('span')
    svgPrev.classList.add('svgPrev')
    svgsDiv.appendChild(svgPrev)

    let svgPost = document.createElement('span')
    svgPost.classList.add('svgPost')
    svgsDiv.appendChild(svgPost)


    
    
    // const similarBlogs = filterBlogsByCategories(card.categories);

    // // Display similar articles in the sliderBlogs section
    // sliderBlogs.innerHTML = '';
    // similarBlogs.forEach((blog) => {
    //   createBlogCardInSlider(blog);
    // });
   


}

// function filterBlogsByCategories(categories) {
//   const similarBlogs = blogs.filter((blog) => {
//     // Check if the blog has at least one common category with the detailed blog
//     return blog.categories.some((cat) => categories.some((detailedCat) => detailedCat.id === cat.id));
//   });
//   return similarBlogs;
// }


// // Function to create a blog card in the sliderBlogs section
// function createBlogCardInSlider(card) {

//   let cats = "";
//   card.categories.forEach((cat) => {
//     cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`;
//   });


//   let cardContainer = document.createElement("div");
//   cardContainer.classList.add("cardInSlider");
//   // ... (your existing code to create the card)
//   const cardImage = document.createElement("img");
//   cardImage.src = card.image;
//   cardImage.alt = "";
//   cardImage.classList.add("cardImg");
//   const authorHeading = document.createElement("h3");
//   authorHeading.classList.add("author");
//   authorHeading.textContent = card.author;
//   const publicDateParagraph = document.createElement("p");
//   publicDateParagraph.classList.add("publicDate");
//   publicDateParagraph.textContent = card.publish_date;
//   const titleHeading = document.createElement("h1");
//   titleHeading.classList.add("title");
//   titleHeading.textContent = card.title;
//   const categoriesContainer = document.createElement("div");
//   categoriesContainer.classList.add("categoriesInBlog");
//   categoriesContainer.innerHTML = cats;
//   const descriptionHeading = document.createElement("h2");
//   descriptionHeading.classList.add("description");
//   descriptionHeading.textContent = card.description;
//   const seeMoreContainer = document.createElement("div");
//   seeMoreContainer.classList.add("seeMoreDiv");
//   const seeMoreLink = document.createElement("a");
//   seeMoreLink.classList.add("seeMore");
//   seeMoreLink.id = "seeMoreLink";
//   seeMoreLink.textContent = "სრულად ნახვა";
//   // seeMoreLink.setAttribute("href", "pages/blog/blog.html");
//   const arrowImage = document.createElement("img");
//   arrowImage.src = "assets/images/Arrow (1).svg";
//   arrowImage.alt = "SVG Image";
//   arrowImage.classList.add("svgImageRow");

//   seeMoreContainer.appendChild(seeMoreLink);
//   seeMoreContainer.appendChild(arrowImage);

//   cardContainer.appendChild(cardImage);
//   cardContainer.appendChild(authorHeading);
//   cardContainer.appendChild(publicDateParagraph);
//   cardContainer.appendChild(titleHeading);
//   cardContainer.appendChild(categoriesContainer);
//   cardContainer.appendChild(descriptionHeading);
//   cardContainer.appendChild(seeMoreContainer);


  
//   sliderBlogs = document.createElement('div')
//     sliderBlogs.classList.add('sliderBlogs')
    
//   const parentContainer = document.querySelector(".blogContainer");
//   parentContainer.appendChild(cardContainer);
//   // Append the card to the sliderBlogs section
//   sliderBlogs.appendChild(cardContainer);
// }

// // Function to filter blogs by category ID
// function filterBlogsByCategoryId(categoryId) {
//   let filtered = blogs.filter((blog) => {
//     return blog.categories.some((cat) => cat.id == categoryId);
//   });
//   return filtered;
// }

// Event listener for login button
loginButton.addEventListener("click", () => {
  // let emailInput = document.querySelector(".emailInput").value;
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

  submitButton.addEventListener("click", function(){
    emailInput = document.querySelector(".emailInput");
    emailCheckFunc();
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

  document.body.style.overflow = "";
}





// let emailCheckFunc = () => {
//   if (emailInput.value.trim() === '' || !emailInput.value.endsWith('@redberry.ge') || ) {
//     // redError.innerHTML = `ელ-ფოსტა არ მოიძებნა`
//     emailInput.style.borderColor = 'red';
//     redError.style.display = "flex"

//   } else{
//     redError.style.display = "none"
//   }
// };


// let userInfo = {
//   "email": "gigagiorgadze@redberry.ge"
// };

// fetch("https://api.blog.redberryinternship.ge/api/login", {
//   method: "POST",
//   body: JSON.stringify(userInfo),
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("valid!");
//     } else {
//       alert("Doesn't");
//     }
//   });


// let emailCheckFunc = () => {
//   if (emailInput.value.trim() === '' || !emailInput.value.endsWith('@redberry.ge')) {
//     emailInput.style.borderColor = 'red';
//     redError.style.display = "flex";
//   } else {
//     emailInput.style.borderColor = ''; // Reset the border color
//     redError.style.display = "none";

//     // Perform the additional fetch request
//     let userInfo = {
//       "email": emailInput.value // Use the actual email input value
//     };

//     fetch("https://api.blog.redberryinternship.ge/api/login", {
//       method: "POST",
//       body: JSON.stringify(userInfo),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           console.log("valid!");
//         } else {
//           alert("Doesn't");
//         }
//       });
//   }
// };




let emailCheckFunc = () => {
  if (emailInput.value.trim() === '' || !emailInput.value.endsWith('@redberry.ge')) {
    emailInput.style.borderColor = 'red';
    redError.style.display = "flex";
  } else {
    emailInput.style.borderColor = ''; // Reset the border color
    redError.style.display = "none";

    // Perform the additional fetch request
    let userInfo = {
      "email": emailInput.value // Use the actual email input value
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
  successedAuth.innerText ='წარმატებული ავტორიზაცია'
  loginForm.appendChild(successedAuth)

  okButton = document.createElement("button");
  okButton.textContent = "კარგი";
  okButton.classList.add("okButton");
  loginForm.appendChild(okButton);

// ... (your existing code)

// ... (your existing code)
okButton.addEventListener('click', function () {
  // Redirect to index.html
  window.location.assign= 'index.html';

  // Modify the class of loginButton to make it look like addBlogButton
  const loginButton = document.querySelector(".loginButton");
  const addBlogButton = document.querySelector(".addBlogButton");
  
  loginButton.style.display = 'none';
  addBlogButton.classList.add("active");
  loginForm.style.display = 'none'
  // document.body.style.overflow = '';
  document.body.removeChild(overlay);
  // document.body.removeChild(loginForm);

  let addBlog = document.querySelector('.addBlog')
  addBlog.addEventListener('click', function(){
    window.location.href='pages/addBlog/addBlog.html';
  })

});


}


