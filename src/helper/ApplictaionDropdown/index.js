import React, { useState }  from 'react';
import ApplicationOutsideClick from '../ApplicationOutsideClick'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

export default function ApplicationDropdown ({data , placeholder, onSelect ,selectedItem ,isDisable =false}) {
    const [toggle, setToggle] = useState(false);
    const SelectedData =  selectedItem === '' ? placeholder : selectedItem
    function onSelectItem(value){
        onSelect(value)
        setToggle(false)
    }
    return (
        <ApplicationOutsideClick  onOutsideClick = {_ => setToggle(false)}>
            <div className= "dropdown-container">
                <div className={ isDisable ? "is-disable market-filter-box" :"market-filter-box"}  
                    onClick= {_ => setToggle(!toggle)}>
                        <span >{SelectedData}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                </div>
                {
                    (toggle && (!isDisable)) && 
                    <div className="market-filter-option">
                        <div className="custom-dropdown">
                            <ul className="custom-dropdown-list">
                                {
                                    data.map((value, index) => {
                                        return (
                                            <li className ="custom-dropdown-item"
                                                key ={index}
                                                onClick={e => onSelectItem(value)}>
                                                {value}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </ApplicationOutsideClick>
        
    )
}