import {useEffect, useState} from "react";



function Order(props) {


    
    const [items, setItems] = useState([]);

    useEffect(() => {
        GetItems();
    }, [setItems]);

    const GetItems = () => {
        const url = "http://localhost:5051/api/orderitem/GetAll/" + props.orderNum;
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
                }
            )
            .catch(err => console.log(err));
    }



   
    const [isHidden, setIsHidden] = useState(true);
    return (
        
        <div >
                 
            {/*itemId: 156*/}
            {/*itemPrice: 21*/}
            {/*orderId: 1*/}
            {/*quantity: 3*/}
            {/*totalCost: 63*/}
            {props.orderNum}
            {props.total}
            {props.date}
            {items.map(item => (
                <div className="mx-2 my-2 text-teal-500 ">

                    PRICE: ${item.itemPrice}
                    ORDER ID: {item.orderId}
                    QUANTITY: {item.quantity}
                    TOTAL: {item.totalCost}
                    </div>
                )
            )}
            
            

</div>
    )
}
export default Order;