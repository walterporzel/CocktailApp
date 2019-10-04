import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './Register.css';
import 'tachyons'



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: ""

     }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.state)


    if (this.state.email === '' || this.state.password === '') {
        this.setState({
        })
    }
    else {
        console.log('calling api')
        fetch ('https://cocktail-back-end.herokuapp.com/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
        })
        .then(results => {
            return results.json();
        })
        .then( (data) => {

          if (data.user) {
            // redirect to cocktails
            this.props.history.push("/cocktails");
          }
          else {
            this.setState({
                email: '',
                password: '',
                message: 'wrong username/password'
            });
            this.props.history.push("/register");
          }


        })
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


  render() { 
    return (  
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" >Email</label>
                <input 
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Password</label>
                <input 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={ this.handleSubmit } value="Submit"/>
            </div>
            <div className="lh-copy mt3">
                <Link className="f6 link dim black db" to="/login">Login</Link>
            </div>
          </form>
        </main>
      </article>
    );
  }
}
 
export default Register;
