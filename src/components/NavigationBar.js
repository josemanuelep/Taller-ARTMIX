import React, { Component } from 'react';
import { FaHome, FaNewspaper } from "react-icons/fa";

class NavigationBar extends Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (
            <div>
                <div className="l-cs">
                    <p className='navText'><FaHome /><a>  Teatro</a></p>
                    <br />
                    <p className='navText'><FaNewspaper /><a>  Poemas</a></p>
                </div>
            </div >
        );
    }
}

export default NavigationBar;