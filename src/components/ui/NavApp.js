import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../reducers/actions/auth';

export const NavApp = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav__container">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to="/home" className="navbar-brand nav__item" >
                            <i className="fas fa-mask navbar-brand nav__item" />Home
                        </Link>
                    </div>
                    <Link to="/auth" className="btn btn-red-orange" onClick={ handleLogout }>Logout</Link>
                </div>
            </nav>
        </div>
    );
}
