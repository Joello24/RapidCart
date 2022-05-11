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

let savedToken = "";
function App() {

    const [token, setToken] = useState();
    const [loggedIn, setLoggedIn] = useState(false);


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
                savedToken = json.token;
                console.log("Saved")
                console.log(savedToken);
                setToken(json.token);
                console.log("Returned")
                console.log(json.token);
            })
    }
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
