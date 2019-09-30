import React, { Component } from 'react'



class Ingredients extends Component {
    constructor() {
        super();
        this.state = {
            Ingredients: [],
        };
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then(results => {
            return results.json();
        }).then(data => {
            let ingredients = data.drinks.map((drink) => {
                return(
                    <li>{drink.strIngredient1}</li>
                )
            })
            this.setState({ingredients: ingredients});
            console.log("state", this.state.ingredients);
        })
    }

    render(){
        return ( 
                <div>
                    <ul>
                        {this.state.ingredients}
                    </ul>
                </div>
            )
    }
}


export default Ingredients;

