

import React from "react";
import css from './Styles.module.css'


export const Filter = ({ value, filterName }) => (
            <label htmlFor="">
            <h2>Find contacts by name</h2>
                <input
                className={css.input} 
                type="text"
                value={value}
                onChange={filterName}
                ></input>
            </label>
)   
    



