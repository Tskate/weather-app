import React from "react";
import './CustomSearchButton.css'
import searchIcon from './search-13-32.png'

function CustomSearchButton({onClick}) {

    return(
        <div className="search" onClick={onClick}>
            <img src={searchIcon} alt="search-icon"/>
        </div>
    );
}

export default CustomSearchButton;