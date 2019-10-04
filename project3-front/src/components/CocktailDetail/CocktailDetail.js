import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class CocktailDetail extends Component {
    constructor() {
        super();
        this.state = {
            drink: []
        };
    }

    componentDidMount() {
        let path = this.props.match.url.replace("/cocktails/", "");
        fetch('https://cocktail-back-end.herokuapp.com/api/drinks/'+path)
        .then(results => {
            return results.json();
        }).then(drink => {
            let drinkEntry = 
            <div className="infoPageWrapper">
                <h2>{drink[0].strDrink}</h2>
                <img className="cocktailInfoPic" src={drink[0].strDrinkThumb} />
                <h3 className="ingredientsListHeader">Ingredients</h3>
                <p className="ingredientListItem">{drink[0].strMeasure1} {drink[0].strIngredient1}</p>
                <p className="ingredientListItem">{drink[0].strMeasure2} {drink[0].strIngredient2}</p>
                <p className="ingredientListItem">{drink[0].strMeasure3} {drink[0].strIngredient3}</p>
                <p className="ingredientListItem">{drink[0].strMeasure4} {drink[0].strIngredient4}</p>
                <p className="ingredientListItem">{drink[0].strMeasure5} {drink[0].strIngredient5}</p>
                <h3 className="ingredientsListHeader">Glass</h3>
                <p className="ingredientListItem">{drink[0].strGlass}</p>
                <h3 className="ingredientsListHeader">Instructions</h3>
                <p className="cocktailInstructions">{drink[0].strInstructions}</p>
                
                <div className="buttons">
                <button className="btn">
                <Link to="/updateCocktail" className="crudLinks">Update</Link>
                </button>

                <button className="btn" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
            this.setState({drink: drinkEntry})
        })
    }

    handleDelete = (evt) => {
        evt.preventDefault()
        
        let drink = this.props.match.url.replace("/cocktails/", "");
        console.log(this.props.match.url, drink)

        fetch('https://cocktail-back-end.herokuapp.com/api/drinks/' + drink, {
            method: "DELETE"
        })
        .then(() => {
            const message = (
                <div className="message">
                    <h4>Cocktail is deleted!</h4>
                    <Link to="/cocktails" className="crudLinks">Go to list</Link>
                </div>
            )
            this.setState({drink: message})
        })

    }

    render(){
        return ( 
            <div>
                {this.state.drink}
            </div>

        )
    }
}

export default CocktailDetail;