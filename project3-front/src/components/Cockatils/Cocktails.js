import React, { Component } from "react";
import Cocktail from "../Cocktail/Cocktail";
// import CocktailDetail from "../src/CocktalDetail";
import { Route, Link } from "react-router-dom";
import Create from '../CreateCocktail/create';
import SearchBox from '../Search/SearchBox';
import DeleteCocktail from '../DeleteCocktail/deleteCocktail'
import "tachyons";


const MyComp = () => (<div>Hello</div>)
class Cocktails extends Component {
    constructor() {
        super();
        this.state = {
            cocktails: [],
            searchfield: ""
              
        };
    }

    componentDidMount() {
        fetch('https://cocktail-back-end.herokuapp.com/api/drinks')
        .then(results => {
            return results.json();
        }).then(data => {
            
            this.setState({cocktails: data});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
        // const filteredCocktails = this.state.cocktails.filter(cocktail => {
        //     return cocktail.strDrink.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase)
                
        // })
        // console.log(filteredCocktails)
    }

    render(){

        let cocktails = this.state.cocktails
            .filter(drink => {
                let searchfield = this.state.searchfield.toLowerCase()
                let drinkName = drink.strDrink.toLowerCase()

                // if there is no searchfield value, render this drink
                if (!searchfield) {
                    return true
                // if this drink's strDrink field includes the search value, render it
                } else if (drinkName.includes(searchfield)){
                    return true
                // otherwise, do not render this drink
                } else {
                    return false
                }
            })
            // this will make components for each coctail that passes the search filtering method
            .map((drink, index) => {
                return(
                    <Link to={"/cocktails/" + drink.strDrink} key={index}><Cocktail drink={drink} /></Link>
                )
            })

        return ( 
            <div className="tc">
                <SearchBox searchChange={this.onSearchChange}/>
                <Route path="/"
                render = {() => (
                <div className='drinkCardWrapper'>
                    {cocktails}
                </div>
                )}
                />
                <Route 
                path="/searchBox" 
                exact component={ SearchBox }/>
                <nav className="crudNavBar">
                    <button className="btn">
                        <Link to="/create" className="crudLinks">Create</Link>
                    </button>

                    <button className="btn">
                        <Link to="/updateCocktail" className="crudLinks">Update</Link>
                    </button>
                </nav>
            </div>
        )
    }
}


export default Cocktails;