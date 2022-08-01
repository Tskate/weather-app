import React from 'react';
import CustomInput from "./UI/Input/CustomInput";
import CustomSearchButton from "./UI/Button/CustomSearchButton";
import '../styles/SearchBar.css'

function SearchBar({value, search, setRequest}) {
    return (
        <div className="searchBar">
            <CustomInput value={value} setRequest={setRequest}/>
            <CustomSearchButton onClick={search}/>
        </div>
    );
}

export default SearchBar;