const container = document.getElementsByClassName('container')[0];
function generateBox(portfolios) {
    const box = document.createElement('div');
    box.className = "box"
    container.appendChild(box)
    const img = document.createElement('img');

    const title = document.createElement('h3')
    title.innerText = portfolios.title
    box.appendChild(title);

    const category = document.createElement('p')
    category.innerText = portfolios.category
    box.appendChild(category);

    img.className = "media"
    img.src= portfolios.image
    box.appendChild(img);

   
    // const path = document.createElement('p')
    // path.innerText = portfolios.path
    // box.appendChild(path)
}

fetch ('https://fahram.dev/api/v2/portfolios')
.then(response => response.json())

.then(data => data.data.forEach(portfolios => generateBox(portfolios)))