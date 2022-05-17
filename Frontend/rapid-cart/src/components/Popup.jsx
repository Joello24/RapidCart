import React, {useEffect} from "react";

export default function Modal(props) {
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        setShowModal(props.showModal);
    }, [props.showModal]);
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Order Submitted!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Order #{props.OrderSummary.orderId} has been submitted.
                                    </p>
                                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                                <span className=" text-sm">Item</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            Count
                                        </div>
                                        <span className="text-center w-1/5 text-sm">Unit $</span>
                                        <span className="text-center w-1/5 text-sm">Total $</span>
                                    </div>
                                    <p>
                                        {props.OrderSummary.orderItems.map(item => (
                                            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                                <div className="flex w-2/5">
                                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                                        <span className="font-bold text-sm">{item.name}</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-center w-1/5">
                                                    {item.count}
                                                </div>
                                                <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
                                                <span className="text-center w-1/5 font-semibold text-sm">${item.price * item.count}</span>
                                            </div>
                                        ))}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}