fetch('./assets/json/services.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(services => {
    const what_i_doServicesWrapper = document.querySelector(".what_i_do-services-wrapper");

    services.forEach(service => {
      const service_cardWrapper = document.createElement("div");
        service_cardWrapper.classList.add("service_card-wrapper");
        what_i_doServicesWrapper.appendChild(service_cardWrapper);

      const serviceTitle = document.createElement("h3");
        serviceTitle.classList.add("service-title");
        serviceTitle.textContent = service.title;
        service_cardWrapper.appendChild(serviceTitle);

      const serviceDescription = document.createElement("p");
        serviceDescription.classList.add("service-description");
        serviceDescription.textContent = service.description;
        service_cardWrapper.appendChild(serviceDescription);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
