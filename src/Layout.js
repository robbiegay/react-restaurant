import React from 'react';
import Header from './Header.js';
import Menu from './Menu.js';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-0 col-sm-0 col-md-1 col-lg-2 bg-warning' />
                        <div className='col-12 col-sm-12 col-md-10 col-lg-8 text-center'>
                            <Header />
                            <Menu />
                        </div>
                        <div className='col-0 col-sm-0 col-md-1 col-lg-2 bg-warning' />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;