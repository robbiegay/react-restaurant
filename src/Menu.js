import React from 'react';


// Model
// function getMenuItems(x) {
//     fetch('https://entree-f18.herokuapp.com/v1/menu/12').then(function (response) {
//         response.json().then(function (data) {
//             console.log(data.menu_items[x].description);
//             // return data.menu_items[x].description;
//             // SET STATE
//             this.setState({item0:data.menu_items});
//         });
//     });
// }

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item0: null};
    }

    // Controller
    componentDidMount() {
        // this.setState({item0: getMenuItems(0)});
        getMenuItems(0);
    }

    componentWillUnmount() {

    }

    setPrice(x) {
        let priceRange = [5, 10, 15]
        let y = Math.random() * priceRange[x];
        return `$${Math.ceil(Math.random() * y)}`;
    }

    render() {
        return (
            <React.Fragment>
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
                    <div className="tab-pane fade show active" id="pills-apps" role="tabpanel" aria-labelledby="apps-tab">{this.state.item0}</div>
                    <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="lunch-tab">Lunch iteams {this.setPrice(1)}</div>
                    <div className="tab-pane fade" id="pills-snacks" role="tabpanel" aria-labelledby="snacks-tab">Snacks — lots of them</div>
                    <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="dinner-tab">Dinner. Yum.</div>
                    <div className="tab-pane fade" id="pills-secondDinner" role="tabpanel" aria-labelledby="secondDinner-tab">Still hungry?</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;