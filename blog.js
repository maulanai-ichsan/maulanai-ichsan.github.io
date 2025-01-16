
const container = document.getElementsByClassName('container')[0];
function generateBox(Blog) {
    const box = document.createElement('div');
    box.className = "box"
    container.appendChild(box)
    const img = document.createElement('img');

    const title = document.createElement('h3')
    title.innerText = Blog.title
    box.appendChild(title);

    const category = document.createElement('p')
    category.innerText = Blog.category
    box.appendChild(category);

    img.className = "media"
    img.src= Blog.image
    box.appendChild(img);

   
    // const path = document.createElement('p')
    // path.innerText = Blog.path
    // box.appendChild(path)
}

fetch ('https://fahram.dev/api/v2/posts')
.then(response => response.json())
.then(data => data.data.forEach(blog => generateBox(blog)))