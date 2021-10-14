import { baseUrl } from "./settings/api.js";
const articlesUrl = baseUrl + "articles";

import createHtml from "./components/createHtml.js";
import displayMessage from "./components/displayMessage.js";
const search = document.querySelector(".search");

async function searchArticles() {
  try {
      const response = await fetch(articlesUrl);
      const json = await response.json();

      for (let i = 0; i < json.length; i++) {
  
        search.onkeyup = function (event) {
        
          const searchValue = event.target.value.trim().toLowerCase();
        
          const filteredArticles = json.filter(function(filterArticle) {
            if(filterArticle.title.toLowerCase().startsWith(searchValue)) {
              return true;
            } else {
              return false;
            }
          });
          createHtml(filteredArticles, '.result-container');
        };
       
        };

      createHtml(json, '.result-container');
  } catch (error) {
      console.log(error);
      displayMessage('error', error, '.result-container');
  }
}
searchArticles();


