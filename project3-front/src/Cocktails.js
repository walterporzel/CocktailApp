import React, { Component } from "react";
import Cocktail from "../src/Cocktail";
// import CocktailDetail from "../src/CocktalDetail";
import { Route, Link } from "react-router-dom";
import Create from './create';
import Search from './search'

const MyComp = () => (<div>Hello</div>)
class Cocktails extends Component {
    constructor() {
        super();
        this.state = {
            cocktails: [],
        };
    }

    componentDidMount() {
        fetch('https://cocktail-back-end.herokuapp.com/api/drinks')
        .then(results => {
            return results.json();
        }).then(data => {
            let cocktails = data.map((drink) => {
                return(
                    <Link to={"/cocktails/" + drink.strDrink}><Cocktail drink={drink} /></Link>
                )
            })
            this.setState({cocktails: cocktails});
        })
    }

    render(){
        return ( 
            <div>
                <Link to="/create">Create</Link>
                <Route path="/"
                    render = {() => (
                    <div className='drinkCardWrapper'>
                        {this.state.cocktails}
                    </div>
                    )}
                />
                <Route 
                path="/create" 
                exact component={ Create }/>
            </div>
        )
    }
}


export default Cocktails;