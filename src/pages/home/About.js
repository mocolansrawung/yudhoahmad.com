const About = () => {
    return (
        <div className="flex justify-center items-center pb-28 w-3/4 mx-auto">
            <div className="w-4/6">
                <div className="flex items-center mb-3">
                    <h1 className="text-4xl text-gray-700 pb-1.5 font-semibold">
                        About
                    </h1>
                </div>
                <div className="w-5/6">
                    <p className="py-1.5 text-gray-700">
                        Hello! I'm, Yudho and I enjoy creating and learning
                        things related to web development. My first interaction
                        with web development happened in 2021 when I joined the
                        Ministry of Communication and Informatics of Republic of
                        Indonesia called Digital Talent Scholarship.
                    </p>
                    <p className="py-1.5 text-gray-700">
                        I've had the privilege to learn about everything I want
                        and create some useful works, like dummy and freelance
                        projects. My very recent focus these days is to build
                        and maintain projects at{" "}
                        <a
                            href="https://www.karyakala.com"
                            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                        >
                            karyakala
                        </a>
                        .
                    </p>
                    <p className="py-1.5 text-gray-700">
                        Here are few technologies I've been familiar with:
                    </p>
                </div>
                <div>
                    <div className="flex flex-row">
                        <ul className="mr-6 max-w-md space-y-1 text-gray-700 list-disc list-inside">
                            <li>JavaScript (ES6+)</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                        </ul>
                        <ul className="ml-6 max-w-md space-y-1 text-gray-700 list-disc list-inside">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>AWS, Docker, etc.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border border-gray-200 h-3/12 w-3/12 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a>
                    <img
                        className=""
                        src={require("../../img/foto.jpg")}
                        alt="informal-photo"
                    />
                </a>
            </div>
        </div>
    );
};
export default About;
