import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Header=({total})=>{
    let sum;
    if (total == 0){
        sum = 'Cart'
    }
    else{
        sum=`Cart - ${total} $`
    }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link to="/cart/" className="nav-link">{sum}</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = (state)=>{
    return {
        total: state.total
    };
};

export default connect(mapStateToProps)(Header);