import React, { Component } from 'react';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strDrink: '',
            strGlass: '',
            strInstruction: '',
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
                strInstruction: '',
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
            <div className="create">
                <h2>Create new Cocktails</h2>
                <form>
                    <div className="input">
                    <input className="placeholder" placeholder="strDrink"
                        name="strDrink"
                        value={this.state.strDrink}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="input">
                    <input className="placeholder" placeholder="strGlass"
                        name="strGlass"
                        value={this.state.strGlass}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="input">
                    <input className="placeholder" placeholder="strInstruction"
                        name="strInstruction"
                        value={this.state.strInstruction}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="input">
                    <input className="placeholder" placeholder="strIngredient1"
                        name="strIngredient1"
                        value={this.state.strIngredient1}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="input">
                    <input className="placeholder" placeholder="strIngredient2"
                        name="strIngredient2"
                        value={this.state.strIngredient2}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="input">
                    <input className="placeholder" placeholder="strIngredient3"
                        name="strIngredient3"
                        value={this.state.strIngredient3}
                        onChange={this.handleInputChange}
                    /></div> 
                    <div className="input">
                    <input className="placeholder" placeholder="strIngredient4"
                        name="strIngredient4"
                        value={this.state.strIngredient4}
                        onChange={this.handleInputChange}
                    /></div> 
                    <div className="input">
                    <input className="placeholder" placeholder="strIngredient5"
                        name="strIngredient5"
                        value={this.state.strIngredient5}
                        onChange={this.handleInputChange}
                    /></div>
                    <div className="input">
                    <input className="placeholder" placeholder="strMeasure1"
                        name="strMeasure1"
                        value={this.state.strMeasure1}
                        onChange={this.handleInputChange}
                    /></div>  
                    <div className="input">
                    <input className="placeholder" placeholder="strMeasure2"
                        name="strMeasure2"
                        value={this.state.strMeasure2}
                        onChange={this.handleInputChange}
                    /></div>  
                    <div className="input">
                    <input className="placeholder" placeholder="strMeasure3"
                        name="strMeasure3"
                        value={this.state.strMeasure3}
                        onChange={this.handleInputChange}
                    /></div> 
                    <div className="input">
                    <input className="placeholder" placeholder="strMeasure4"
                        name="strMeasure4"
                        value={this.state.strMeasure4}
                        onChange={this.handleInputChange}
                    /></div> 
                    <div className="input">
                    <input className="placeholder" placeholder="strMeasure5"
                        name="strMeasure5"
                        value={this.state.strMeasure5}
                        onChange={this.handleInputChange}
                    /></div> 
                    <div className="input">
                    <input className="placeholder" placeholder="strDrinkThumb"
                        name="strDrinkThumb"
                        value={this.state.strDrinkThumb}
                        onChange={this.handleInputChange}
                    /></div>                         
                    
                </form>
                <div>{this.state.message}</div>
                <button className="submit" onClick={ this.handleSubmit }>Submit</button>
            </div>
         );
    }
}
 
export default Create;