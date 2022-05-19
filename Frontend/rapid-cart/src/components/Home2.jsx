import titleImage from './../images/BagodGroceries.png'


function Home2(props){
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Rapid Cart!
                        </h1>
                        <p className="mb-8 leading-relaxed">An easy way to order groceries with Rapid Delivery. </p>
                        <p className="mb-8 leading-relaxed">Local store pick-ups are brought right to you.</p>
                        <div className="flex justify-center">
                            <a href="/signUp"
                               className=" inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign Up</a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero"
                             src={titleImage}></img>
                    </div>
                </div>
            </section>
            <section className="text-gray-700 body-font border-t border-gray-200">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Shop from your favorite store below</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900"></h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-11 h-11 p-1.5 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                                             aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink">
                                            <title>Shopping Cart</title>
                                            <desc>A solid styled icon from Orion Icon Library.</desc>
                                            <circle data-name="layer1"
                                                    cx="23.9" cy="56.3" r="4" fill="#202020"></circle>
                                            <circle data-name="layer1" cx="49.9" cy="56.3" r="4" fill="#202020"></circle>
                                            <path data-name="layer2" d="M23.4 48.3h31l7.7-24H19.7L15.9 7.8A2 2 0 0 0 14 6.3H3.9a2 2 0 0 0 0 4h8.4l9 38z"
                                                  fill="#202020"></path>
                                            <path data-name="layer1" fill="#202020" d="M21.9 20.3H38l.1-.2-8-8-8.2 8.2zm28-8l2.2-5.6-7.4-3-6.6 16.4.1.2h8.4l1.5-3.7v3.7h12v-8H49.9z"></path>
                                        </svg>
                                    </div>

                                    <h2 className="text-gray-900 text-lg title-font font-medium">MartyMarMart</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Locally sourced, organic produce, at afforable prices. We care about your health and your wallet!</p>
                                    <button className="mt-3 text-indigo-500 inline-flex items-center">Shop Now
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                             stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-11 h-11 mr-3 p-1.5 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                                             aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink">
                                            <title>Shopping Cart</title>
                                            <desc>A solid styled icon from Orion Icon Library.</desc>
                                            <circle data-name="layer1"
                                                    cx="23.9" cy="56.3" r="4" fill="#202020"></circle>
                                            <circle data-name="layer1" cx="49.9" cy="56.3" r="4" fill="#202020"></circle>
                                            <path data-name="layer2" d="M23.4 48.3h31l7.7-24H19.7L15.9 7.8A2 2 0 0 0 14 6.3H3.9a2 2 0 0 0 0 4h8.4l9 38z"
                                                  fill="#202020"></path>
                                            <path data-name="layer1" fill="#202020" d="M21.9 20.3H38l.1-.2-8-8-8.2 8.2zm28-8l2.2-5.6-7.4-3-6.6 16.4.1.2h8.4l1.5-3.7v3.7h12v-8H49.9z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">PigglyGiggly</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Locally sourced, organic produce, at afforable prices. We care about your health and your wallet!</p>
                                    <button className="mt-3 text-indigo-500 inline-flex items-center">Shop Now
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                             stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div
                                        className="w-11 h-11 mr-3 p-1.5 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                                             aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink">
                                            <title>Shopping Cart</title>
                                            <desc>A solid styled icon from Orion Icon Library.</desc>
                                            <circle data-name="layer1"
                                                    cx="23.9" cy="56.3" r="4" fill="#202020"></circle>
                                            <circle data-name="layer1" cx="49.9" cy="56.3" r="4" fill="#202020"></circle>
                                            <path data-name="layer2" d="M23.4 48.3h31l7.7-24H19.7L15.9 7.8A2 2 0 0 0 14 6.3H3.9a2 2 0 0 0 0 4h8.4l9 38z"
                                                  fill="#202020"></path>
                                            <path data-name="layer1" fill="#202020" d="M21.9 20.3H38l.1-.2-8-8-8.2 8.2zm28-8l2.2-5.6-7.4-3-6.6 16.4.1.2h8.4l1.5-3.7v3.7h12v-8H49.9z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">Gen Dev Market</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">Locally sourced, organic produce, at afforable prices. We care about your health and your wallet!</p>
                                    <button className="mt-3 text-indigo-500 inline-flex items-center">Shop Now
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                             stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Home2;