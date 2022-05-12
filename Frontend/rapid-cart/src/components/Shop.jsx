import Item from './Item';
import {useEffect, useState} from "react";
const url = 'http://localhost:5000/api/item';

const searchurl = "http://localhost:5000/api/report/search/a";

function Shop (props) {

    const [items, setItems] = useState([]);

    const [cart, setCart] = useState([]);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [searchResultBool, setSearchResultBool] = useState(false);

    useEffect(() => {
        GetItems();
    }, [setItems]);
    useEffect(() => {
        HandleItemSearch();
    }, [searchResults]);

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

    const HandleItemSearch = () => {
        const init = {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        };

        function HandleSearchResults()
        {
            return fetch(searchurl + search, init)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        GetItems();
                        setSearchResultBool(true);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        HandleSearchResults().then(data => {
            setSearchResultBool(false)
            setSearchResults(data);
            setItems(data);
            console.log(data);
        });
    };

    const HandleChange = (evt) => {
        console.log(evt.target.value);
        setSearch(evt.target.value);
        HandleItemSearch();
    }

    return (
        <div className="h-screen w-screen bg-gray-50 p-5">
            <div className="my-2">
                <input placeholder=" Search..." className="w-1/3 rounded py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" type="text" onChange={HandleChange}/>
                <label className="text-red-600 font-bold" htmlFor="search">{searchResultBool ? " No results found":""}</label>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {items.map(item => (
                    <Item key={item.itemId} name={item.name} discount={.15} price={item.price} inventory={item.inventory} item={item} add={() => addToCart(item)} />
                ))}
            </div>
        </div>
    )
}
export default Shop;