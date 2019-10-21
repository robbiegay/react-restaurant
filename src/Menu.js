import React from 'react';
import Card from './Card';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuItems: 'Generic Food',
            // initialized: false
         };
    }

    getMenuItems() {
        // 'this' can't be accessed in fetch, so I pass it in as a variable
        let menuArr = [];
        const that = this;
        for (let i = 0; i < 2; i++) {
            fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
                response.json().then(function (data) {
                    // localStorage.setItem(`menu${i}`, JSON.stringify(data.menu_items));
                    for (let i in data.menu_items) {
                        menuArr.push(data.menu_items[i]);
                    }
                    // that.setState({ menuItems: data.menu_items });
                    localStorage.setItem('menu', JSON.stringify(menuArr));
                    that.setState({ menuItems: JSON.parse(window.localStorage.menu) });
                });
            });
        }
        // this.setState(menuArr);
        // console.log(menuArr);
        // localStorage.setItem('menu', JSON.stringify(menuArr));
        // this.setState({ menuItems: JSON.parse(window.localStorage.menu) });
    }

    // Controller
    componentDidMount() {
        if (!window.localStorage.length) {
            this.getMenuItems();
            // this.setState({ initialized: true });
        } else {
            this.setState({ menuItems: JSON.parse(window.localStorage.menu) });
        }
    }

    componentWillUnmount() {

    }

    // Lets me generate random prices, in a low, medium, high range
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
        // console.log(this.state.menuItems['menu0']);
    }

    render() {
        if(window.localStorage.length < 1){ //JSON.parse(window.localStorage.menu).length
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
                            <Card mealTitle={this.getText('title', 0)} mealDescription={this.getText('des', 0)} mealPrice={this.setPrice(0)} />
                            <Card mealTitle={this.getText('title', 1)} mealDescription={this.getText('des', 1)} mealPrice={this.setPrice(0)} />
                            <Card mealTitle={this.getText('title', 2)} mealDescription={this.getText('des', 2)} mealPrice={this.setPrice(0)} />
                            <Card mealTitle={this.getText('title', 3)} mealDescription={this.getText('des', 3)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 4)} mealDescription={this.getText('des', 4)} mealPrice={this.setPrice(0)} />
                        </div>
                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="lunch-tab">
                            <Card mealTitle={this.getText('title', 5)} mealDescription={this.getText('des', 5)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 6)} mealDescription={this.getText('des', 6)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 7)} mealDescription={this.getText('des', 7)} mealPrice={this.setPrice(2)} />
                            <Card mealTitle={this.getText('title', 8)} mealDescription={this.getText('des', 8)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 9)} mealDescription={this.getText('des', 9)} mealPrice={this.setPrice(2)} />
                            <Card mealTitle={this.getText('title', 10)} mealDescription={this.getText('des', 10)} mealPrice={this.setPrice(1)} />
                        </div>
                        <div className="tab-pane fade" id="pills-snacks" role="tabpanel" aria-labelledby="snacks-tab">
                            <Card mealTitle={this.getText('title', 11)} mealDescription={this.getText('des', 11)} mealPrice={this.setPrice(0)} />
                            <Card mealTitle={this.getText('title', 12)} mealDescription={this.getText('des', 12)} mealPrice={this.setPrice(0)} />
                            <Card mealTitle={this.getText('title', 13)} mealDescription={this.getText('des', 13)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 14)} mealDescription={this.getText('des', 14)} mealPrice={this.setPrice(0)} />
                            <Card mealTitle={this.getText('title', 15)} mealDescription={this.getText('des', 15)} mealPrice={this.setPrice(0)} />
                        </div>
                        <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="dinner-tab">
                            <Card mealTitle={this.getText('title', 16)} mealDescription={this.getText('des', 16)} mealPrice={this.setPrice(2)} />
                            <Card mealTitle={this.getText('title', 17)} mealDescription={this.getText('des', 17)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 18)} mealDescription={this.getText('des', 18)} mealPrice={this.setPrice(2)} />
                            <Card mealTitle={this.getText('title', 19)} mealDescription={this.getText('des', 19)} mealPrice={this.setPrice(2)} />
                        </div>
                        <div className="tab-pane fade" id="pills-secondDinner" role="tabpanel" aria-labelledby="secondDinner-tab">
                            <Card mealTitle={this.getText('title', 20)} mealDescription={this.getText('des', 20)} mealPrice={this.setPrice(1)} />
                            <Card mealTitle={this.getText('title', 21)} mealDescription={this.getText('des', 21)} mealPrice={this.setPrice(2)} />
                            <Card mealTitle={this.getText('title', 22)} mealDescription={this.getText('des', 22)} mealPrice={this.setPrice(2)} />
                            <Card mealTitle={this.getText('title', 23)} mealDescription={this.getText('des', 23)} mealPrice={this.setPrice(2)} />
                        </div>
                        {console.log(this.state)}
                    </div>
                </React.Fragment >
            );
        }
    }
}

export default Menu;





// Model
// function getMenuItems() {
//     fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
//         response.json().then(function (data) {
//             // SET STATE
//             // this.setState({ menuItems: data.menu_items });
//             this.setState({ menuItems: 'Test Food' });
//             // console.log(data.menu_items);
//         });
//     });
// }

// async getMenuItems() {
//     this.setState({ menuItems: 'eruireuireuiertui' });
//     let x = await fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
//         response.json().then(function (data) {
//             console.log(data.menu_items);
//             return data.menu_items;
//         });
//     });
//     console.log(`x = ${x}`);
//     this.setState({ menuItems: x });
// }

// fetchAPI() {
//     fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
//         response.json().then(function (data) {
//             return data.menu_items;
//         });
//     });
// }