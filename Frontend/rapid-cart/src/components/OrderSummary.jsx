


function OrderSummary(props) {


    const orderPanel = document.querySelector('#order-panel');
    const orderOverlay = document.querySelector('#overlay');
    const orderBody = document.querySelector('#body');
    const orderClose = document.querySelector('#close-order-panel');

    document.querySelectorAll('.order').forEach(order => {
        order.addEventListener('click', event => {
            orderOverlay.classList.remove('hidden');
            orderBody.classList.add('overflow-hidden');
            orderPanel.classList.remove('translate-x-full');
            orderPanel.classList.add('-translate-x-0');
        });
    });


    orderOverlay.addEventListener('click', event => {
        orderOverlay.classList.add('hidden');
        orderBody.classList.remove('overflow-hidden');
        orderPanel.classList.remove('-translate-x-0');
        orderPanel.classList.add('translate-x-full');
    });

    orderClose.addEventListener('click', event => {
        orderOverlay.classList.add('hidden');
        orderBody.classList.remove('overflow-hidden');
        orderPanel.classList.remove('-translate-x-0');
        orderPanel.classList.add('translate-x-full');
    })


    return (
        <div hidden={false}>
            <aside className="transform top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-full" id="cart-panel">
                <div className="p-8">
                    <button className="bg-gray-200 py-2 px-6 rounded-full" id="close-cart-panel"><i className="fas fa-times"></i></button>
                    <main className="text-center font-bold">
                        <i className="fas fa-shopping-basket fa-3x mx-auto mt-10"></i>
                        <table className="table-auto mx-auto mt-10">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Item</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">Bacon Jammer</td>
                                <td className="border px-4 py-2">2x</td>
                                <td className="border px-4 py-2">$ 3.50</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Pepperoni Lover</td>
                                <td className="border px-4 py-2">3x</td>
                                <td className="border px-4 py-2">$ 1.00</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Sanguine Refresher</td>
                                <td className="border px-4 py-2">1x</td>
                                <td className="border px-4 py-2">$ 2.50</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="mt-5 text-lg">Total: <span className="text-custom-yellow">$12.50</span></div>
                        <button className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6">Order &amp; Pay</button>
                    </main>
                </div>
            </aside>
        <aside className="transform top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-full" id="order-panel">
            <div className="p-8">
                <button className="bg-gray-200 py-2 px-6 rounded-full" id="close-order-panel"><i className="fas fa-times"></i></button>
                <main className="text-center font-bold">
                    <span className="text-xl">13, November 2020</span>
                    <table className="table-auto mx-auto mt-10">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">Item</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border px-4 py-2">Bacon Jammer</td>
                            <td className="border px-4 py-2">2x</td>
                            <td className="border px-4 py-2">$ 3.50</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Pepperoni Lover</td>
                            <td className="border px-4 py-2">3x</td>
                            <td className="border px-4 py-2">$ 1.00</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sanguine Refresher</td>
                            <td className="border px-4 py-2">1x</td>
                            <td className="border px-4 py-2">$ 2.50</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="mt-5 text-lg">Total: <span className="text-custom-yellow">$12.50</span></div>
                </main>
            </div>
        </aside>
        </div>
    )
}
export default OrderSummary;