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
    blogsContainer.innerHTML += createBlogCard(blog)
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
      blogsContainer.innerHTML += createBlogCard(blog);
    });
  });

  return button;
}





function createBlogCard(card) {
  let cats = '';
 
  card.categories.forEach(cat => {
    cats += ` <span class="category" style="color: ${cat.text_color}; background-color: ${cat.background_color}" id="${cat.id}"> ${cat.title}  </span>`
  })

  // const cardDiv = document.createElement('div');
  // cardDiv.classList.add('card');

  // const img = document.createElement('img');
  // img.src = card.image;
  // img.alt = '';

  // const author = document.createElement('h3');
  // author.classList.add('author');
  // author.textContent = card.author;

  // const pubDate = document.createElement('p');
  // pubDate.classList.add('pubicDate');
  // pubDate.textContent = card.publish_date;

  // const title = document.createElement('h1');
  // title.classList.add('title');
  // title.textContent = card.title;

  // const categoriesDiv = document.createElement('div');
  // categoriesDiv.classList.add('categoriesInBlog');
  // card.categories.forEach(category => {
  //   const span = document.createElement('span');
  //   span.textContent = category;
  //   categoriesDiv.appendChild(span);
  // });

  // const description = document.createElement('h2');
  // description.classList.add('description');
  // description.textContent = card.description;

  // const seeMore = document.createElement('a');
  // seeMore.classList.add('seeMore');
  // seeMore.textContent = 'ნახე მეტი';

  // // Append elements to cardDiv
  // cardDiv.appendChild(img);
  // cardDiv.appendChild(author);
  // cardDiv.appendChild(pubDate);
  // cardDiv.appendChild(title);
  // cardDiv.appendChild(categoriesDiv);
  // cardDiv.appendChild(description);
  // cardDiv.appendChild(seeMore);

  // return cardDiv;
  
  return `
  <div class="card">
    <img src="${card.image}" class = "cardImg" alt="">
    <h3 class="author">${card.author}</h3>
    <p class="publicDate">${card.publish_date}</p>
    <h1 class="title">${card.title}</h1>
    <div class="categoriesInBlog">
      ${cats}
    </div>
    <h2 class="description">${card.description}</h2>
    <a class="seeMore">სრულად ნახვა</a> 
</div>
  `
}



function filterBlogsByCategoryId(categoryId) {
  let filtered = blogs.filter(blog => {
    return blog.categories.some(cat => cat.id == categoryId)
  })
  return filtered;
}




  loginButton.addEventListener("click", () => {
   
    // body.style.background = '#1A1A1F;'
    // body.style.opacity = 0.24;

    // let loginContainer = document.createElement('div')
    // loginContainer.classList.add('loginContainer')
    loginContainer.innerHTML = '';

    // Append the login form to the loginContainer
    loginContainer.appendChild(appearLogin());

  })

  // let userInfo = {
  //   "email": "gigagiorgadze@redberry.ge"
  // }

  // fetch("https://api.blog.redberryinternship.ge/api/login", {
  //   method: "POST",
  //   body: JSON.stringify(userInfo),
  //   headers: {
  //     "Content-Type": "application/json",
  //     'Accept': 'application/json',
  //   },
  // }).then(res => {
  //   if(res.ok){
  //     alert("წარმატებით გაიარე")
  //   }else{
  //     alert("არასწორია მონაცმეები")
  //   }
  // })
// })


// function appearLogin(){

//   document.body.style.opacity = 0.24;
//   document.body.style.backgroundColor = 'black;'
  
//   document.body.style.alignItems = 'center';
//   document.body.style.justifyContent = 'center';
//   document.body.style.height = '100vh';

//   let overlay = document.createElement('div');
//   overlay.classList.add('overlay');
//   document.body.appendChild(overlay);

//   let loginForm = document.createElement('div')
//   loginForm.classList.add('loginForm')

//   let loginTitle = document.createElement('h1')
//   loginTitle.classList.add('loginTitle')

//   let loginMailDiv = document.createElement('div')
//   loginMailDiv.classList.add('loginMailDiv')

//   let loginMail = document.createElement('p')
//   loginMail.classList.add('loginMail')

//   let loginInput = document.createElement('input')
//   loginInput.type = "email Example@redberry.ge ";
//   loginInput.classList.add('loginInput')

//   let loginButton = document.createElement('button')
//   loginButton.classList.add('loginButton')

//   loginContainer.appendChild(loginForm)
//   loginMailDiv.appendChild(loginMail)
    
// }

function appearLogin() {
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  let loginForm = document.createElement('div');
  loginForm.classList.add('loginForm');
  document.body.appendChild(loginForm);

  // Add your login form content here

  centerLoginForm(loginForm);

  // Add event listener to close the login form
  overlay.addEventListener('click', closeLoginForm);

  return loginForm; // Return the login form element
}

function centerLoginForm(loginForm) {
  let topPosition = (window.innerHeight - loginForm.offsetHeight) / 2;
  let leftPosition = (window.innerWidth - loginForm.offsetWidth) / 2;

  loginForm.style.top = topPosition + 'px';
  loginForm.style.left = leftPosition + 'px';
}

function closeLoginForm() {
  let overlay = document.querySelector('.overlay');
  let loginForm = document.querySelector('.loginForm');

  document.body.removeChild(overlay);
  document.body.removeChild(loginForm);

  document.body.style.overflow = ''; // Restore scrolling
}

loginButton.addEventListener('click', () => {
  let loginForm = appearLogin();
  document.body.style.overflow = 'hidden'; // Hide scrollbar
});



