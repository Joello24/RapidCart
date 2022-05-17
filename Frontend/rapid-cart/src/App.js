import logo from './logo.png';
import Header from "./components/Header";
import Home from "./components/Home";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import {useEffect, useState} from "react";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import OrderList from "./components/OrderList";


function App() {

    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartId, setCartId] = useState();

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("sessionToken");
        if(sessionToken){
            setToken(sessionToken);
            setLoggedIn(true);
        }
        const sessionUser = sessionStorage.getItem("sessionUser");
        if(sessionUser){ 
            setUser(JSON.parse(sessionUser));
        }
      }, []); 

    const handleLogin = (login, goBack) => {
        const loginInput = JSON.stringify({
            "UserName": login.UserName,
            "Password": login.Password
        });
        const req = {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json",
            },
            body: loginInput,
        };
        fetch("http://localhost:5000/api/auth/login", req)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`Bad status: ${response.status}`);
                    return Promise.reject("response is not 200 OK");
                }
                setLoggedIn(true);
                return response.json();
            })
            .then(json => {
                setToken(json.token);
                sessionStorage.setItem("sessionToken", token);
                setUser(json.user);
                sessionStorage.setItem("sessionUser", JSON.stringify(json.user));
                goBack();
            })  
    }
    const handleSignUp = (signUp, goBack) => {
        const signUpInput = JSON.stringify({
            "FirstName" : signUp.firstName,
            "LastName" : signUp.lastName,
            "Email" : signUp.email,
            "Password" : signUp.password,
            "Phone" : signUp.phone
        });
        const req = {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Content-Type": "application/json",
            },
            body: signUpInput,
        };
        function add() {
            return fetch("http://localhost:5000/api/user", req)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        }
        add().then((json) => {
            console.log("JSON: " + json.password);
            console.log("JSON: " + json.email);
            const login = {
                UserName : signUp.email,
                Password : signUp.password,
            }
            console.log("Login: " + login.Password);
            console.log("Login: " + login.UserName);
            handleLogin(login, () => navigate(-2));
        })
    }
    const AddToCart = (item) => {
        const cartItemUrl= "http://localhost:5000/api/cartitem";

        const cartItemBody = JSON.stringify({
            "OrderId" : cartId,
            "ItemId" : item.itemId,
            "Quantity" : item.count,
            "ItemPrice" : item.price,
            "TotalPrice" : item.price * item.count
        });
        const cartItem = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: cartItemBody
        };
        function postCartItem() {
            return fetch(cartItemUrl,cartItem)
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
        postCartItem().then(data => {
            console.log("Response" + data);
        });
    }
    const RemoveFromCart = (item) => {
        const cartItemUrl= "http://localhost:5000/api/cartitem";

        const cartItem = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        };
        function deleteCartItem() {
            return fetch(cartItemUrl + "/"+ item.itemId + "/" + cartId,cartItem)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        deleteCartItem().then(data => {
            console.log("Response" + data);
        });
    }
    const ClearCart = () => {
        const cartUrl= "http://localhost:5000/api/cart";
        const cart = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        };
        function deleteCart() {
            return fetch(cartUrl + "/"+ cartId,cart)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        deleteCart().then(data => {
            console.log("Response" + data);
        });
    }

    const navigate = useNavigate();

    // TODO: LOGOUT SEEMS TO BE WORKING, BUT IT REDIRECTS TO THE LOGIN PAGE INSTEAD OF HOME PAGE
    const handleLogout = () => {
        setLoggedIn(false);
        sessionStorage.removeItem("sessionToken");
        sessionStorage.removeItem("sessionUser");
        setToken(null);
        setUser(null);
        navigate("/");
    }

  return (
        <div>
            <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop setCartItems={AddToCart} currentCart={cartItems}/>} />
                <Route path="/login" element={<Login login={handleLogin} goBack={() => navigate(-1)}/>} />
                <Route path="/signUp" element={<SignUp signUp={handleSignUp} goBack={() => navigate(-1)}/>} />
                <Route path="/cart" element={<Cart user={user} items={cartItems} removeFromCart={RemoveFromCart} clearCart={ClearCart}/>} />
                <Route path="/orders" element={<Orders user={user} />} />
                <Route path="/orderList" element={<OrderList user={user} />} />
            </Routes>
        </div>
  );
}

export default App;