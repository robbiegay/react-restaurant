import React from 'react';
import Card from './Card';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: 'Generic Food',
        };
    }

    getMenuItems() {
        let menuArr = [];
        // 'this' can't be accessed in fetch, so I pass it in as a variable
        const that = this;
        for (let i = 0; i < 2; i++) {
            fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
                response.json().then(function (data) {
                    for (let i in data.menu_items) {
                        menuArr.push(data.menu_items[i]);
                    }
                    if (menuArr.length === 24) {
                        localStorage.setItem('menu', JSON.stringify(menuArr));
                        that.setState({ menuItems: JSON.parse(window.localStorage.menu) });
                    }
                });
            });
        }
    }

    // Controller
    componentDidMount() {
        if (!window.localStorage.length) {
            this.getMenuItems();
        } else {
            this.setState({ menuItems: JSON.parse(window.localStorage.menu) });
        }
    }

    // Lets me generate random prices, in a low, medium, and high price range
    setPrice(x) {
        const priceRange = [5, 10, 15]
        return `$${Math.ceil(Math.random() * 5) + priceRange[x]}`;
    }

    getText(type, num) {
        if (this.state.menuItems !== 'Generic Food') {
            let words = this.state.menuItems[num].description.split(' ');
            if (type === 'title') {
                return words[0] + ' ' + words[1][0].toUpperCase() + words[1].slice(1);
            }
            let startingIdx = words[0].length + 1;
            let text = this.state.menuItems[num].description.slice(startingIdx);
            return text[0].toUpperCase() + text.slice(1);
        }
    }

    genItem(num, price) {
        return <Card mealTitle={this.getText('title', num)} mealDescription={this.getText('des', num)} mealPrice={this.setPrice(price)} />
    }

    render() {
        if (!window.localStorage.length) {
            return (
                <div>loading...</div>
            )
        } else {
            return (
                <React.Fragment >
                    <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="apps-tab" data-toggle="pill" href="#pills-apps" role="tab" aria-controls="pills-apps" aria-selected="true">Appetizers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Lunch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="snacks-tab" data-toggle="pill" href="#pills-snacks" role="tab" aria-controls="pills-snacks" aria-selected="false">Snacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="dinner-tab" data-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="secondDinner-tab" data-toggle="pill" href="#pills-secondDinner" role="tab" aria-controls="pills-secondDinner" aria-selected="false">Second Dinner</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-apps" role="tabpanel" aria-labelledby="apps-tab">
                            {this.genItem(0, 0)}
                            {this.genItem(1, 0)}
                            {this.genItem(2, 0)}
                            {this.genItem(3, 1)}
                            {this.genItem(4, 0)}
                        </div>
                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="lunch-tab">
                            {this.genItem(5, 1)}
                            {this.genItem(6, 1)}
                            {this.genItem(7, 2)}
                            {this.genItem(8, 1)}
                            {this.genItem(9, 2)}
                            {this.genItem(10, 1)}
                        </div>
                        <div className="tab-pane fade" id="pills-snacks" role="tabpanel" aria-labelledby="snacks-tab">
                            {this.genItem(11, 0)}
                            {this.genItem(12, 0)}
                            {this.genItem(13, 1)}
                            {this.genItem(14, 0)}
                            {this.genItem(15, 0)}
                        </div>
                        <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="dinner-tab">
                            {this.genItem(16, 2)}
                            {this.genItem(17, 1)}
                            {this.genItem(18, 2)}
                            {this.genItem(19, 2)}
                        </div>
                        <div className="tab-pane fade" id="pills-secondDinner" role="tabpanel" aria-labelledby="secondDinner-tab">
                            {this.genItem(20, 1)}
                            {this.genItem(21, 2)}
                            {this.genItem(22, 2)}
                            {this.genItem(23, 2)}
                        </div>
                    </div>
                </React.Fragment >
            );
        }
    }
}

export default Menu;