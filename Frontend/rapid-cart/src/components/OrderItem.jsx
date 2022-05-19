import { useState, useEffect } from "react";

function OrderItem(props){

    const[isLoaded, setIsLoaded] = useState(false);
    const [thing, setThing] = useState();

    useEffect(() => {
        GetItemDetails(props.item.itemId);
      }, []);

    const GetItemDetails = (id) => {
        const url = "http://localhost:5051/api/item/" + id;
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        fetch(url, get)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setThing(json);
                return true;
            })
            .then(() => setIsLoaded(true))
            .catch(err => console.log(err));
    }

    
    return(
        <div className="flex items-center bg-amber-100 mx-1 hover:bg-gray-100 -mx-8 px-6 py-5">
            {isLoaded ? 
                <>
                <div className="flex w-2/5">
                    <div className="w-20 mx-2">
                        <img className="h-24" src={thing.path}
                            alt="">
                        </img>
                    </div>
                    <div className="flex flex-col justify-center ml-4 pr-5 flex-grow">
                        <span className=" text-md">{thing.name}</span>
                    </div>
                </div>
                <div className="flex justify-center w-1/5">
                    <div className="">
                        <span className=" text-md">{props.item.quantity}</span>
                    </div>
                </div>
                <span className="text-center w-1/5 text-md">${props.item.itemPrice}</span>
                <span className="text-center w-1/5 text-md">${props.item.itemPrice * props.item.quantity}</span>
            </>
            : ""}   
        </div>
    )
}
export default OrderItem;