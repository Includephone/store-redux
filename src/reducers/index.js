const initalState = {
    items: [],
    cart: [],
    total: 0
};

const updateCart = (state, newId, action)=>{
    const newArray = editCartItem(state, newId, action);
    const newTotal = newArray.reduce( function(a, b){
                        return a + b['price'];
                    }, 0);
    console.log(newId.id);
    return {
        ...state,
        cart: newArray,
        total: newTotal
    };
}

const newCartItem = (item, itemInCart={}, action)=>{
    const {count = 0, price=0} = itemInCart;
    return{
        id: item.id,
        title: item.title,
        price: price + item.price*action,
        count: count + action
    };
};

const editCartItem =(state, newId, action)=>{
    const item = state.items.find(({id})=>id===newId.id);
    console.log(state.cart);
    const isset = state.cart.findIndex(({id})=>id===newId.id);
    const itemInCart = state.cart[isset];
    if(action===0){
        return[
            ...state.cart.slice(0, isset),
            ...state.cart.slice(isset+1)
        ]
    }
    const newItem = newCartItem(item, itemInCart, action);
    if(newItem.count === 0){
        return[
            ...state.cart.slice(0, isset),
            ...state.cart.slice(isset+1)
        ]
    }
    return [
        ...state.cart.slice(0, isset),
        newItem,
        ...state.cart.slice(isset+1)
    ];
}

const reducer = (state=initalState, action)=>{
    switch(action.type){
        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                items:action.items,
            }
        case 'ADD_TO_CART':
            return updateCart(state, action.item, 1)
        case 'DEC_ITEM_CART':
            return updateCart(state, action.item, -1)
        case 'DELETE_ITEM_CART':
            return updateCart(state, action.item, 0)
        default:
            return state;
    }
}

export default reducer;