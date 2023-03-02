const Contact = () => {
    return (
        <div className="py-28 flex justify-center items-center h-3/4 w-3/4 mx-auto flex-col">
            <div className="text-5xl text-gray-700 pb-4 font-semibold">
                Let's Have a Talk!
            </div>
            <div className="py-2 pb-8 w-8/12 text-center">
                <p>
                    I'm currently open for new opportunities, especially for the
                    place that will provide the opportunity to improve my
                    expertise, experience, and knowledge. Whether you have a
                    question, job opportunities, freelance projects, or just
                    want to say hi, I'll try my best to get back to you~
                </p>
            </div>
            <button className="text-lg text-white bg-gray-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-8 py-2.5 text-center">
                <a href="mailto:yudhoahmadz@gmail.com">Contact Me!</a>
            </button>
            <hr className="my-3 border-black sm:mx-auto lg:my-4" />
            <div className="flex flex-row justify-between">
                <a
                    href="https://github.com/mocolansrawung"
                    className="font-medium text-blue-600 underline hover:text-gray-700 hover:no-underline mx-5"
                >
                    Github
                </a>
                <a
                    href="https://linkedin.com/in/yudhoahmadfahreza"
                    className="font-medium text-blue-600 underline hover:text-gray-700 hover:no-underline mx-5"
                >
                    LinkedIn
                </a>
                <a
                    href="https://instagram.com/yudho_ahmd"
                    className="font-medium text-blue-600 underline hover:text-gray-700 hover:no-underline mx-5"
                >
                    Instagram
                </a>
                <a
                    href="https://twitter.com/yudho_ahmd"
                    className="font-medium text-blue-600 underline hover:text-gray-700 hover:no-underline mx-5"
                >
                    Twitter
                </a>
            </div>
        </div>
    );
};

export default Contact;
