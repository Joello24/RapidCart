import Item from './Item';
import {useState} from "react";



function Shop (props) {

    const [items, setItems] = useState([]);

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    return (
        <div className="h-screen w-screen bg-gray-50 p-5">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {/*{items.map(item => (*/}
                {/*<Item name={item.name} discount={item.discount} price={item.price}/>*/}
                {/*))}*/}
                {cart}
                <Item name="Apple" discount="10%" price="100" oldPrice="90" item={this} addToCart={addToCart}/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
                <Item name="Apple" discount="10%" price="100" oldPrice="90"/>
            </div>
        </div>
    )
}
export default Shop;