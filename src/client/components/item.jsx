import React, { Component } from 'react';
import {nanoid} from "nanoid";

import { getItems, getListOfAge} from '../APIs/userAPIs';
import ItemTable from './itemTable.jsx'

export default class Item extends Component {

    state = {
        items: [],
        itemDemographic: [],
        selectItem: ""
    }

    componentDidMount () {
        getItems().then(data => this.setState({items:data}))
    }

    handleSelect = (event) => {
        const item = event.target.value;
        this.setState({selectItem: item});
        getListOfAge(item).then(data => this.setState({itemDemographic:data}))
    }

    render() {
        const {items, itemDemographic, selectItem} = this.state;
        return (
            <div className="mycontainer">
                <h2 style={{textAlign: 'center'}}>Age Demographic of Users with Item</h2>
                <select className="form-select" aria-label="Default select example" onChange={this.handleSelect} value={selectItem}>
                    <option >Item</option>
                    {items.map(Item => (
                        <option key={nanoid()} >{Item}</option>
                    ))
                    }
                </select>
                <ItemTable itemDemographic={itemDemographic} />
            </div>
        )
    }
}

