import Item from './Item';
import {useEffect, useState} from "react";

const url = 'http://localhost:5051/api/item';

const searchurl = "http://localhost:5051/api/report/search/";

const sortByCategoryurl = "http://localhost:5000/api/report/GetByCategory/";

function Shop (props) {

    const [items, setItems] = useState([]);

    const [cart, setCart] = useState([]);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [searchResultBool, setSearchResultBool] = useState(false);

    const [sortByCategory, setSortByCategory] = useState('');

    useEffect(() => {
        GetItems();
    }, [setItems]);
    useEffect(() => {
        HandleItemSearch();
    }, [searchResultBool]);

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

    const init = {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
    };
    
    const HandleItemSearch = (val) => {
      
        setSearch(val);

        function HandleSearchResults()
        {
            
            
            return fetch(searchurl + val, init)
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


    const HandleSortByCategory = () => {
        const init = {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        };
        function HandleSearchResults()
        {
            return fetch(sortByCategoryurl + sortByCategory, init)
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
    }


    const HandleChange = (evt) => {
        const searchInput = document.getElementById("searchInput");
        console.log(evt.target.value);
        HandleItemSearch(searchInput.value);
    }

    return (
        <div className="h-screen w-screen bg-gray-50 p-5">
            <div className="my-2">
                <input id="searchInput" placeholder="Search..." className="w-1/3 rounded py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" type="text" />
                <button className="bg-green-500 px-2 mx-2 box-border text-white font-bold" onClick={HandleChange}>search</button>
                <label className="text-red-600 font-bold" htmlFor="search">{searchResultBool ? " No results found":""}</label>

                <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">Dropdown button <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor"
                                                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg></button>
                <div id="dropdown"
                     className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#"
                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                out</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/*TODO: DEACTIVATE ADD TO CART AFTER ITEM IS ALREADY ADDED TO CART*/}
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {items.map(item => (
                    <Item key={item.itemId} name={item.name} discount={.15} price={item.price} inventory={item.inventory} item={item} add={() => addToCart(item)} />
                ))}
            </div>
        </div>
    )
}
export default Shop;