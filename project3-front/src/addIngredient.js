import React, { Component } from 'react';

class AddIngredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strIngredient: '',
            strABV: '',
            strDescription: '',

        }
    }

    handleInputChange =(event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    

    handleSubmit = (evt) => {

        console.log(this.state)

        if (this.state.strIngredient === '') {
            this.setState({
                message: 'Add An Ingredient Name'
            })
        }
        else {
            fetch ('https://cocktail-back-end.herokuapp.com/api/ingredients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(this.state)
            })
            .then( () => {
              this.setState({
                strIngredient: '',
                strABV: '',
                strDescription: '',
              })
            })
        }



    }

    render() { 
        return ( 
            <div className="create-container">
                <h2>Add An Ingredient</h2>
                <form id="create-form">
                    <div className="form-row">
                        <label>Name:</label>
                        <input className="placeholder" placeholder="name"
                            name="strIngredient"
                            value={this.state.strIngredient}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-row">
                    <label>ABV:</label>
                    <input name="strABV" 
                        value={this.state.strABV}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-row">
                    <label>Description:</label>
                    <textarea className="placeholder" placeholder="description"
                        name="strDescription"
                        value={this.state.strDescription}
                        onChange={this.handleInputChange}
                    /></div>
                <button className="btn" onClick={ this.handleSubmit }>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddIngredient;