
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
    
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden border-solid border-2 border-black-500 ">
            <div className="md:flex w-full">
                <div className= {props.mini == true ? "py-10" : "hidden md:block w-2/7 bg-green-500 py-10 px-10 "}>
                </div>
                <div className=" md:w-1/2 py-10  md:px-10">
               
                    <div className="text-center">
                        <h1 className="font-bold text-3xl text-gray-900">Item</h1>
                        <p>Enter your information for Item</p>
                    </div>
                    <div>
                        
                             <div class="relative z-0 w-full mb-6 group">
                            <input type="text" onChange={HandleChange} name="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" onChange={HandleChange} name="description" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="price" onChange={HandleChange} name="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="inventory" onChange={HandleChange} name="inventory" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="inventory" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inventory</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="path" onChange={HandleChange} name="path" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="path" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Path</label>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button
                                    type="submit"
                                    onClick={HandleSubmit}
                                    className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        Submit
                                </button>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                       
                        
                       
                      
                       
                    </div>
               
        
   
  
    );
}

export default AddItem;
