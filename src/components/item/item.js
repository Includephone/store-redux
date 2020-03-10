import React from 'react';
import './item.css';

const Item=({item, addToCart})=>{
    console.log(item);
    return(
        <div className="row">
            <div classname="col-5">
                <img src={item.urlImg}/>
            </div>
            <div className="col-7">
                <div className="mx-auto w-75 text-center my-5">
                    <h1>{item.title}</h1>
                    <span className="my-10">{item.description}</span>
                    <h5>Price: {item.price}</h5>
                    <button className="btn btn-outline btn-success" onClick={()=>addToCart(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Item;