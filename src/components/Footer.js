const Footer = () => {
    return (
        <div className="p-2 bg-white rounded-lg shadow md:px-3 md:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="mb-1.5 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Designed and Built by Yudho Ahmad Fahreza
            </span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a
                    href="https://github.com/mocolansrawung"
                    class="hover:underline"
                >
                    mocolansrawung |
                </a>{" "}
                All Rights Reserved.
            </span>
        </div>
    );
};

export default Footer;
