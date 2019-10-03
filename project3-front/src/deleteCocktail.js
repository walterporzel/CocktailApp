import React, { Component } from 'react'
import {Link} from 'react-router-dom'




export default class DeleteCocktail extends Component {
    constructor(props){
        super(props)
        
        this.state={
            name: ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 


    handleChange(evt){
        this.setState({
            name: evt.target.value
        })
    }

    
    handleSubmit(){
        console.log(this.state.name)
        fetch('https://cocktail-back-end.herokuapp.com/api/drinks/' + this.state.name, {
            
            method: "DELETE"

        }).then(res => console.log(res))
        .catch(err => console.log(err));        
    }


    componentDidMount(){
        return(        
        <Link to="/cocktails" />
        )}
 

 render() {
     
     return (
         <div className="main" > 

                <input type="text" name="name" onChange={this.handleChange}/>

                <input type="submit" value="Delete" onClick={this.handleSubmit} />
          
        </div>
     )
 }
}




