function OrderItem(props){
    return(
        <div className="flex items-center bg-amber-100 mx-1 hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="w-20 mx-2">
                    <img className="h-24" src="https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png"
                         alt="">
                    </img>
                </div>
                <div className="flex flex-col justify-between ml-4 pr-5 flex-grow">
                    <span className="font-bold text-sm">{props.item.name}Apple</span>
                    <span className="text-red-500 text-xs">{props.item.categoryId}Produce</span>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <div className="">
                    <span className="font-bold text-md"></span>
                </div>
                <div className="">
                    <span className="font-bold text-md">{props.item.quantity}</span>
                </div>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">${props.item.itemPrice}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${props.item.itemPrice * props.item.quantity}</span>
        </div>
    )
}
export default OrderItem;