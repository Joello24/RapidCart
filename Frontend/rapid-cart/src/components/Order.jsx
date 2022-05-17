import {useEffect, useState} from "react";
import OrderItem from "./OrderItem";



function Order(props) {

    function newDate(date) {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        const formatDate = month + "/" + day + "/" + year;
        return formatDate;
    }

    const [isHidden, setIsHidden] = useState(true);

    const handleClickDetails = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div>
            <div className="bg-black h-1">

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
                <div className="bg-green-500 p-3">
                    <span className="font-bold text-lg">Order #:{props.order.orderId}  --  {newDate(props.order.dateCreated)}</span>
                </div>
                <div className="p-3 bg-green-200">
                    <span className="font-bold text-md">Items: {props.order.orderItems.length}</span>
                </div>
                <div className="p-3 bg-green-500">
                    <span className="font-bold text-md">${props.order.totalCost}</span>
                </div>
                <div className="p-3 bg-green-200">
                    <button onClick={handleClickDetails} className="rounded-lg bg-red-400 hover:bg-red-500 px-3 py-1 font-bold">Order details</button>
                </div>
            </div>
            <div hidden={isHidden}>
                <div className="flex py-10 bg-amber-200 mt-1 mb-1">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase pl-20 w-2/5">Product Details</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>
                {props.order.orderItems.map(item => (
                    <OrderItem key={item.itemId} item={item} />
                ))}
            </div>
        </div>
    )
}
export default Order;