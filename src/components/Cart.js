import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const [newItem, setNewItem] = useState();
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        if(item == '' || item == undefined || item == null)
             return;
        dispatch(addItem(item));
    }
    return (
        <>
        <h1>Cart</h1>
        <p>
            {cartItems.map(item => {return item + ' '})}
        </p>

        <div>
            <input type="text" placeholder="Item name" onChange={(e) => setNewItem(e.target.value)} required></input>
            <button onClick={()=>handleAddItem(newItem)}>Add Item</button>
        </div>
        </>
    );
}

export default Cart;