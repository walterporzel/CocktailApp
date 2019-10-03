import React, { Component } from "react";
import './App.css';
import Cocktails from "../src/Cocktails"
import Ingredients from "../src/Ingredients"
import CocktailDetail from "../src/CocktailDetail"
import IngredientDetail from "./IngredientDetail";
import { Route, Link } from "react-router-dom";
import Create from "./create";
import Update from "./update";
import UpdateIngredient from "./updateIngredient"
import Delete from "./deleteIngredient";


class App extends Component {
  render() {
    return (
      <div>
        <div className="topBar">
        <header><h1>Cocktail Hour</h1></header>
          <nav>
            <Link to="/cocktails">
              <h3>Cocktails</h3>
            </Link>
            <Link to="/ingredients">
              <h3>Ingredients</h3>
            </Link>               
            <Link to="/create">
              <h3>Create Cocktail</h3>
            </Link>
            <Link to="/updateCocktail">
              <h3>Update Cocktail</h3>
            </Link>
            <Link to="/updateIngredient">
              <h3>Update Ingredient</h3>
            </Link>
          </nav>
        </div>
          <main>
          <Route path="/cocktails" 
          exact component = {Cocktails} />
          <Route path="/ingredients" exact component = {Ingredients} />
          <Route path="/cocktails/:cocktail" exact component = {CocktailDetail} />
          <Route path="/ingredients/:ingredient" exact component ={IngredientDetail}/>
          <Route path="/create" exact component = {Create} />
          <Route path="/updateCocktail" exact component = {Update} />
          <Route path="/updateIngredient" exact component = {UpdateIngredient} />
        </main>
      </div>
    );
  }
}


export default App;
