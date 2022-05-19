import {useEffect, useState} from "react";
import OrderItem from "./OrderItem";


const testitem = {
        "itemId": 2,
        "categoryId": 2,
        "name": "Choclate Cake",
        "description": "nam congue",
        "price": 96,
        "inventory": 49,
        "path": "https://i5.walmartimages.com/asr/be194135-1cf4-4312-bf84-a4fbebc2d54c.a3cc48afcea7f5c8d2963782fb1f6ba3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "orderItem": null
    }

function Order(props) {

    function newDate(date) {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        const formatDate = month + "/" + day + "/" + year;
        return formatDate;
    }

    const [isHidden, setIsHidden] = useState(true);
    const [item, setItem] = useState([]);

    const GetItemDetails = (id, setIsHidden) => {
        const url = "http://localhost:5000/api/item/" + id;
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        fetch(url, get)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setItem(json);
                setIsHidden();
            })
            .catch(err => console.log(err));
    }

    const handleClickDetails = (id) => {
        GetItemDetails(id, () => setIsHidden(!isHidden));
    }

    return (
        <div>
            <div className=" grid grid-cols-1 lg:grid-cols-4 border-2 text-white">
                <div className="bg-green-600 p-3">
                    <span className="font-bold text-lg">Order # : {props.order.orderId}  --  {newDate(props.order.dateCreated)}</span>
                </div>
                <div className="p-3 bg-green-500">
                    <span className="font-bold text-md">{props.order.orderItems.length} Items</span>
                </div>
                <div className="p-3 bg-green-600">
                    <span className="font-bold text-md">${props.order.totalCost}</span>
                </div>
                <div className="p-3 bg-green-500">
                    <button onClick={handleClickDetails} className="bg-stone-200 font-semibold hover:bg-stone-300 py-3 text-base uppercase px-3 py-1 font-bold text-green-900">Order details</button>
                </div>
            </div>
            <div hidden={isHidden}>
                <div className="flex py-10 bg-stone-200 mt-1 mb-1">
                    <h3 className="font-bold text-gray-600 text-sm uppercase pl-20 w-2/5">Product Details</h3>
                    <h3 className="font-bold text-center text-gray-600 text-sm uppercase w-1/5 text-center">Quantity</h3>
                    <h3 className="font-bold text-center text-gray-600 text-sm uppercase w-1/5 text-center">Price</h3>
                    <h3 className="font-bold text-center text-gray-600 text-sm uppercase w-1/5 text-center">Total</h3>
                </div>
                {props.order.orderItems.map(item => (
                    <OrderItem key={item.itemId} item={item}/>
                ))}
            </div>
        </div>
    )
}
export default Order;