import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import DeleteIngredient from '../DeleteIngredient/deleteIngredient'
import AddIngredient from '../AddIngredient/addIngredient'


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
                    <div className="ingredient-list">
                    <Link to={"/ingredients/" + `${drink.strIngredient}`}>
                        <li>{drink.strIngredient}</li>
                    </Link>
                    </div>
                )
            })
            this.setState({Ingredients: ingredients});
            console.log("state", this.state.Ingredients);
        })
    }

    render(){
        return ( 
                <div className='ingredients'>
                     <DeleteIngredient/>
                    {this.state.Ingredients}
                    <nav className="crudNavBar">
                    <button className="btn">
                        <Link to="/addIngredient" className="crudLinks">Create</Link>
                    </button>
                    <button className="btn">
                        <Link to="/updateIngredient" className="crudLinks">Update</Link>
                    </button>
                    </nav>
                </div>
            )
    }
}


export default Ingredients;

