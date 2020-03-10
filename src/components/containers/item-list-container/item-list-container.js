import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Data from '../../../service/data';
import {getData, addToCart} from '../../../actions';
import ItemList from '../../item-list';

class ItemListContainer extends Component{
    componentDidMount(){
        const {getData}  = this.props;
        getData();
    }

    componentDidUpdate(){
    }

    render(){
        return <ItemList items={this.props.items} addToCart={this.props.addToCart}/>
    };
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    };
};

const mapDispatchToProps=(dispatch)=>{
    const data = new Data();
    return bindActionCreators({
        getData: getData(data),
        addToCart: addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);