import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class IngredientDetail extends Component {

 render() {
     
    //  const clickedName = this.props.match.params.strIngredient
    //  const ingredient = this.props.ingredients.find(ingredient => ingredient.strIngredient === clickedName)
    //  var mainStyle={
    //      'margin-top':'50px'
    //  }
    //  var formStyle={
    //      'display':'flex',
    //      'flexDirection':'row',
    //      'margin-top': '10px;',
    //      'justifyContent':'space-around'
    //  }
     return (
         <div className="main" >
         {/* <div className="main" style={mainStyle}> */}
{/*   
            <h1>{ingredient.strIngredient}</h1>
            <h2>Description: {ingredient.strDescription} </h2>
            <h2>ABV: {ingredient.strABV}</h2> */}

        </div>
     )
 }
}