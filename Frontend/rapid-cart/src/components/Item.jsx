import AddedToCart from '../images/addedToCart.png';
import {useState} from "react";
import image from '../images/TestImages/americanCheese.jpeg';

function Item(props) {

    const [isInCart, setIsInCart] = useState(false);
    const [count, setCount] = useState(1);

    const addToCart = () => {
        props.item.count = count;
        setIsInCart(true);
        props.add();
    }
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }

    return (
        <div className="relative border bg-white border-gray-200 rounded-xl">
            <div className="relative border bg-white border-gray-200 rounded-xl">
			<span className="absolute top-0 left-0 text-sm bg-red-400 p-2 rounded-br-xl rounded-tl-xl">
				{
                    props.discount < .10 ? props.discount.toString().slice(3, 4) : props.discount.toString().slice(2, 4)
                }%
			</span>
            <span hidden={!isInCart} className= "absolute top-0 right-0 text-sm bg-green-300 p-2 rounded-bl-xl">
                <img className="h-12 w-12" src={AddedToCart} alt=""/>
            </span>
                <img className="max-h-52 w-full bg-white object-contain rounded-t-xl"
                     src= {image}
                     alt="" />
                    <div className="p-5">
                        <h2 className="text-lg">Stock: {props.inventory}</h2>
                        <h2 className="text-lg">{props.name}</h2>
                        <h4 className="text-gray-500 text-sm">${props.price - (props.price * props.discount)} <span
                            className="line-through text-sm text-red-500">${props.price}</span></h4>
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
        </div>
    )
}
export default Item;