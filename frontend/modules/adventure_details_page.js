import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let Url = new URLSearchParams(search);
  let data = Url.get("adventure")
  // console.log(data)
  return data;
  // Place holder for functionality to work in the Stubs
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    let resopnse = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`)
    let data = await resopnse.json()
    // Place holder for functionality to work in the Stubs
  console.log(data)
    return data;
  }catch{
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let contentId = document.getElementById("adventure-content")
  contentId.innerHTML += `<div>${adventure.content}</div>`

  let nameId = document.getElementById("adventure-name");
  nameId.innerHTML = `${adventure.name}`

  let sunId = document.getElementById("adventure-subtitle")
  sunId.innerHTML = `${adventure.subtitle}`

  let imageId = document.getElementById("photo-gallery");

  for(let i=0;i<(adventure.images).length;i++){
    imageId.innerHTML += `<div>
    <img src=${adventure.images[i]} alt=${adventure.name} class="activity-card-image">`
  }

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let imageId = document.getElementById("photo-gallery");
  imageId.innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner"></div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
  let querySel = document.querySelector("#carouselExampleIndicators > div.carousel-inner")
  for(let i=0;i<images.length;i++){
    if(i==0){
      querySel.innerHTML += `<div  class="carousel-item active">
    <img src=${images[i]}  class="activity-card-image d-block w-100">
    </div>`
    continue;
    }
    querySel.innerHTML += `<div  class="carousel-item">
    <img src=${images[i]}  class="activity-card-image d-block w-100">
    </div>`
  }
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
