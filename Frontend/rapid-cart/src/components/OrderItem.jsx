import { useState } from "react";

function OrderItem(props){

    const [item,setItem] = useState();


    return(
        <div className="flex items-center bg-amber-100 mx-1 hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20 mx-2">
                    <img className="h-24" src={props.item.path}
                         alt="">
                    </img>
                </div>
                <div className="flex flex-col justify-between ml-4 pr-5 flex-grow">
                    <span className="font-bold text-sm">{props.item.name}</span>
                    <span className="text-red-500 text-xs">{props.item.categoryId}</span>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <div className="">
                    <span className="font-bold text-md"></span>
                </div>
                <div className="">
                    <span className="font-bold text-md">{props.item.quantity}</span>
                </div>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">${props.item.itemPrice}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${props.item.itemPrice * props.item.quantity}</span>
        </div>
    )
}
export default OrderItem;