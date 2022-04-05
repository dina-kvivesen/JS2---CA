# JS2---Course Assignment

Brief
Use the Strapi API (found here). The login details for admin section are in the README file in the repo.
You can add and edit content in the Strapi project but do not edit the content type(s) (don’t add, edit or delete fields). The markers will use the same version of the API found in the repo.

Choosing appropriate variable and function names will form part of your assessment, as will proper and consistent formatting of your code.
Process
Build a frontend for the API and add the following:

Home page
Make a GET request to fetch a list of resources from your API.
Create HTML for each item and display at least 3 properties for each.
Each item should also display a button or icon. Clicking on this button should toggle the item in and out of an array stored in localStorage.
There should be a text input on this page that filters the array of results on one of the properties.
Favourites page
This page should fetch the array of items stored in localStorage and display them or display a message that there are no items.
There should be a “Clear all” button that clears localStorage (or just a specific key in localStorage) and reloads the display. Don’t reload the page, just redraw the HTML.
