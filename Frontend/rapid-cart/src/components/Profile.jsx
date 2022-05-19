import { useState, useEffect } from "react";
import Order from "./Order";
const reportUrl = "http://localhost:5000/api/report/OrderReport/";

function Profile(props) {
    const [isViewing, setIsViewing] = useState(false);

    const [orders, setOrders] = useState([]);
    const [orderReport, setOrderReport] = useState([]);
    const [itemReportState, setItemReportState] = useState([]);
    const [user, setUser] = useState(props.user);

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
                (setIsViewing(!isViewing))
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="text-center">
            <div className="container mx-auto text-lg">
                <h1 className="text-3xl pt-6">Account Summary</h1>
                <div className="py-4">
                    <div>
                        <label className="">FirstName</label>
                        <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" type="text" disabled={true}
                            value={props.user.firstName}/>
                    </div>
                    <div>
                        <label className="">LastName</label>
                        <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" type="text" disabled={true}
                            value={props.user.lastName}/>
                    </div>
                    <div>
                        <label className="">Email</label>
                        <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" type="email" disabled={true}
                            value={props.user.email}/>
                    </div>
                    <div>
                        <label className="">Phone</label>
                        <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" type="text" disabled={true}
                            value={props.user.phone}/>
                    </div>
                </div>
                <hr />
                <div className="py-4">
                    {
                        isViewing ? <button className="bg-red-500 font-semibold hover:bg-red-600 py-3 text-base text-white uppercase w-1/4" onClick={GetOrders}>Close Orders</button>
                                  : <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-base text-white uppercase w-1/4" onClick={GetOrders}>View Past Orders</button>
                    }
                    {isViewing ? 
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
                        : ""
                    }   
                </div>
            </div>
        </div>
    )
}
export default Profile;

