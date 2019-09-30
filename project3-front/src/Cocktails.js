import React, { Component } from "react";

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
                    <li>{drink.strDrink}</li>
                )
            })
            this.setState({cocktails: cocktails});
            console.log("state", this.state.cocktails);
        })
    }

    render(){
        return ( 
                <div>
                    <ul>
                        {this.state.cocktails}
                    </ul>
                </div>
            )
    }
}


export default Cocktails;