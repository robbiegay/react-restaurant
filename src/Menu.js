import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="apps-tab" data-toggle="pill" href="#pills-apps" role="tab" aria-controls="pills-apps" aria-selected="true">Appetizers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Lunch</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="snacks-tab" data-toggle="pill" href="#pills-snacks" role="tab" aria-controls="pills-snacks" aria-selected="false">Snacks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="dinner-tab" data-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="secondDinner-tab" data-toggle="pill" href="#pills-secondDinner" role="tab" aria-controls="pills-secondDinner" aria-selected="false">Second Dinner</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-apps" role="tabpanel" aria-labelledby="apps-tab">These are the apps</div>
                    <div class="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="lunch-tab">Lunch time!</div>
                    <div class="tab-pane fade" id="pills-snacks" role="tabpanel" aria-labelledby="snacks-tab">Snacks Snacks Snacks</div>
                    <div class="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="dinner-tab">Time for dinner!!!</div>
                    <div class="tab-pane fade" id="pills-secondDinner" role="tabpanel" aria-labelledby="secondDinner-tab">Time for a second dinner!!!!!</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;