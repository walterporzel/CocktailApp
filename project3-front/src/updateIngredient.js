import React, { Component } from 'react';

class UpdateIngredient extends Component {
    constructor(props){
        super(props)
        this.state = {
            strIngredient: "",
            strABV: "",
            strDescription: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault()
        const url = "https://cocktail-back-end.herokuapp.com/api/ingredients/";
        fetch(url + this.state.strIngredient, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "https://cocktail-back-end.herokuapp.com/api/ingredients/"
            },
            body: JSON.stringify(this.state)
        })
        .then( () => {
            alert("Ingredinet Updated")
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ingredient Name:
                    <input type="text" name="strIngredient" value={this.state.strIngredient} onChange={this.handleChange} />
                </label>
                <label>
                    ABV:
                    <input type="text" name="strABV" value={this.state.strABV} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" name="strDescription" value={this.state.strDescription} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }


}

export default UpdateIngredient;