import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuItems: 'Generic Food' };
    }

    getMenuItems() {
        // 'this' can't be accessed in fetch, so I pass it in as a variable
        const that = this;
        fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
            response.json().then(function (data) {
                that.setState({ menuItems: data.menu_items });
            });
        });

    }

    // Controller
    componentDidMount() {
        this.getMenuItems();
    }

    componentWillUnmount() {

    }

    // Lets me generate random prices, in a low, medium, high range
    setPrice(x) {
        const priceRange = [5, 10, 15]
        return `$${Math.ceil(Math.random() * 5) + priceRange[x]}`;
    }

    render() {
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
                    <div className="tab-pane fade show active" id="pills-apps" role="tabpanel" aria-labelledby="apps-tab">{this.state.menuItems[0].description} {this.setPrice(0)}</div>
                    <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="lunch-tab">Lunch items {this.setPrice(0)}</div>
                    <div className="tab-pane fade" id="pills-snacks" role="tabpanel" aria-labelledby="snacks-tab">Snacks — lots of them {this.setPrice(1)}</div>
                    <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="dinner-tab">Dinner. Yum. {this.setPrice(2)}</div>
                    <div className="tab-pane fade" id="pills-secondDinner" role="tabpanel" aria-labelledby="secondDinner-tab">Still hungry? {this.setPrice(1)}</div>
                    {console.log(this.state)}
                </div>
            </React.Fragment >
        );
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