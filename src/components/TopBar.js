import Link from "./Link";

const TopBar = () => {
    const activeClassName = "font-bold border-1-4 border-blue-500 pb-2";
    return (
        <div className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/">
                    <img
                        src={require("../img/logo.png")}
                        className="h-6 mr-3 sm:h-9"
                        alt="logo"
                    />
                </Link>
                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="text-white bg-gray-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                    >
                        <a href="mailto:yudhoahmadz@gmail.com">Contact</a>
                    </button>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="divbar-sticky"
                >
                    <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <div>
                            <Link
                                to="/about"
                                activeClassName={activeClassName}
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                About
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/experience"
                                disabled
                                activeClassName={activeClassName}
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Experience
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="/portfolio"
                                activeClassName={activeClassName}
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
