import React from 'react';
import './index.scss';

export default function AllTable ({detail , onShortlistClick , onDeleteClick}) {
    return (
        <div className="">
            {
                detail.length === 0 
                ? <div className ="body-div">
                    NO DATA FOUND
                </div>
                :   <table>
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
                                    return(
                                        <tbody key ={stateIndex}>
                                            <tr className="table-body" >
                                                <td>
                                                    {value.State}
                                                </td>
                                                <td>
                                                    {value.District}
                                                </td>
                                                <td>
                                                    {value.City}
                                                </td>
                                                <td >
                                                    {
                                                        !value.isSelected
                                                        ? <div className = "button-container">
                                                            <div className= "button"
                                                                onClick = {_ => { onShortlistClick(value.id)}}> 
                                                                Shortlist 
                                                            </div>
                                                            <div className= "button delete-color" 
                                                                onClick = {_ => {onDeleteClick(value.id)}}> 
                                                                Delete 
                                                            </div>
                                                        </div>
                                                        :<div className ="action-buttons">
                                                            <div className= "button delete-color" 
                                                                onClick = {_ => {onDeleteClick(value.id)}}> 
                                                                Delete 
                                                            </div>
                                                        </div>
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                    </table>
            }
        </div>
    )
}
