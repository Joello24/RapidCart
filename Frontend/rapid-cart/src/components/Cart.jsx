import {useEffect, useState} from "react";
import Modal from "./Popup";

const orderItemURL = "http://localhost:5000/api/orderitem";
const orderURL = "http://localhost:5000/api/order";

function Cart(props) {

    const [cartItems, setCartItems] = useState([props.items]);
    const [cartTotal, setCartTotal] = useState();
    const [showModal, setShowModal] = useState(false);
    const [orderSummary, setOrderSummary] = useState();

    useEffect(() => {
        setCartItems(props.items);
    }, [props.items]);

    useEffect(() => {
        Total();
    }, [cartItems]);

    useEffect(() => {
        props.getCart();
    }, [setCartItems]);


    const RemoveFromCart = (item) => {
        props.removeFromCart(item);
    }

    const IncrementCount = (item) => {
        item.quantity++;
        props.incrementCount(item);
    }

    const DecrementCount = (item) => {
        if (item.quantity > 1) {
            item.quantity--;
            props.decrementCount(item);
        }
    }

    const Total = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.itemPrice * item.quantity;
        }
        );
        setCartTotal(total);
        return total;
    }

    const SubmitOrder = () => {
        const orderHeaders = {
            "Content-Type": "application/json",
        }
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        const day = today.getDate();


        const date = year + "-" + month + "-" + day;

        const addBody = JSON.stringify({
            "UserId" : props.user.userId,
            "TotalCost" : cartTotal,
            "DateCreated" : date
        });
        const add = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: addBody
        };
        function postOrder() {
            return fetch(orderURL,add)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        postOrder().then(data => {
            console.log(data);
            AddOrderItems(data.data.orderId);

        });
        function AddOrderItems(orderId) {
            cartItems.forEach(item => {
                const orderItemBody = JSON.stringify({
                    "OrderId" : orderId,
                    "ItemId" : item.itemId,
                    "ItemPrice" : item.itemPrice,
                    "Quantity" : item.quantity,
                    "TotalCost" : item.itemPrice * item.quantity
                });
                const orderItem = {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: orderItemBody
                };
                function postOrderItem() {
                    return fetch(orderItemURL,orderItem)
                        .then(response => {
                            if (response.status !== 200 && response.status !== 201) {
                                console.log(`Bad status: ${response.status}`);
                                return Promise.reject("response is not 200 OK");
                            }
                            return response.json();
                        })
                };
                // {
                //     "data": {
                //     "orderId": 7,
                //     "userId": 1,
                //         "totalCost": 500,
                //         "dateCreated": "2022-01-01T00:00:00",
                //         "orderItems": null
                // },
                //     "success": true,
                //     "message": null
                // }
                postOrderItem().then(data => {
                    console.log("Response" + data);
                    setShowModal(true);
                    // TODO: GET CART ITEMS FROM CART AND PLUG THEM INTO ORDER SUMMARY
                    const orderItems = [...cartItems];
                    const order = {
                        "orderId" : data.orderId,
                        "totalCost" : data.cartTotal,
                        "dateCreated" : data.sendDate,
                        "orderItems" : orderItems
                    };
                    console.log("Order"+ order);
                    setOrderSummary(order);
                    props.clearCart();


                });
            });
        }
        const orderItemHeaders = {
        }
    }
    return (

    <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-2xl">{props.items.length} Items</h2>
                </div>
                <div className="flex mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>
        {props.items.map(item => (
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src={item.path}
                                     alt="">
                                </img>
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">{item.name}</span>
                                <span className="text-red-500 text-xs">{item.category}</span>
                                <button onClick={() => RemoveFromCart(item)} className="font-semibold bg-green-500 w-14 h-7 hover:text-red-600 font-bold text-black text-xs">Remove</button>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">

                            <button onClick={() => DecrementCount(item)}>
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path
                                        d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                            </button>

                            <input className="mx-2 border text-center w-8" type="text" value={item.quantity} />
                            <button onClick={() => IncrementCount(item)}>
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path
                                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                            </button>

                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">${item.itemPrice}</span>
                        <span className="text-center w-1/5 font-semibold text-sm">${item.itemPrice * item.quantity}</span>
                    </div>


        ))}
                <a href="/shop" className="flex font-semibold text-indigo-600 text-sm mt-10">

                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                    </svg>
                    Continue Shopping
                </a>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">ITEMS {props.items.length}</span>

                    <span className="font-semibold text-sm">${cartTotal}</span>
                </div>
                <div>
                    <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select className="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $10.00</option>
                    </select>
                </div>
                <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>${cartTotal+10}</span>
                    </div>

                    <button
                        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={SubmitOrder}>Checkout
                    </button>
                </div>
            </div>
            </div>

        <Modal showModal={showModal} OrderSummary={orderSummary} total={cartTotal}/>
    </div>
)
}
export default Cart;