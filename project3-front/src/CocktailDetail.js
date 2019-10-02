import React, { Component } from "react";

class CocktailDetail extends Component {
    constructor() {
        super();
        this.state = {
            drink: [],
        };
    }

    componentDidMount() {
        let path = this.props.match.url.replace("/cocktails/", "");
        fetch('https://cocktail-back-end.herokuapp.com/api/drinks/'+path)
        .then(results => {
            return results.json();
        }).then(drink => {
            if(drink[0].strIngredient1){

            }
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
            </div>
            this.setState({drink: drinkEntry})
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