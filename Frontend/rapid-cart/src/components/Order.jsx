import {useEffect, useState} from "react";



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
                    <div className="flex items-center bg-amber-100 mx-1 hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                            <div className="w-20 mx-2">
                                <img className="h-24" src="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png"
                                     alt="">
                                </img>
                            </div>
                            <div className="flex flex-col justify-between ml-4 pr-5 flex-grow">
                                <span className="font-bold text-sm">{item.name}Apple</span>
                                <span className="text-red-500 text-xs">{item.categoryId}Produce</span>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <div className="">
                                <span className="font-bold text-md"></span>
                            </div>
                            <div className="">
                                <span className="font-bold text-md">{item.quantity}</span>
                            </div>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">${item.itemPrice}</span>
                        <span className="text-center w-1/5 font-semibold text-sm">${item.itemPrice * item.quantity}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Order;