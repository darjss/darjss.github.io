const listingsData = [
  {
    image: "https://picsum.photos/300/200",
    location: "Moss Beach, California",
    rating: 4.92,
    description: "Beach views",
    dates: "5 nights · Dec 15–20",
    price: "$3,490 total before taxes",
  },
  {
    image: "https://picsum.photos/300/200",
    location: "Daly City, California",
    rating: 4.8,
    description: "Beach and bay views",
    dates: "5 nights · Dec 12–17",
    price: "$2,811 total before taxes",
  },
  {
    image: "https://picsum.photos/300/200",
    location: "Half Moon Bay, California",
    rating: 4.82,
    description: "Beach and ocean views",
    dates: "5 nights · Dec 12–17",
    price: "$2,019 total before taxes",
  },
  {
    image: "https://picsum.photos/300/200",
    location: "Santa Cruz, California",
    rating: 4.84,
    description: "Ocean views",
    dates: "5 nights · Dec 12–17",
    price: "$7,874 total before taxes",
  },
  {
    image: "https://picsum.photos/300/200",
    location: "Half Moon Bay, California",
    rating: 4.98,
    description: "Beach and ocean views",
    dates: "5 nights · Jan 3–8",
    price: "$1,647 total before taxes",
  },
  {
    image: "https://picsum.photos/300/200",
    location: "Half Moon Bay, California",
    rating: 4.97,
    description: "Beach and ocean views",
    dates: "5 nights · Jan 1–6",
    price: "$2,104 total before taxes",
  },
];

function createListingElement(listing) {
  const listingElement = document.createElement("div");
  listingElement.classList.add("listing");

  listingElement.innerHTML = `
    <img src="${listing.image}" alt="${listing.location}">
    <div class="listing-info">
      <h3>${listing.location}</h3>
      <p>${listing.rating} <span class="star">★</span></p>
      <p>${listing.description}</p>
      <p>${listing.dates}</p>
      <p><strong>${listing.price}</strong></p>
    </div>
  `;

  return listingElement;
}

function renderListings() {
  const listingsContainer = document.getElementById("listings-container");
  listingsData.forEach((listing) => {
    const listingElement = createListingElement(listing);
    listingsContainer.appendChild(listingElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderListings();

  const showMapBtn = document.getElementById("showMapBtn");
  const closeMapBtn = document.getElementById("closeMapBtn");
  const mapModal = document.getElementById("mapModal");

  showMapBtn.addEventListener("click", () => {
    mapModal.classList.add("active");
  });

  closeMapBtn.addEventListener("click", () => {
    mapModal.classList.remove("active");
  });

  mapModal.addEventListener("click", (e) => {
    if (e.target === mapModal) {
      mapModal.classList.remove("active");
    }
  });
});
