import {useEffect, useState} from "react";
import Order from "./Order";

const url = "http://localhost:5000/api/order/user/1";




function Orders(props) {

    // fetch orders from DB
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        GetOrders();
    }, [setOrders]);

    const GetOrders =  () => {
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        fetch(url,get)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    // fetch orderItems table by orderId and userId from DB
    // "orderId": 2,
    //     "userId": 2,
    //     "totalCost": 92,
    //     "dateCreated": "2022-03-11T00:00:00",
    //     "orderItems": null
    // "orderId": 1,
    // "userId": 1,

    return (
        <div className="orders">
            {orders.map(order => (
                <div>hi
                <Order key={order.orderId} orderNum={order.orderId} total={order.totalCost} date={order.dateCreated} />
                </div>
            ))}
        </div>
)
}
export default Orders;