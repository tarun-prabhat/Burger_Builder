import React from 'react';
import classes from './Logo.module.css'
import burgerLogo from '../../assets/Images/burger_logo.png'

const logo = (props) => {
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="BurgerKing"/>
        </div>
    )
    
};

export default logo;