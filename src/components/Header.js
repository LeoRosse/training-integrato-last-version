import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Training Integrato</span>
                        <span className="heading-primary--sub">Alberto Santarato</span>
                    </h1>

                </div>
            </header>
        )
    }
};

export default Header;