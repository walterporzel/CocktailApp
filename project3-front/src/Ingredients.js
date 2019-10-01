import React, { Component } from 'react'



class Ingredients extends Component {
    constructor() {
        super();
        this.state = {
            Ingredients: [],
        };
    }

    componentDidMount() {
        fetch('https://cocktail-back-end.herokuapp.com/api/ingredients')
        .then(results => {
            return results.json();
        }).then(data => {
            let ingredients = data.map((drink) => {
                return(
                    <li>{drink.strIngredient}</li>
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

