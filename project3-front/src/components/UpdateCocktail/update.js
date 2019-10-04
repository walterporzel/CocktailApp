import React, { Component } from 'react';
import CocktailForm from '../CocktailForm/CocktailForm';

class Update extends Component {
    render() { 
        return ( 
           <CocktailForm method="PUT" />
         );
    }
}

export default Update;