import Item from './Item';
import {useEffect, useState} from "react";
import Example from "./CategoryDropdown";
import { Route } from 'react-router-dom';
import AddItem from './AddItemForm';

const url = 'http://localhost:5000/api/item';

const searchurl = "http://localhost:5000/api/report/search/";

const sortByCategoryurl = "http://localhost:5000/api/report/GetByCategory/";

function Shop (props) {

    const [items, setItems] = useState([]);

    const [cart, setCart] = useState(props.currentCart);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [searchResultBool, setSearchResultBool] = useState(false);

    const [sortByCategory, setSortByCategory] = useState('');

    const[ admin, setadmin] = useState(true);
    
    const[addButtonHidden, setAddButtonHidden] = useState(true);

    const handleAdmin = () => {
        if(admin){
            setadmin(false);
            setAddButtonHidden(true);
        }
        else{
        setadmin(!admin);
        }
    }
    
    const handleAdd = () => {
        setAddButtonHidden(!addButtonHidden);
        
    }


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


    const RemoveItem = (item) =>{
        console.log(item);
        const init = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
            },
        };
        fetch(url + "/" + item.itemId, init)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
                .then(data => {
                    GetItems();
                })
                .catch(err => console.log(err));
        };
        
    

    function AddNewItem(item){

        const newBody = JSON.stringify({
            "categoryId": 1,
            "name": item.name,
            "description": item.description,
            "price": item.price,
            "inventory": item.inventory,
            "path": item.path,
            "orderItem": null
        
        })

        const init = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",


            },

            body: newBody
        };
        fetch(url , init)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        GetItems();
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    GetItems();
                })
                .catch(err => console.log(err));
        };

    return (
        <div className="">
            <div className="text-center font-bold text-6xl bg-green-100">
                Item Shop
            </div>
                <span className="float-right mr-10">
                     <button  onClick={handleAdmin} className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700">Admin</button>
                     
                     <button hidden={admin}  onClick={handleAdd} className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700" >Add Item</button>
                    
                 </span>
                <span  hidden={addButtonHidden} className="float-right mr-10 ">
                    <AddItem  AddItem ={AddNewItem} />
                </span>
            <div className="bg-green-100 text-center mb-20 pb-20 ml-2 pt-10">
                <input id="searchInput" placeholder="Search..." className="w-1/3 rounded py-2 border-b-2 border-gray-600 outline-none focus:border-green-400" type="text" />
                <button className="bg-green-500 px-2 mx-2 box-border text-white font-bold" onClick={HandleChange}>search</button>
                <label className="text-red-600 font-bold" htmlFor="search">{searchResultBool ? " No results found":""}</label>

            </div>

            {/*TODO: DEACTIVATE ADD TO CART AFTER ITEM IS ALREADY ADDED TO CART*/}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
               
                {items.map(item => (
                    <Item key={item.itemId} admin={admin} Delete={() => RemoveItem(item)} name={item.name} discount={.15} price={item.price} inventory={item.inventory} path ={item.path} item={item} add={() => addToCart(item)} />
                ))}
            </div>
        </div>
    )
}
export default Shop;