import {useState} from "react";
import logo2 from './../logo2.png';
function SignUp(props) {

    const [newUser, setNewUser] = useState({});

    const HandleChange = function(event)
    {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        });
    }

    const HandleSubmit = function(event){
        event.preventDefault();
        props.signUp(newUser, props.goBack);
    }

    return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
                <div className="hidden md:block w-2/7 bg-green-500 py-10 px-10">
                    <img src={logo2}
                        // src="https://img.freepik.com/free-vector/isometric-delivery-food-composition-with-image-smartphone-with-trolley-cart-collecting-grocery-products_1284-63377.jpg?t=st=1652460274~exp=1652460874~hmac=009bfa3e2683446fcede2dd4b0ab3bbbe91a4953a9298c91731e2fb09395ccd4&w=996"  data-name="Layer 1"
                         xmlns="http://www.w3.org/2000/svg" width="100%" height="auto"
                         viewBox="0 0 744.84799 747.07702">
                    </img>
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                        <p>Enter your information to register</p>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="John" name="firstName" onChange={HandleChange}/>
                                </div>
                            </div>
                            <div className="w-1/2 px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="Smith" name="lastName" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="email"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="johnsmith@example.com" name="email" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Phone</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="text"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="000-000-0000" name="phone" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="password"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="************" name="password" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button
                                    type="submit"
                                    onClick={HandleSubmit}
                                    className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER
                                    NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SignUp;