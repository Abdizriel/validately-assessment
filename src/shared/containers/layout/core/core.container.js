import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import './core.scss';

export default class Core extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    render () {
        return (
            <div className="core-layout">
                <nav className="navbar">
                    <div className="navbar__container container">
                        <h2 className="navbar__branding">
                            <img src={require('../../../../assets/logotype.png')} className="navbar__logotype"/>
                            Timezonely
                        </h2>
                        <div className="navbar__items">
                            <NavLink
                                to="/"
                                className="navbar__item"
                                activeClassName="navbar__item--active">Overview</NavLink>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}