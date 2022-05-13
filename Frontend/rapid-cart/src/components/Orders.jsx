import { useEffect, useState } from "react";
import Order from "./Order";

const url = "http://localhost:5000/api/order/user/1";
const reportUrl = "http://localhost:5000/api/report/OrderReport/1";



function Orders(props) {

    // fetch orders from DB
    const [orders, setOrders] = useState([]);
    const [orderReport, setOrderReport] = useState([]);
    const [itemReportState, setItemReportState] = useState([]);

    useEffect(() => {
        init();
        GetOrders();
    }, [setOrders]);

    const GetOrders = () => {
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        fetch(reportUrl, get)
            .then(res => res.json())
            .then(data => {
                setOrderReport(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }


    
    function newDate(date) {
        const year = date.substring(0, 4);
        const month = date.substring(5, 7);
        const day = date.substring(8, 10);
        const formatDate = month + "-" + day + "-" + year;
        return formatDate;
    }

    const setItemReport = (evt) => {
        const report = orderReport.filter(order => order.orderId === evt);
        console.log(evt);
        setItemReportState(report.orderItems);
    }
    // fetch orderItems table by orderId and userId from DB
    // "orderId": 2,
    //     "userId": 2,
    //     "totalCost": 92,
    //     "dateCreated": "2022-03-11T00:00:00",
    //     "orderItems": null
    // "orderId": 1,
    // "userId": 1,


    function init() {

        const orderPanel = document.querySelector('#order-panel');
        const orderOverlay = document.querySelector('#overlay');
        const orderBody = document.querySelector('#body');
        const orderClose = document.querySelector('#close-order-panel');

        document.querySelectorAll('.order').forEach(order => {
            order.addEventListener('click', event => {
                orderOverlay.classList.remove('hidden');
                orderBody.classList.add('overflow-hidden');
                orderPanel.classList.remove('translate-x-full');
                orderPanel.classList.add('-translate-x-0');
            });
        });

        orderOverlay.addEventListener('click', event => {
            orderOverlay.classList.add('hidden');
            orderBody.classList.remove('overflow-hidden');
            orderPanel.classList.remove('-translate-x-0');
            orderPanel.classList.add('translate-x-full');
        });

        orderClose.addEventListener('click', event => {
            orderOverlay.classList.add('hidden');
            orderBody.classList.remove('overflow-hidden');
            orderPanel.classList.remove('-translate-x-0');
            orderPanel.classList.add('translate-x-full');
        })
    }
    return (
        <div className="orders">
            <body className="text-gray-900 bg-gray-100 font-body" id="body" data-new-gr-c-s-check-loaded="14.1060.0" data-gr-ext-installed="">

                <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">

                    <div className="bg-black opacity-50 z-20 top-0 bottom-0 left-0 right-0 fixed hidden" id="overlay">
                    </div>

                    <div className="lg:col-span-1">
                        <nav>
                            <div className="flex justify-between mb-6 px-2 md:mb-16">
                                <h1 className="font-bold uppercase">
                                    <a href="index.html" className="text-xl"><i className="fas fa-user-ninja mr-2"></i>User Information</a>
                                </h1>
                                <div className="px-4 cursor-pointer lg:hidden" id="open-menu">
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                            <ul className="hidden lg:block mr-10 mb-10" id="menu">
                                <li className="my-3">
                                    <a className="rounded-lg py-2 px-3 text-md tracking-wider font-bold" href="items-4.html">
                                        <i className="fas fa-carrot mr-2"></i>
                                        <span>Salads</span>
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a className="rounded-lg py-2 px-3 text-md tracking-wider font-bold" href="items-1.html">
                                        <i className="fas fa-hamburger mr-2"></i>
                                        <span>Burgers</span>
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a className="rounded-lg py-2 px-3 text-md tracking-wider font-bold" href="items-3.html">
                                        <i className="fas fa-pizza-slice mr-2"></i>
                                        <span>Pizza</span>
                                    </a>
                                </li>
                                <li className="my-3">
                                    <a className="rounded-lg py-2 px-3 text-md tracking-wider font-bold" href="items-2.html">
                                        <i className="fas fa-beer mr-2"></i>
                                        <span>Beverages</span>
                                    </a>
                                </li>
                                <div className="mt-16">
                                    <span className="px-3 text-gray-500">Other</span>
                                    <li className="my-3">
                                        <a className="rounded-lg py-2 px-3 text-md tracking-wider font-bold bg-custom-yellow block" href="orders-1.html">
                                            <i className="fas fa-redo-alt mr-2"></i>
                                            <span>My Orders</span>
                                        </a>
                                    </li>
                                    <li className="my-3">
                                        <a className="rounded-lg py-2 px-3 text-md tracking-wider font-bold" href="profile.html">
                                            <i className="fas fa-user-alt mr-2"></i>
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    

                    
                    <main className="lg:col-span-4">
                        
                        <div className="mt-16">
                            <div><span className="font-bold text-2xl md:text-4xl">Your past orders:</span></div>

                            <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-10">

                                {orderReport.map ( o => (
                                
                                <div className="bg-white rounded-lg shadow-md lg:border-l-8 border-gray-800 text-center hover:shadow-lg order">
                                    <div className="grid grid-cols-1 lg:grid-cols-4">
                                        <div className="bg-green-500 p-3">
                                            <span className="font-bold text-lg">{newDate(o.dateCreated)}</span>
                                        </div>
                                        <div className="p-3">
                                            <span className="font-bold text-md">{o.orderItems.length}</span>
                                        </div>
                                        <div className="p-3">
                                            <span className="font-bold text-md">${o.totalCost}</span>
                                        </div>
                                        <div className="p-3">
                                            <button onClick={() => setItemReportState(o.orderItems)} className="rounded-lg bg-green-500 px-3 py-1 font-bold">Order details</button>
                                        </div>
                                    </div>
                                </div>
                                    ))}
                            </div>
                        </div>
                    </main>

                    <aside className="transform top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-full" id="cart-panel">
                        <div className="p-8">
                            <button className="bg-gray-200 py-2 px-6 rounded-full" id="close-cart-panel"><i className="fas fa-times"></i></button>
                            <main className="text-center font-bold">
                                <i className="fas fa-shopping-basket fa-3x mx-auto mt-10"></i>
                                <table className="table-auto mx-auto mt-10">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">Item</th>
                                            <th className="px-4 py-2">Quantity</th>
                                            <th className="px-4 py-2">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemReportState.map ( i => (
                                            <tr>
                                                <td className="border px-4 py-2">{i.itemId}</td>
                                                <td className="border px-4 py-2">{i.quantity}</td>
                                                <td className="border px-4 py-2">${i.totalCost}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <div className="mt-5 text-lg">Total: <span className="text-custom-yellow">$12.50</span></div>
                                <button className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6">Order &amp; Pay</button>
                            </main>
                        </div>
                    </aside>

                    <aside className="transform top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-full" id="order-panel">
                        <div className="p-8">
                            <button className="bg-gray-200 py-2 px-6 rounded-full" id="close-order-panel"><i className="fas fa-times"></i></button>
                            <main className="text-center font-bold">
                                <span className="text-xl">13, November 2020</span>
                                <table className="table-auto mx-auto mt-10">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">Item</th>
                                            <th className="px-4 py-2">Quantity</th>
                                            <th className="px-4 py-2">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {itemReportState.map ( i => (
                                        <tr>
                                            <td className="border px-4 py-2">{i.itemId}</td>
                                            <td className="border px-4 py-2">{i.quantity}</td>
                                            <td className="border px-4 py-2">${i.totalCost}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className="mt-5 text-lg">Total: <span className="text-custom-yellow">$12.50</span></div>
                            </main>
                        </div>
                    </aside>
                </div>

            </body>
        </div>
    )
}
export default Orders;