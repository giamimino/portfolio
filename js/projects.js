fetch('./assets/json/projects.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(projects => {
    const portfolio_projectsWrapper = document.querySelector(".portfolio_projects-wrapper");
    projects.forEach(project => {
      const portfolio_projectWrapper = document.createElement("div");
      portfolio_projectWrapper.classList.add("portfolio_project-wrapper");
      portfolio_projectsWrapper.appendChild(portfolio_projectWrapper);

      const portfolio_projectImage = document.createElement("img");
      portfolio_projectImage.classList.add("project-img");
      portfolio_projectImage.src = project.image;
      portfolio_projectWrapper.appendChild(portfolio_projectImage);

      const portfolio_projectImgOuterWrapper = document.createElement("div");
      portfolio_projectImgOuterWrapper.classList.add("portfolio_project-img_outer-wrapper");
      portfolio_projectWrapper.appendChild(portfolio_projectImgOuterWrapper);

      const projectCategory = document.createElement("p");
      projectCategory.classList.add("project-category");
      projectCategory.textContent = project.category;
      portfolio_projectImgOuterWrapper.appendChild(projectCategory);

      const projectTitle = document.createElement("h1");
      projectTitle.classList.add("project-title");
      projectTitle.textContent = project.title;
      portfolio_projectImgOuterWrapper.appendChild(projectTitle);

      const project_subtext = document.createElement("p");
      project_subtext.classList.add("project_subtext");
      project_subtext.textContent = project.info;
      portfolio_projectImgOuterWrapper.appendChild(project_subtext);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = `<ion-icon name="arrow-forward-outline" class="project-icon_left"></ion-icon><span>Case Study</span><ion-icon name="arrow-forward-outline" class="project-icon_right"></ion-icon>`;
      portfolio_projectImgOuterWrapper.appendChild(btn);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
