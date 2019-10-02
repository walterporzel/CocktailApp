import React, { Component } from 'react';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strDrink: '',
            strGlass: '',
            strInstructions: '',
            strIngredient1: '',
            strIngredient2: '',
            strIngredient3: '',
            strIngredient4: '',
            strIngredient5: '',
            strMeasure1: '',
            strMeasure2:'',
            strMeasure3:'',
            strMeasure4:'',
            strMeasure5:'',
            strDrinkThumb: ''
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
        evt.preventDefault()
        console.log(this.state)

        if (this.state.strDrink === '') {
            this.setState({
                message: 'hello, fill it first!'
            })
        }
        else {
            fetch ('https://cocktail-back-end.herokuapp.com/api/drinks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(this.state)
            })
            .then( () => {
              this.setState({
                strDrink: '',
                strGlass: '',
                strInstructions: '',
                strIngredient1: '',
                strIngredient2: '',
                strIngredient3: '',
                strIngredient4: '',
                strIngredient5: '',
                strMeasure1: '',
                strMeasure2:'',
                strMeasure3:'',
                strMeasure4:'',
                strMeasure5:'',
                strDrinkThumb: '',
                message: 'good job, created cocktail!'
              })
            })
        }



    }

    render() { 
        return ( 
            <div className="create-container">
                <h2>Create new Cocktails</h2>
                <form id="create-form">
                    <div className="form-row">
                        <label>Name:</label>
                        <input className="placeholder" placeholder="name"
                            name="strDrink"
                            value={this.state.strDrink}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-row">
                    <label>Glass:</label>
                    <select name="strGlass" 
                        value={this.state.strGlass}
                        onChange={this.handleInputChange}>
                        <option value = "Shot">Wine</option>
                        <option value = "Cordial">Cordial</option>
                        <option value = "Brandy">Brandy</option>
                        <option value = "Cocktail">Cocktail</option>
                        <option value = "Wine">Wine</option>
                        <option value = "Rocks">Rocks</option>
                        <option value = "Martini">Martini</option>
                        <option value = "Coupe">Coupe</option>
                        <option value = "Highball">Highball</option>
                        <option value = "Collins">Collins</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label>Instruction:</label>
                    <textarea className="placeholder" placeholder="instruction"
                        name="strInstructions"
                        value={this.state.strInstructions}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="form-row">
                        <label>Ingredient 1:</label>
                        <select name="strMeasure1" 
                            value={this.state.strMeasure1}
                            onChange={this.handleInputChange}>
                            <option value = "1 oz">1 oz</option>
                            <option value = "2 oz">2 oz</option>
                            <option value = "3 oz">3 oz</option>
                            <option value = "4 oz">4 oz</option>
                            <option value = "5 oz">5 oz</option>
                            <option value = "6 oz">6 oz</option>
                            <option value = "7 oz">7 oz</option>
                            <option value = "8 oz">8 oz</option>
                            <option value = "9 oz">9 oz</option>
                            <option value = "10 oz">10 oz</option>

                        </select>
                        <input className="placeholder" placeholder="ingredient"
                            name="strIngredient1"
                            value={this.state.strIngredient1}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-row">
                        <label>Ingredient 2:</label>
                        <select name="strMeasure2" 
                            value={this.state.strMeasure2}
                            onChange={this.handleInputChange}>
                            <option value = "1 oz">1 oz</option>
                            <option value = "2 oz">2 oz</option>
                            <option value = "3 oz">3 oz</option>
                            <option value = "4 oz">4 oz</option>
                            <option value = "5 oz">5 oz</option>
                            <option value = "6 oz">6 oz</option>
                            <option value = "7 oz">7 oz</option>
                            <option value = "8 oz">8 oz</option>
                            <option value = "9 oz">9 oz</option>
                            <option value = "10 oz">10 oz</option>
                        </select>
                        <input className="placeholder" placeholder="ingredient"
                            name="strIngredient2"
                            value={this.state.strIngredient2}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="form-row">
                        <label>Ingredient 3:</label>
                        <select name="strMeasure3" 
                            value={this.state.strMeasure3}
                            onChange={this.handleInputChange}>
                            <option value = "1 oz">1 oz</option>
                            <option value = "2 oz">2 oz</option>
                            <option value = "3 oz">3 oz</option>
                            <option value = "4 oz">4 oz</option>
                            <option value = "5 oz">5 oz</option>
                            <option value = "6 oz">6 oz</option>
                            <option value = "7 oz">7 oz</option>
                            <option value = "8 oz">8 oz</option>
                            <option value = "9 oz">9 oz</option>
                            <option value = "10 oz">10 oz</option>
                        </select>
                        <input className="placeholder" placeholder="ingredient"
                            name="strIngredient3"
                            value={this.state.strIngredient3}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="form-row">
                    <label>Ingredient 4:</label>
                    <select name="strMeasure4" 
                        value={this.state.strMeasure4}
                        onChange={this.handleInputChange}>
                        <option value = "1 oz">1 oz</option>
                        <option value = "2 oz">2 oz</option>
                        <option value = "3 oz">3 oz</option>
                        <option value = "4 oz">4 oz</option>
                        <option value = "5 oz">5 oz</option>
                        <option value = "6 oz">6 oz</option>
                        <option value = "7 oz">7 oz</option>
                        <option value = "8 oz">8 oz</option>
                        <option value = "9 oz">9 oz</option>
                        <option value = "10 oz">10 oz</option>
                    </select>
                    <input className="placeholder" placeholder="ingredient"
                        name="strIngredient4"
                        value={this.state.strIngredient4}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div className="form-row">
                <label>Ingredient 5:</label>
                <select name="strMeasure5" 
                    value={this.state.strMeasure5}
                    onChange={this.handleInputChange}>
                    <option value = "1 oz">1 oz</option>
                    <option value = "2 oz">2 oz</option>
                    <option value = "3 oz">3 oz</option>
                    <option value = "4 oz">4 oz</option>
                    <option value = "5 oz">5 oz</option>
                    <option value = "6 oz">6 oz</option>
                    <option value = "7 oz">7 oz</option>
                    <option value = "8 oz">8 oz</option>
                    <option value = "9 oz">9 oz</option>
                    <option value = "10 oz">10 oz</option>
                </select>
                <input className="placeholder" placeholder="ingredient"
                    name="strIngredient5"
                    value={this.state.strIngredient5}
                    onChange={this.handleInputChange}
                />
            </div>



                    <div className="form-row">
                    <input className="placeholder" placeholder="image URL"
                        name="strDrinkThumb"
                        value={this.state.strDrinkThumb}
                        onChange={this.handleInputChange}
                    /></div>                         
                    <div>{this.state.message}</div>
                    <div className="submit-container">
                        <button className="btn" onClick={ this.handleSubmit }>Submit</button>
                    </div>

                </form>
            </div>
         );
    }
}
 
export default Create;