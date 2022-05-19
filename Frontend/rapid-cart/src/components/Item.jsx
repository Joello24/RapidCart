import AddedToCart from '../images/addedToCart.png';
import {useState} from "react";
import image from '../images/TestImages/americanCheese.jpeg';
import AddItemForm from "./AddItemForm";

function Item(props) {

    const [isInCart, setIsInCart] = useState(false);
    const [count, setCount] = useState(1);
    const [isEditing, setIsEditing] = useState(true);

    const addToCart = () => {
        props.item.count = count;
        setIsInCart(true);
        props.item.isInCart = true;
        props.add();
    }
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }

    const EditItem = (newItem) => {

        newItem.itemId = props.item.itemId;
        // TODO: check if edit boxes are empty, if so, don't set them to the old properties
        if(newItem.name == undefined){
            newItem.name=props.item.name;
        }
        if(newItem.price == undefined){
            newItem.price = props.item.price;
        }
        if(newItem.inventory == undefined){
            newItem.inventory = props.item.inventory;
        }
        if(newItem.description == undefined){
            newItem.description = props.item.description;
        }
        if(newItem.path == undefined){
            newItem.path = props.item.path;
        }
        if(newItem.categoryId == undefined){
            newItem.categoryId = props.item.categoryId;
        }
        props.Edit(newItem);
    }

    return (
        <div className="relative border bg-white border-gray-200 rounded-xl">
            <div className="relative border bg-white border-gray-200 rounded-xl">

            <span hidden={!props.item.isInCart} className= "absolute top-0 right-0 text-sm bg-green-300 p-2 rounded-bl-xl">
                <img className="h-12 w-12" src={AddedToCart} alt=""/>
            </span>
            <span hidden={props.admin} >
                <button  onClick={props.Delete} className= "absolute right-20 text-sm bg-gray-200 p-2 border-solid ">Delete</button>
                <button  onClick={() => setIsEditing(!isEditing)} className= "absolute left-20 text-sm bg-gray-200 p-2 border solid">Edit</button>
            </span>
                <img className="max-h-52 w-full bg-white object-contain rounded-t-xl"
                     src= {props.path}
                     alt="" />
                    <div className="p-5">
                        <h2 className="text-lg">Stock: {props.inventory}</h2>
                        <h2 className="text-lg">{props.name}</h2>
                        <h4 className="text-gray-500 text-sm">${props.price } </h4>
                    </div>
                    <div className="flex">
                        <button onClick={isInCart == true ? console.log("Already in cart") : addToCart} className="py-3 w-9/12 bg-green-300 rounded-bl-xl text-white font-extrabold">
                            {isInCart == true ? "Added" : "Add to cart"}
                        </button>
                        <button className="bg-red-600 px-2 mx-2 box-border text-white font-bold" onClick={decrementCount} >
                            -
                        </button>

                        <span className="text-sm text-center my-3 font-bold">{count}</span>
                        <button className="bg-green-600 px-2 mx-2 box-border text-white font-bold" onClick={incrementCount} >

                            +
                        </button>
                        <button className=" w-1/12 bg-green-300 rounded-br-xl text-white font-extrabold">
                        </button>
                    </div>
            </div>
            <div hidden={isEditing}>
                <AddItemForm hidden={isEditing} submit={EditItem} current={props.item} mini={true}/>
            </div>
        </div>
    )
}
export default Item;