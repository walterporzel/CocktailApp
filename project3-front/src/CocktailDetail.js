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
            let drinkEntry = 
            <div className="infoPageWrapper">
                <h2>{drink[0].strDrink}</h2>
                <img className="cocktailInfoPic" src={drink[0].strDrinkThumb} />
                <h3>Ingredients</h3>
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