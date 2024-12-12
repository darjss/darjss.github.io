const listingsData = [
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Moss Beach, California",
    rating: 4.92,
    description: "Beach views",
    dates: "5 nights · Dec 15–20",
    price: "$3,490",
    isSuperhost: true,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Daly City, California",
    rating: 4.8,
    description: "Beach and bay views",
    dates: "5 nights · Dec 12–17",
    price: "$2,811",
    isSuperhost: false,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Santa Cruz, California",
    rating: 4.95,
    description: "Oceanfront villa with pool",
    dates: "5 nights · Dec 18–23",
    price: "$4,250",
    isSuperhost: true,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Monterey, California",
    rating: 4.87,
    description: "Historic cottage near aquarium",
    dates: "5 nights · Dec 20–25",
    price: "$2,195",
    isSuperhost: false,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Carmel-by-the-Sea, California",
    rating: 4.99,
    description: "Luxury beachfront mansion",
    dates: "5 nights · Dec 22–27",
    price: "$5,890",
    isSuperhost: true,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Big Sur, California",
    rating: 4.96,
    description: "Cliffside retreat with hot tub",
    dates: "5 nights · Dec 14–19",
    price: "$3,975",
    isSuperhost: true,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Pacific Grove, California",
    rating: 4.85,
    description: "Cozy lighthouse cottage",
    dates: "5 nights · Dec 16–21",
    price: "$2,450",
    isSuperhost: false,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Capitola, California",
    rating: 4.88,
    description: "Colorful beach bungalow",
    dates: "5 nights · Dec 19–24",
    price: "$2,750",
    isSuperhost: false,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Aptos, California",
    rating: 4.91,
    description: "Modern beach house with deck",
    dates: "5 nights · Dec 21–26",
    price: "$3,150",
    isSuperhost: true,
  },
  {
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/75fc88fe-9595-4db4-967c-c77ab4ccb7a8",
      "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/f14ab6e0-a331-4362-ba70-8f47b0d7cb7c",
    ],
    location: "Half Moon Bay, California",
    rating: 4.94,
    description: "Oceanview penthouse suite",
    dates: "5 nights · Dec 23–28",
    price: "$3,890",
    isSuperhost: true,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const listingsContainer = document.getElementById("listings-container");
  const listingTemplate = document.getElementById("listing-template");

  function createListing(data) {
    const listing = listingTemplate.content.cloneNode(true);
    const listingElement = listing.querySelector(".listing");

    if (data.isSuperhost) {
      listingElement.classList.add("superhost");
    }

    const carousel = listing.querySelector(".image-carousel");
    const carouselContainer = document.createElement("div");
    carouselContainer.className = "carousel-container";
    carousel.appendChild(carouselContainer);

    data.images.forEach((imageUrl, index) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = `${data.location} - Image ${index + 1}`;
      img.style.display = index === 0 ? "block" : "none";
      img.dataset.index = index;
      carouselContainer.appendChild(img);
    });

    const indicators = listing.querySelector(".image-indicators");
    data.images.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.className = `indicator ${index === 0 ? "active" : ""}`;
      indicator.dataset.index = index;
      indicator.addEventListener("click", (e) => {
        const newIndex = parseInt(e.target.dataset.index);
        updateImage(newIndex, listing);
        currentImageIndex = newIndex;
      });
      indicators.appendChild(indicator);
    });

    listing.querySelector(".listing-location").textContent = data.location;
    listing.querySelector(".rating-value").textContent = data.rating;
    listing.querySelector(".listing-description").textContent =
      data.description;
    listing.querySelector(".listing-dates").textContent = data.dates;
    listing.querySelector(".price-value").textContent = data.price;

    let currentImageIndex = 0;
    const totalImages = data.images.length;

    const prevButton = listing.querySelector(".prev");
    const nextButton = listing.querySelector(".next");

    function updateImage(index, listingElement) {
      const images = listingElement.querySelectorAll(".carousel-container img");
      const indicators = listingElement.querySelectorAll(".indicator");

      images.forEach((img) => {
        img.style.display = "none";
      });

      indicators.forEach((ind) => {
        ind.classList.remove("active");
      });

      images[index].style.display = "block";
      indicators[index].classList.add("active");

      prevButton.style.display = index === 0 ? "none" : "flex";
      nextButton.style.display = index === totalImages - 1 ? "none" : "flex";
    }

    prevButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateImage(currentImageIndex, listingElement);
      }
    });

    nextButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentImageIndex < totalImages - 1) {
        currentImageIndex++;
        updateImage(currentImageIndex, listingElement);
      }
    });

    const favoriteButton = listing.querySelector(".favorite-button");
    const heartIcon = favoriteButton.querySelector("i");
    heartIcon.classList.add("fa-regular", "fa-heart");

    favoriteButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      favoriteButton.classList.toggle("active");
      heartIcon.classList.toggle("fa-regular");
      heartIcon.classList.toggle("fa-solid");
    });

    listingElement.addEventListener("mouseenter", () => {
      if (totalImages > 1) {
        prevButton.style.opacity = "1";
        nextButton.style.opacity = "1";
      }
    });

    listingElement.addEventListener("mouseleave", () => {
      prevButton.style.opacity = "0";
      nextButton.style.opacity = "0";
    });

    carouselContainer.addEventListener("mouseenter", () => {
      listingElement.classList.add("hover");
    });

    carouselContainer.addEventListener("mouseleave", () => {
      listingElement.classList.remove("hover");
    });

    updateImage(0, listingElement);
    return listing;
  }

  listingsData.forEach((data) => {
    listingsContainer.appendChild(createListing(data));
  });

  const searchButtons = document.querySelectorAll(".search-button");
  searchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      searchButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const filtersContainer = document.querySelector(".filters");
  const filterCategories = [
    "Amazing views",
    "Trending",
    "Private rooms",
    "OMG!",
    "Beach",
    "Tiny homes",
    "Islands",
    "Play",
    "Skiing",
    "Lakes",
    "Arctic",
    "Amazing pools",
    "Caves",
    "Tropical",
    "Bed & breakfasts",
  ];

  filterCategories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "filter-button";
    button.textContent = category;
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
    filtersContainer.appendChild(button);
  });

  const showMapBtn = document.createElement("button");
  showMapBtn.className = "show-map-button";
  showMapBtn.innerHTML = 'Show map <i class="fas fa-map"></i>';
  document.body.appendChild(showMapBtn);

  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const header = document.querySelector(".header");
    const filters = document.querySelector(".filters");
    const showMapButton = document.querySelector(".show-map-button");

    if (currentScrollY > lastScrollY) {
      header.style.transform = "translateY(-100%)";
      filters.style.transform = "translateY(-100%)";
      showMapButton.style.transform = "translate(-50%, 150%)";
    } else {
      header.style.transform = "translateY(0)";
      filters.style.transform = "translateY(0)";
      showMapButton.style.transform = "translate(-50%, 0)";
    }

    lastScrollY = currentScrollY;
  });

  const languageSelector = document.querySelector(".language-selector");
  const currencySelector = document.querySelector(".currency-selector");

  [languageSelector, currencySelector].forEach((selector) => {
    if (selector) {
      selector.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(`${e.currentTarget.className} clicked`);
      });
    }
  });
});
