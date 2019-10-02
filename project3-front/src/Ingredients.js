import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import IngredientDetail from './IngredientDetail'


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
                    <Link to={"/ingredients/" + `${drink.strIngredient}`}>
                        <li>{drink.strIngredient}></li>
                    </Link>
                )
            })
            this.setState({Ingredients: ingredients});
            console.log("state", this.state.Ingredients);
        })
    }

    render(){
        return ( 
                <div>
                    {this.state.Ingredients}
                </div>
            )
    }
}


export default Ingredients;

