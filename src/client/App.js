import React, { Component } from 'react';

import User from './components/user.jsx';
import Item from './components/item.jsx';

export default class App extends Component {
    render() {
        return (
            <>
                <User />
                <br/>
                <Item />
            </>
        )
    }
}