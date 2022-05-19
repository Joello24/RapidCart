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
import Profile from "./components/Profile";

function App() {

    const [token, setToken] = useState();
    const [user, setUser] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartId, setCartId] = useState();
    const [isOn, setIsOn] = useState(true);
    const [message, setMessage] = useState();

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
        const sessionCart = sessionStorage.getItem("sessionCart");
        if(sessionCart){
            setCartId(JSON.parse(sessionCart));
        }
      }, []);

    useEffect( () => {
        getCart();
    }, [cartId,user]);

    const handleLogin = (login, goBack, setIsOn, setMessage) => {
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
        fetch("http://localhost:5051/api/auth/login", req)
            .then(response => {
                if (response.status !== 200) {
                    setMessage(`Bad status: ${response.status}`);
                    setIsOn(true);
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
                getCart();
                goBack();
                return true;
            })  
            .catch((e) => {
                console.log(e);
            })
    }
    const handleSignUp = (signUp) => {
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
            return fetch("http://localhost:5051/api/user", req)
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
            handleLogin(login, () => navigate(-2), setIsOn, setMessage);
        })
    }

    const getCart = () => {
        if(user.userId ==0 || user.userId == null || user.userId == undefined){
            return;
        }
        const get = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        const url = "http://localhost:5051/api/cart/" + user.userId;
        function getCartId() {
            return fetch(url,get)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        getCartId().then(data => {
            sessionStorage.setItem("sessionCart", JSON.stringify(data.cartId));
            getCartItems(data);
        });
    }
    const getCartItems = (cart) => {
        const cartItemUrl= "http://localhost:5051/api/cartitem/GetAll/";
        if(!cartId){
            setCartId(cart.cartId);
        }
        const cartItem = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        };
        function fetchCartItems() {
            return fetch(cartItemUrl+cartId,cartItem)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        setCartItems([]);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        fetchCartItems().then(data => {
            console.log(data);
            setCartItems(data);
        });
    }

    const AddToCart = (item) => {
        const cartItemUrl= "http://localhost:5051/api/cartitem";

        const cartItemBody = JSON.stringify({
            "CartId" : cartId,
            "UserId" : user.userId,
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
        postCartItem().then(data => {
            console.log("Response" + data);
            getCart();
        });
    }

    const RemoveFromCart = (item) => {
        const cartItemUrl= "http://localhost:5051/api/cartitem";

        const cartItem = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        };
        function deleteCartItem() {
            return fetch(cartItemUrl + "/" + cartId + "/" + item.itemId,cartItem)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        }
        deleteCartItem().then(data => {
            console.log("Response" + data);
            getCart();
        });
    }

    const ClearCart = (id) => {
    const cartUrl= "http://localhost:5051/api/cartitem/ClearCart";
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
            setCartItems([]);
        });
    }

    const incrementCount = (item) => {
        const cartItemUrl= "http://localhost:5051/api/cartitem";

        const cartItemBody = JSON.stringify({
            "CartId" : cartId,
            "ItemId" : item.itemId,
            "ItemPrice" : item.itemPrice,
            "Quantity" : item.quantity,
            "TotalPrice" : item.itemPrice * item.quantity
        });
        const cartItem = {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: cartItemBody
        };
        function updateCartItem() {
            return fetch(cartItemUrl,cartItem)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        updateCartItem().then(data => {
            console.log("Response" + data);
            getCart();
        });
    }
    const decrementCount = (item) => {
        const cartItemUrl= "http://localhost:5051/api/cartitem";

        const cartItemBody = JSON.stringify({
            "CartId" : item.cartId,
            "ItemId" : item.itemId,
            "ItemPrice" : item.itemPrice,
            "Quantity" : item.quantity,
            "TotalPrice" : item.itemPrice * item.quantity
        });
        const cartItem = {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: cartItemBody
        };
        function updateCartItem() {
            return fetch(cartItemUrl,cartItem)
                .then(response => {
                    if (response.status !== 200 && response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        };
        updateCartItem().then(data => {
            console.log("Response" + data);
            getCart();
        });
    }
    const navigate = useNavigate();

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
                <Route path="/login" element={<Login login={handleLogin} goBack={() => navigate(-1)} setIsOn={setIsOn} isOn={isOn} message={message} setMessage={setMessage}/>} />
                <Route path="/signUp" element={<SignUp signUp={handleSignUp} goBack={() => navigate(-1)}/>} />
                <Route path="/cart" element={<Cart user={user} items={cartItems} incrementCount={incrementCount} decrementCount={decrementCount} getCart={getCart} getCartItems={getCartItems} removeFromCart={RemoveFromCart} clearCart={ClearCart}/>} />
                <Route path="/orders" element={<Orders user={user} />} />
                <Route path="/orderList" element={<OrderList user={user} />} />
                <Route path="/profile" element={<Profile user={user} viewOrders={""}/>} />
            </Routes>
        </div>
  );
}

export default App;