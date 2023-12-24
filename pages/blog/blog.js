let blogsAPIUrl = 'https://api.blog.redberryinternship.ge/api/blogs'

let authHeader = {
    Authorization: `Bearer 823d881c4c01a9716d9358945e79ea1901c98205a2cacd8635bcaf5ae492c58e`
  }
let blogs;

  let container = document.querySelector(".container")

  fetch(blogsAPIUrl, {
    headers: authHeader
  }).then(res => res.json()).then(res => {
    blogs = res.data
    
        container.innerHTML += createFullCard()

  })






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