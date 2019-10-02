import React, { Component } from "react";
import './App.css';
import Cocktails from "../src/Cocktails"
import Ingredients from "../src/Ingredients"
import CocktailDetail from "../src/CocktailDetail"
import { Route, Link } from "react-router-dom";
import IngredientDetail from "./IngredientDetail";

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
          </nav>
        </div>
          <main>
          <Route path="/cocktails" exact component = {Cocktails} />
          <Route path="/ingredients" exact component = {Ingredients} />
          <Route path="/cocktails/:cocktail" exact component = {CocktailDetail} />
          <Route path="/ingredients/:ingredient" exact component ={IngredientDetail}/>
        </main>
      </div>
    );
  }
}


export default App;
