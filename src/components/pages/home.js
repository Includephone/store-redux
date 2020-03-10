import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemListContainer from '../containers/item-list-container';

const Home = ()=>{
    return <ItemListContainer/>
}


export default Home;