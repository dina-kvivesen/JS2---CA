import { getExistingFavs } from "./favFunctions.js";
export default function createHtml(article, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = "";
    
    const favourites = getExistingFavs();

    for (let i = 0; i < article.length; i++) {
        let cssClass = "far";
        const doesObjectExists = favourites.find(function(fav) {

            return parseInt(fav.id) === article[i].id;
        })

        if(doesObjectExists) {
            cssClass = "fa";
        }
        element.innerHTML += `<div class="result">
                                <h4>${article[i].title}</h4>
                                <p>${article[i].summary}</p>
                                <p> By: ${article[i].author}</p>
                                <p> Published: ${article[i].published_at}</p>
                                <i class="${cssClass} fa-heart" data-id="${article[i].id}" data-name="${article[i].title}"></i>
                                </div>`;
    }

const favButtons = document.querySelectorAll(".result i");

favButtons.forEach((button) => {
    button.addEventListener("click", toggleFavourites);
});

function toggleFavourites(event) {
    
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = event.target.dataset.id;
    const name = event.target.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function(fav) {
        return fav.id === id;
    });

    if(!productExists) {
        const product = { id: id, name: name};
        currentFavs.push(product);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter(fav => fav.id !== id);
        saveFavs(newFavs);
    }
}
function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}
}