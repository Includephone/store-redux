import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({items, addToCart})=>{
    return (
        <div className="d-flex">
            {items.map((item)=>{
                return(
                    <div class="card ml-4" key={item.id}>
                    <img class="card-img-top" width="286" height="180" src={item.urlImg} alt="Card image cap"/>
                    <div class="card-body">
                        
                            <Link to={`/item/${item.id}`} className="nav-link">
                            {item.title}
                            </Link>
                        <p class="card-text">{item.description}</p>
                        <button onClick={()=>addToCart(item)} class="btn btn-primary">Add to Cart</button>
                    </div>
                    </div>
                )
            })}
        </div>
    )
};

export default ItemList;