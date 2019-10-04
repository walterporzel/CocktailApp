import React, { Component } from "react";

class Cocktail extends Component {
render(){
        return(
            <div className="drinkThumb">
                <img className = "cocktailPic" src={this.props.drink.strDrinkThumb} />
                {this.props.drink.strDrink}
            </div>
        )
    }
}
export default Cocktail