import {useState} from "react";

function Login(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log("Logging in user:", username, password);
        const login = {
            UserName: username,
            Password: password
        };

        props.login(login,props.goBack)
        // check result of login and set error message if needed
        // if(result != true){
        //     setErrorMessage(true);
        // }
    }
    const handleChangeUser = function (evt) {
        setUsername(evt.target.value);
        console.log(password);
    };
    const handleChangePass = function (evt) {
        setPassword(evt.target.value);
        console.log(password);
    };

    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 bg-white">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3630.jpg?t=st=1651870326~exp=1651870926~hmac=91e4c5922c7a6db4c45b52ca8c2215ff9f5002c0aaed4f289d29626bbab1dc8a&w=826"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleChangeUser}
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChangePass}
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <a
                                    hidden={!errorMessage}
                                    href="#!"
                                    className="font-bold text-red-600 hover:text-red-700 focus:text-red-700 active:text-red-800 duration-200 transition ease-in-out"
                                >Incorrect Username or Password</a
                                >
                            </div>

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;