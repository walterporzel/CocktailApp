import React, { Component } from "react";
import './App.css';
import Login from "./components/LogIn/Login"
import Register from "./components/Register/Register"
import Cocktails from "./components/Cockatils/Cocktails"
import Ingredients from "./components/Ingredients/Ingredients"
import CocktailDetail from "./components/CocktailDetail/CocktailDetail"
import IngredientDetail from "./components/IngredientDetail/IngredientDetail";
import { Route, Link } from "react-router-dom";
import Create from "./components/CreateCocktail/create";
import Update from "./components/UpdateCocktail/update";
import UpdateIngredient from "./components/UpdateIngredient/updateIngredient"
import AddIngredient from './components/AddIngredient/addIngredient'

class App extends Component {

  render() {
    return (
      <div>
        <div className="topBar">
        <header><h1>Cocktail Hour</h1></header>
          <nav id="main">
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
