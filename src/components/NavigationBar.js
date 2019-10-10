import React, { Component } from 'react';

class NavigationBar extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <div>
                <div className="l-cs">
                    <p className='navText'><a>Teatro</a></p>
                    <br />
                    <p className='navText'><a>Poemas</a></p>
                </div>
            </div >
        );
    }
}

export default NavigationBar;