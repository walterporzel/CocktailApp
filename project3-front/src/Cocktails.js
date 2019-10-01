import React, { Component } from "react";
import Cocktail from "../src/Cocktail"

class Cocktails extends Component {
    constructor() {
        super();
        this.state = {
            cocktails: [],
        };
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
        .then(results => {
            return results.json();
        }).then(data => {
            let cocktails = data.drinks.map((drink) => {
                return(
                    <Cocktail drink={drink} />
                )
            })
            this.setState({cocktails: cocktails});
            console.log("state", this.state.cocktails);
        })
    }

    render(){
        return ( 
            <div className='drinkCardWrapper'>
                {this.state.cocktails}
            </div>
        )
    }
}


export default Cocktails;