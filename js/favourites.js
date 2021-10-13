import { getExistingFavs } from "./components/favFunctions.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".result-container");



if(favourites.length === 0) {
  productContainer.innerHTML = "No favourites yet";
}

favourites.forEach(favourite => {
  
  productContainer.innerHTML += `<div class="result">
                                <h4>${favourite.name}</h4>
                                <i class="fa fa-heart"></i>
                                </div>`
})

function removeButton() {
  const removeBtn = document.querySelector("#remove");

  removeBtn.addEventListener("click", clearList);

  function clearList() {
      if (confirm("Are you sure?")) {
          // clear the localstorage
          localStorage.clear();
          // clear the list
          productContainer.innerHTML = "";
      }
  }
}
removeButton();
