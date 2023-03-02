const Landing = () => {
    return (
        <div className="pt-10 flex justify-center items-center h-screen">
            <div>
                <div>
                    <p className="text-xl text-gray-700 pb-1.5">
                        Hi, my name is
                    </p>
                </div>
                <div>
                    <h1 className="text-6xl font-semibold text-gray-700 pb-1.5">
                        Yudho Ahmad Fahreza.
                    </h1>
                </div>
                <div>
                    <h3 className="text-5xl font-semibold text-gray-400 pt-1">
                        I build purposeful websites.
                    </h3>
                </div>
                <div>
                    <p className="py-5 w-4/6 text-gray-700">
                        I'm a physics student who loves building web
                        applications. Currently, I'm focusing on building
                        user-centered products at{" "}
                        <a
                            href="https://www.karyakala.com"
                            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                        >
                            karyakala
                        </a>
                        .
                    </p>
                </div>
                <button className="flex flex-row text-white bg-gray-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center">
                    <a download={true} href={require("../../img/cv-new.pdf")}>
                        Checkout my resume!
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Landing;
