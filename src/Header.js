import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.restFirstName = ["Andy's", "Amazing", "Awesome", "Alright"];
        this.restSecondName = ["Igloo", "Inventions", "Iterations", "Ideas"];
    }

    randomName() {
        let x = Math.floor(Math.random() * 4);
        let y = Math.floor(Math.random() * 4);
        return <h1 className='text-primary'>{this.restFirstName[x]} {this.restSecondName[y]}</h1>;
    }

    randomHours() {
        let openAt = 6 + Math.floor(Math.random() * 5);
        let closeAt = Math.floor(Math.random() * 7);
        return <h2>Hours: {openAt}am – {openAt - closeAt}pm</h2>
    }

    render() {
        return (
            <React.Fragment>
                {this.randomName()}
                <h2 className='text-secondary'>348 E. Main St., Lexington, KY</h2>
                {this.randomHours()}
            </React.Fragment>
        );
    }
}

export default Header;