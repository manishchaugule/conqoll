import React from 'react';
import './index.scss';

export default function AllTable ({detail}) {
    console.log(detail)
    return (
        <div className="">
            <table>
                <tr className="table-header">
                    <th> State </th>
                    <th> District </th>
                    <th> City </th>
                    <th> Action </th>
                </tr>
                    {
                        detail.map((state , stateIndex)=>{
                            return(
                                <tr className="table-body">
                                    <td key = {stateIndex} colSpan= {state.children.length ?state.children.length : 1 }>
                                        {state.name}
                                    </td>
                                    {
                                        state.children && state.children.map((district,districtIndex)=>{
                                            return (
                                                <React.Fragment>
                                                    <td key = {districtIndex} colSpan= {district.children.length ?district.children.length : 1 }>
                                                        {district.name}
                                                    </td>
                                                    {
                                                        district.children && district.children.map((city,cityIndex)=>{
                                                            return(
                                                                <td key = {cityIndex}>
                                                                    {city.name}
                                                                </td>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                
            </table>
        </div>
    )
}
