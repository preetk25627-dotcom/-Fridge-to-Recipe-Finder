# Fridge-to-Recipe Finder

## Project Overview

Fridge-to-Recipe Finder is a web application that helps users discover recipes based on the ingredients they already have at home. Instead of searching for a recipe and then buying ingredients, users can enter what is already in their fridge and get suggestions for meals they can make right now. The goal is to reduce food waste and take the stress out of deciding what to cook on a daily basis.

## Purpose

A common problem many people face is having a fridge full of ingredients but no idea what to cook. This app solves that by letting users input their available ingredients and instantly showing them relevant recipes. It is especially useful for reducing food waste, saving money on groceries, and making everyday cooking decisions faster and easier.

## API Used

This project uses the Spoonacular API, which provides a comprehensive database of recipes, ingredients, and nutritional information. The specific endpoint being used is the "Find Recipes by Ingredients" feature, which accepts a list of ingredients and returns matching recipes along with details like cooking time, servings, and instructions.

API Reference:https://dummyjson.com/recipes

## Planned Features

- Ingredient input field where users can type and add multiple ingredients
- Recipe search that fetches results based on the entered ingredients
- Filtering options to narrow results by dietary preference such as vegetarian or vegan
- Sorting options to arrange recipes by cooking time or popularity
- Recipe detail view showing the full list of ingredients and step-by-step cooking instructions
- Favorites feature to save recipes for later reference (planned for a future milestone)

## Technologies Used

- React.js for building the user interface
- JavaScript (ES6+) for application logic
- HTML and CSS for structure and styling
- Spoonacular REST API for recipe data
- Fetch API for making HTTP requests

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/preetk25627-dotcom/fridge-recipe-finder

2. Navigate into the project folder:

   cd fridge-recipe-finder

3. Install the required dependencies:

   npm install

4. Create a .env file in the root directory and add your Spoonacular API key:

   VITE_SPOONACULAR_API_KEY=your_api_key_here

5. Start the development server:

   npm run dev

6. Open your browser and go to http://localhost:5173 to view the app.

## Project Structure

The project will be organized with separate files handling API calls, UI rendering, and event logic to keep the codebase clean and maintainable. Array higher-order functions such as filter, map, and sort will be used throughout for searching, filtering, and sorting recipe data.

## Future Enhancements

- User authentication and personal accounts
- Nutrition information displayed per recipe
- Dark mode and light mode toggle
- Local storage support for saving favorites across sessions
- Pagination or infinite scroll for large result sets

## Author

Preet Kalra
