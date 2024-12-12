function fetchRSS() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
      displayBlogDetails(xmlDoc);
    }
  };
  xhr.open("GET", "https://ikon.mn/rss", true);
  xhr.send();
}

function displayBlogDetails(xmlDoc) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"));

  const items = xmlDoc.getElementsByTagName("item");
  if (id >= 0 && id < items.length) {
    const title = items[id].getElementsByTagName("title")[0].textContent;
    const description =
      items[id].getElementsByTagName("description")[0].textContent;
    const pubDate = items[id].getElementsByTagName("pubDate")[0].textContent;
    const link = items[id].getElementsByTagName("link")[0].textContent;

    const blogDetails = document.getElementById("blog-details");
    blogDetails.innerHTML = `
            <h2>${title}</h2>
            <p>${new Date(pubDate).toLocaleString("mn-MN")}</p>
            <div>${description}</div>
            <p><a href="${link}" target="_blank">Эх сурвалж</a></p>
        `;
  } else {
    const blogDetails = document.getElementById("blog-details");
    blogDetails.innerHTML = "<p>Мэдээ олдсонгүй.</p>";
  }
}

fetchRSS();
