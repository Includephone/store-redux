import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../../actions';
import Data from '../../service/data';
import Item from '../item';

class ItemPage extends Component{
    state={
        item:null,
        loading: true
    }
    data = new Data();
    componentDidMount(){
        this.data.getItem(this.props.match.params.id).then((item)=>{
            this.setState({item, loading:false})
        });
    }
    render(){
        const {item, loading} = this.state;
        if(loading){
            return(<p>loading...</p>)
        }
        return(
        <Item item={item} addToCart={this.props.addToCart}/>
        )
    }
};


const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addToCart: addToCart
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(ItemPage);