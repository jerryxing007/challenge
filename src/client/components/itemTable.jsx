import React, { Component } from 'react';
import {nanoid} from "nanoid"

export default class ItemTable extends Component {
    
    render() {
        const {itemDemographic} = this.props
        return (
            <>
                {
                itemDemographic.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Age</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemDemographic.map(item => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{item.age}</td>
                                    <td>{item.count}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> ) : null }
            </>
        )
    }
}