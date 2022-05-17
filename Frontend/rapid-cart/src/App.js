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
            setCartItems(JSON.parse(sessionCart));
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
        fetch("http://localhost:5051/api/auth/login", req)
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
            handleLogin(login, () => navigate(-2));
        })
    }
    const AddToCart = (item) => {
        setCartItems([...cartItems, item]);
        sessionStorage.setItem("sessionCart", JSON.stringify(cartItems));
    }
    const RemoveFromCart = (item) => {
        const newCart = cartItems.filter(cartItem => cartItem.itemId !== item.itemId);
        setCartItems(newCart);
        sessionStorage.setItem("sessionCart", JSON.stringify(newCart));
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

    // if(!token) {
    //     return <Login login={handleLogin} />
    // }

  return (
        <div>
            <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop setCartItems={AddToCart} />} />
                <Route path="/login" element={<Login login={handleLogin} goBack={() => navigate(-1)}/>} />
                <Route path="/signUp" element={<SignUp signUp={handleSignUp} goBack={() => navigate(-1)}/>} />
                <Route path="/cart" element={<Cart user={user} items={cartItems} removeFromCart={RemoveFromCart}/>} />
                <Route path="/orders" element={<Orders user={user} />} />
                <Route path="/orderList" element={<OrderList user={user} />} />
            </Routes>
        </div>
  );
}

export default App;