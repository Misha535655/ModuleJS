let items
fetch('https://api.tvmaze.com/search/shows?q=car').then((response) => {
        return response.json();
    })
    .then((data) => {
        renderCatalog(data)
    });

function renderCatalog(data) {
    debugger
    data.map((data) => {
        let catalog = document.getElementById('catalog');
        let container = document.createElement('div')
        container.classList.add('film')
        container.innerHTML = `<img src="${data.show.image.original}" alt="">`
        catalog.appendChild(container)
    })
}