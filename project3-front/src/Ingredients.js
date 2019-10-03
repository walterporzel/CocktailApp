import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import DeleteIngredient from './deleteIngredient'
import AddIngredient from './addIngredient'


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
                        <li>{drink.strIngredient}</li>
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
                     <DeleteIngredient/>
                    {this.state.Ingredients}
                    <nav className="crudNavBar">
                        <Link to="/addIngredient" className="crudLinks">Create</Link>
                        <Link to="/updateIngredient" className="crudLinks">Update</Link>
                    </nav>
                </div>
            )
    }
}


export default Ingredients;

