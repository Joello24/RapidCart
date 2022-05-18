
import {useState} from "react";

function AddItem(props){
    const [newItem, setNewItem] = useState({});

    const HandleChange = function(evt)
    {
        setNewItem({
            ...newItem,
            [evt.target.name]: evt.target.value
        });
    }

    const HandleSubmit = function(evt){
        evt.preventDefault();

        props.submit(newItem);
    }


return (
    <div className="min-w-1/2 min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5 ">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div className="md:flex w-full">
                <div className= {props.mini == true ? "py-10" : "hidden md:block w-2/7 bg-green-500 py-10 px-10"}>
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">Item</h1>
                        <p>Enter your information for Item</p>
                    </div>
                    <div>
                        
                    <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Name</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="text"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="apple" name="name" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Description</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="text"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="red and fruit" name="description" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label htmlFor="" className="text-xs font-semibold px-1">Price</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="price"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="**.**" name="price" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label htmlFor="" className="text-xs font-semibold px-1">Inventory</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="inventory"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="10" name="inventory" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-12">
                                <label htmlFor="" className="text-xs font-semibold px-1">Path for image</label>
                                <div className="flex">
                                    <div
                                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="path"
                                           className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500"
                                           placeholder="pic url" name="path" onChange={HandleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button
                                    type="submit"
                                    onClick={HandleSubmit}
                                    className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        Edit Item
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

export default AddItem;
