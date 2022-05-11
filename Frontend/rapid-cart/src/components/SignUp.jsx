import {useState} from "react";

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
        props.signUp(newUser);
    }

    return (
        <div className="">
            <div className="">
                <div className="text-center text-green-500 text-7xl my-8">
                    <h1>Sign Up</h1>
                </div>
                <div className="text-center">
                    <form onSubmit={HandleSubmit}>
                        <div className="">
                            <div className="">
                                <input type="text" name="firstName" placeholder="First Name" onChange={HandleChange} />
                            </div>
                            <div className="">
                                <input type="text" name="lastName" placeholder="Last Name" onChange={HandleChange} />
                            </div>
                            <div className="">
                                <input type="text" name="email" placeholder="Email" onChange={HandleChange} />
                            </div>
                            <div className="">
                                <input type="text" name="phone" placeholder="Phone ###-###-####" onChange={HandleChange} />
                            </div>
                            <div className="">
                                <input type="text" name="password" placeholder="Password" onChange={HandleChange} />
                            </div>
                            <div className="">
                                <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={HandleChange} />
                            </div>
                            <div className="">
                                <button className="my-5 px-2 bg-green-500 hover:bg-red-600" type="submit">✔</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;