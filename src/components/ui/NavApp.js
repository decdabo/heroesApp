import React from 'react';
import { Link } from 'react-router-dom';

export const NavApp = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav__container">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand nav__item" >Home</Link>
                </div>
            </nav>
        </div>
    )
}
