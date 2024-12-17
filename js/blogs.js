fetch('./assets/json/blogs.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(blogs => {
    const blogsWrapper = document.querySelector(".blogs-wrapper");
    blogs.forEach(blog => {
      const blogWrapper = document.createElement("div");
      blogWrapper.classList.add("blog-wrapper");
      blogsWrapper.appendChild(blogWrapper);

      const blogImage = document.createElement("img");
      blogImage.classList.add("blog-img");
      blogImage.src = blog.image;
      blogWrapper.appendChild(blogImage);

      const blogImageOuterWrapper = document.createElement("div");
      blogImageOuterWrapper.classList.add("blog-image-outer-wrapper");
      blogWrapper.appendChild(blogImageOuterWrapper);

      const blogDate = document.createElement("p");
      blogDate.classList.add("blog-date");
      blogDate.textContent = blog.date;
      blogImageOuterWrapper.appendChild(blogDate);

      const blogInfo = document.createElement("h3");
      blogInfo.classList.add("blog-title");
      blogInfo.textContent = blog.info;
      blogImageOuterWrapper.appendChild(blogInfo);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
