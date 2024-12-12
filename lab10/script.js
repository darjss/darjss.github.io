function fetchRSS() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
      displayBlogPosts(xmlDoc);
    }
  };
  xhr.open("GET", "https://ikon.mn/rss", true);
  xhr.send();
}

function displayBlogPosts(xmlDoc) {
  const blogList = document.getElementById("blog-list");
  const items = xmlDoc.getElementsByTagName("item");
  const maxPosts = Math.min(items.length, 10);

  for (let i = 0; i < maxPosts; i++) {
    const title = items[i].getElementsByTagName("title")[0].textContent;
    const description =
      items[i].getElementsByTagName("description")[0].textContent;
    const pubDate = items[i].getElementsByTagName("pubDate")[0].textContent;
    const link = items[i].getElementsByTagName("link")[0].textContent;

    const blogItem = document.createElement("div");
    blogItem.className = "blog-item";
    blogItem.innerHTML = `
            <h2><a href="details.html?id=${i}">${title}</a></h2>
            <p>${new Date(pubDate).toLocaleString("mn-MN")}</p>
            <p>${description.substring(0, 150)}...</p>
        `;
    blogList.appendChild(blogItem);
  }
}

fetchRSS();
