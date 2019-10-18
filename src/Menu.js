import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Appetizers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Lunch</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Light Snacks</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dinner</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Second Dinner</a>
                </li>
            </ul>
        );
    }
}

export default Menu;