import Item from './Item';
import {useEffect, useState} from "react";
const url = 'http://localhost:5000/api/item';


function Shop (props) {

    const [items, setItems] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        GetItems();
    }, [setItems]);
    const addToCart = (item) => {
        setCart([...cart, item]);
        props.setCartItems(item);
    };

    const GetItems = () => {
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        fetch(url, get)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="h-screen w-screen bg-gray-50 p-5">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {items.map(item => (
                    <Item key={item.itemId} name={item.name} discount={.15} price={item.price} inventory={item.inventory} item={item} add={() => addToCart(item)} />
                ))}
            </div>
        </div>
    )
}
export default Shop;