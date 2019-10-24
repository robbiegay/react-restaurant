import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.restFirstName = ["Robbie's", 'Hometown', 'Local', 'Pretty Decent', 'Organic'];
        this.restSecondName = ['Yummy Stuff', 'Inventions', 'Food', 'Plates', 'Experience', 'Snacks', 'Express'];
    }

    // Generates a random restaurant name
    randomName() {
        let x = Math.floor(Math.random() * 5);
        let y = Math.floor(Math.random() * 7);
        return <h1 className='text-primary'>{this.restFirstName[x]} {this.restSecondName[y]}</h1>;
    }

    // Generates random restaurant operating hours
    randomHours() {
        const earliestTime = 6;
        let openAt = earliestTime + Math.floor(Math.random() * 5);
        let closeAt = Math.floor(Math.random() * 6);
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