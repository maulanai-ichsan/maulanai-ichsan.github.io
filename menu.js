let menuItems = [
    {Text : 'Home', Url: '/index.html'},
    {Text : 'About', Url: '/about.html'},
    {Text : 'Team', Url: '/Team.html'},
    {Text : 'Blog', Url: '/Blog.html'},
    {Text : 'Course', Url: '/Course.html'},
    {Text : 'Portfolio', Url: '/Portfolio.html'},
]
let menu = document.createElement('ul')
menuItems.forEach(item => {
    let menuItem = document.createElement('li')
    let link = document.createElement('a')
    link.href = item.Url
    link.textContent = item.Text
    menuItem.appendChild(link)
    menu.appendChild(menuItem)
})
document.body.appendChild(menu)