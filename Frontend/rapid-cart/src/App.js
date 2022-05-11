import logo from './logo.png';
import Header from "./components/Header";
import Home from "./components/Home";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import {useEffect, useState} from "react";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";

let savedToken = "";
function App() {

    const [token, setToken] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        var sessionToken = sessionStorage.getItem("sessionToken");
        if(sessionToken){
            setToken(sessionToken);
            setLoggedIn(true);
        }
      }, []); 

    const handleLogin = (login) => {
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
                savedToken = json.token;
                console.log("Saved")
                console.log(savedToken);
                setToken(json.token);
                sessionStorage.setItem("sessionToken", token);
                console.log("Returned")
                console.log(json.token);
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
                    if (response.status !== 200 || response.status !== 201) {
                        console.log(`Bad status: ${response.status}`);
                        return Promise.reject("response is not 200 OK");
                    }
                    return response.json();
                })
        }
        add().then(json => {
            // PROBABLY LOG THE USER IN HERE
            console.log("Saved")
            console.log(json);
            const user = {
                "UserName" : json.UserName,
                "Password" : json.Password
            }
            handleLogin(user);
        })
    }

    // if(!token) {
    //     return <Login login={handleLogin} />
    // }

  return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="login/*" element={loggedIn ? <Navigate to="/" /> : <Login login={handleLogin} />} />
                <Route path="signUp/*" element={<SignUp signUp={handleSignUp} />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
