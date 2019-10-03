import React, { Component } from 'react';

class Update extends Component {
    constructor(props){
        super(props)
        this.state = {
            strDrink: "",
            strGlass: "",
            strInstructions: "",
            strIngredient1: "",
            strIngredient2: "",
            strIngredient3: "",
            strIngredient4: "",
            strIngredient5: "",
            strMeasure1: "",
            strMeasure2: "",
            strMeasure3: "",
            strMeasure4: "",
            strMeasure5: "",
            strDrinkThumb: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(JSON.stringify(this.state))
        const url = "https://cocktail-back-end.herokuapp.com/api/drinks/";
        console.log(url + this.state.strDrink)
        fetch(url + this.state.strDrink, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "https://cocktail-back-end.herokuapp.com/api/drinks/"
            },
            body: JSON.stringify(this.state)
        })        
    }
    render(){
        return(
            <form className="updateForm" onSubmit={this.handleSubmit}>
                <label>
                    Cocktail Name:
                    <input type="text" name="strDrink" value={this.state.strDrink} onChange={this.handleChange} />
                </label>
                <label>
                    Glass
                    <input type="text" name="strGlass" value={this.state.strGlass} onChange={this.handleChange} />
                </label>
                <label>
                    Picture URL:
                    <input type="text" name="strDrinkThumb" value={this.state.strDrinkThumb} onChange={this.handleChange} />
                </label>
                <label>
                    Instructions:
                    <input type="text" name="strInstructions" value={this.state.strInstructions} onChange={this.handleChange} />
                </label>
                <label>
                    Ingredient 1:
                    <input type="text" name="strIngredient1" value={this.state.strIngredient1} onChange={this.handleChange} />
                </label>
                <label>
                    Amount Ingredient 1:
                    <input type="text" name="strMeasure1" value={this.state.strMeasure1} onChange={this.handleChange} />
                </label>
                <label>
                    Ingredient 2:
                    <input type="text" name="strIngredient2" value={this.state.strIngredient2} onChange={this.handleChange} />
                </label>
                <label>
                    Amount Ingredient 2:
                    <input type="text" name="strMeasure2" value={this.state.strMeasure2} onChange={this.handleChange} />
                </label>
                <label>
                    Ingredient 3:
                    <input type="text" name="strIngredient3" value={this.state.strIngredient3} onChange={this.handleChange} />
                </label>
                <label>
                    Amount Ingredient 3:
                    <input type="text" name="strMeasure3" value={this.state.strMeasure3} onChange={this.handleChange} />
                </label>
                <label>
                    Ingredient 4:
                    <input type="text" name="strIngredient4" value={this.state.strIngredient4} onChange={this.handleChange} />
                </label>
                <label>
                    Amount Ingredient 4:
                    <input type="text" name="strMeasure4" value={this.state.strMeasure4} onChange={this.handleChange} />
                </label>
                <label>
                    Ingredient 5:
                    <input type="text" name="strIngredient5" value={this.state.strIngredient5} onChange={this.handleChange} />
                </label>
                <label>
                    Amount Ingredient 5:
                    <input type="text" name="strMeasure5" value={this.state.strMeasure5} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Update;