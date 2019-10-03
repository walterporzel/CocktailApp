import React, { Component } from "react";
import './App.css';
import Login from "../src/Login"
import Register from "../src/Register"
import Cocktails from "../src/Cocktails"
import Ingredients from "../src/Ingredients"
import CocktailDetail from "../src/CocktailDetail"
import IngredientDetail from "./IngredientDetail";
import { Route, Link } from "react-router-dom";
import Create from "./create";
import Update from "./update";
import UpdateIngredient from "./updateIngredient"
import AddIngredient from './addIngredient'

class App extends Component {

  render() {
    return (
      <div>
        <div className="topBar">
        <header><h1>Cocktail Hour</h1></header>
          <nav>
            <div className="mainLinks">
              <Link to="/cocktails">
                <h3>Cocktails</h3>
              </Link>
              <Link to="/ingredients">
                <h3>Ingredients</h3>
              </Link> 
            </div>              
            <Link to="/login" className="login">Sign Out</Link>
          </nav>
        </div>
          <main>
          <Route path="/" exact component = {Login} />
          <Route path="/login" exact component = {Login} />
          <Route path="/register" exact component = {Register} />
          <Route path="/cocktails" exact component = {Cocktails} />
          <Route path="/ingredients" exact component = {Ingredients} />
          <Route path="/cocktails/:cocktail" exact component = {CocktailDetail} />
          <Route path="/ingredients/:ingredient" exact component ={IngredientDetail}/>
          <Route path="/create" exact component = {Create} />
          <Route path="/updateCocktail" exact component = {Update} />
          <Route path="/updateIngredient" exact component = {UpdateIngredient} />
          <Route path="/addIngredient" exact component = {AddIngredient} />
        </main>
      </div>
    );
  }
}


export default App;
