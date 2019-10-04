import React, { Component } from 'react'
import './IngredientDetail.css'




export default class IngredientDetail extends Component {
    constructor() {
        super();
        this.state = {
            ingredient: []
        };
    }


    componentDidMount() {
        const param = this.props.match.params.ingredient;
        fetch('https://cocktail-back-end.herokuapp.com/api/ingredients/'+param)
        .then(results => {
            return results.json();
        }).then(ingrdnt => {
            console.log(ingrdnt)
            let details = (
            <div className="infoPageWrapper">
                <h2>{ingrdnt[0].strIngredient}</h2> 
           
                <p><span>ABV: </span>{ingrdnt[0].strABV}</p>            
                <p><span>Description: </span>{ingrdnt[0].strDescription}</p>
            </div>)
            this.setState({ingredient: details})
        })
    }

 render() {
     
     return (
         <div className="main" > 
            {this.state.ingredient}
        </div>
     )
 }
}




