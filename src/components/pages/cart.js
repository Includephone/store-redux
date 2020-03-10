import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, decItemCart, deleteItemCart} from '../../actions';
const Cart=({cart, addToCart, decItemCart, deleteItemCart})=>{
    console.log(cart);
    return(
        <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col"></th>
                <th scope="col">Title</th>
                <th scope="col">Count</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, idx)=>{
                    return(
                        <tr key={item.id}>
                            <th scope="row">{idx+1}</th>
                            <td>{item.title}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>decItemCart(item)}>-</button>
                                {item.count}
                                <button className="btn btn-success" onClick={()=>addToCart(item)}>+</button>    
                            </td>
                            <td>
                                {item.price}
                                <button className="btn btn-primary float-right" onClick={()=>deleteItemCart(item)}>X</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

const mapStateToProps = (state)=>{
    return{
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        addToCart: addToCart,
        decItemCart: decItemCart,
        deleteItemCart: deleteItemCart
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);