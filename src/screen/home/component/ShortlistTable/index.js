import React from 'react';
import './index.scss';

export default function ShortlistTable ({detail ,onRemoveShortlistClick ,count }) {
    return (
        <div className="">
            {
                count 
                ?   <div className ="body-div">
                        NO DATA FOUND
                    </div>
                :   <div className="table-container">
                        <table>
                        <thead>
                            <tr className="table-header">
                                <th> State </th>
                                <th> District </th>
                                <th> City </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                            {
                                detail.map((value , stateIndex)=>{
                                    if(value.isSelected) {
                                        return(
                                            <tbody key ={stateIndex}>
                                                <tr className="table-body" >
                                                    <td className= "state-width">
                                                        {value.State}
                                                    </td>
                                                    <td className= "district-width">
                                                        {value.District}
                                                    </td>
                                                    <td className= "city-width">
                                                        {value.City}
                                                    </td>
                                                    <td>
                                                        <div className= "button"
                                                            onClick = {_ => {onRemoveShortlistClick(value.id)}}>
                                                                Remove
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                    return  null
                                })
                            }
                    </table>
                </div>
                
            }
        </div>
    )
}