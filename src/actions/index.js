const getData=(data)=>()=>(dispatch)=>{
    data.getData().then((items)=>{
        dispatch(dataLoaded(items))
    })
};

const dataLoaded=(items)=>{
    return {
        type:'FETCH_ITEMS_SUCCESS',
        items
    };
};

const addToCart=(item)=>{
    return{
        type:'ADD_TO_CART',
        item
    };
};

const decItemCart=(item)=>{
    return{
        type:'DEC_ITEM_CART',
        item
    };
};

const deleteItemCart=(item)=>{
    return{
        type:'DELETE_ITEM_CART',
        item
    };
};

export {getData, addToCart,
    decItemCart,
    deleteItemCart
};