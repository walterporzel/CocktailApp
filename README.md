# The Cocktail Hour

## Description

It’s saturday night, you just stocked your bar, and have friends coming over for drinks. There’s only one problem - you have no idea what to make! Well have no fear, with our cocktail application you’ll be creating mixed drink masterpieces in no time sure to make you the toast of the town.

The cocktail hour is a full stack application utilizing an express API backend and a React front end. Users can search utilize our aesthetically designed UI to search through a large database of cocktails, find the perfect drink, and follow the simple directions to concoct their chosen beverage:

![Cocktail screen](./appImage.png)

## List of Features

The application database contains two main models: ingredients and cocktails. Each model is built with create, read, update and delete functionality allowing end users to manipulate backend databases easily from front end forms utilizing different fetch requests. The React UI is built utilizing React Router allowing users to rapidly toggle between multiple views. 

If a user navigates to the cocktails view by clicking the link in the navigation bar at the top of the homepage, they will see a display image of every cocktail in our database. They have the option to create or update existing cocktails by utilizing the navigation links displayed at the bottom of the page. Cocktails can further be deleted by entering the name at the top of the page and submitting. A live filter search bar is set up to allow users to rapidly locate specific drinks, which updates the display with matching results as the user types. Once the perfect drink is located, users can click on the display card to see the specific glass and ingredients required, as well as specific mixing instructions.

The same functionality is built out on the ingredients model, with the added bonus of a description field which tells end users a bit more about the different ingredients they are putting in their drinks.

## Technologies Used

* Node.js
* Express
* Mongoose
* MongoDB
* React
* React-Router
* Javascript
* Cascading Style Sheets (CSS)
 
