import {useEffect, useState} from "react";
import Order from "./Order";
const reportUrl = "http://localhost:5051/api/report/OrderReport/";

function OrderList(props){
    const [orderReport, setOrderReport] = useState([]);

    useEffect(() => {

    }, []);

    const GetOrders = () => {
        const url = reportUrl + props.user.userId;
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        fetch(url, get)
            .then(res => res.json())
            .then(data => {
                setOrderReport(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="orders">
            <div className="text-center">
                Orders:
            </div>
            <button onClick={GetOrders}>
                Get Orders
            </button>
            <div className="text-gray-900 bg-gray-100 font-body">
                <div className="lg:col-span-4">
                    <div className="mt-16">

                        <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-10">
                                <div className="bg-white rounded-lg shadow-md lg:border-l-8 border-gray-800 text-center hover:shadow-lg order">
                                    <div>
                                        {orderReport.map (o => (
                                            <div key={o.orderId}>
                                                <Order key={o.orderId} order={o} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderList;