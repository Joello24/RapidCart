import logo from './../logo.png';


function Header(){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                {/*<svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"*/}
                {/*     xmlns={logo}>*/}

                {/*</svg>*/}
                <img src={logo} alt="Secret Agent" className="h-10 w-10"/>
                <span className="font-semibold text-xl mx-3 tracking-tight">Rapid Cart</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/"
                       className="block mt-4 px-4 py-2 lg:inline-block lg:mt-0 text-white hover:text-black mr-8 border rounded border-white">
                        Home
                    </a>
                    <a href="agents/*"
                       className="block mt-4 px-4 py-2 lg:inline-block lg:mt-0 text-white hover:text-black mr-8 border rounded border-white">
                        Shop
                    </a>
                    <a href="rapid-cart/src/components/Header#responsive-header"
                       className="block mt-4 px-4 py-2 lg:inline-block lg:mt-0 text-white hover:text-black mr-8 border rounded border-white">
                        Account/Orders
                    </a>
                </div>
                <div>
                    <a href="login/*"
                       className="block mt-4 px-4 py-2 lg:inline-block lg:mt-0 text-white hover:text-black mr-8 border rounded border-white">Login</a>
                </div>
                <div>
                    <a href="signUp/*"
                       className="block mt-4 px-4 py-2 lg:inline-block lg:mt-0 text-white hover:text-black mr-8 border rounded border-white">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}
export default Header;