import { useState } from "react";
import classNames from "classnames";

const Experience = ({ jobs }) => {
    const [content, setContent] = useState(jobs[0].jobDescription);
    const [activeJob, setActiveJob] = useState(jobs[0].companyName);

    const renderedJobs = jobs.map((job) => {
        const finalClassNames = classNames(
            "cursor-pointer pb-4 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-blue-700",
            {
                "text-blue-700 font-semibold": activeJob === job.companyName,
            }
        );
        const handleClick = () => {
            setActiveJob(job.companyName);
            setContent(job.jobDescription);
        };

        return (
            <div
                className={finalClassNames}
                onClick={handleClick}
                id={job.companyName}
            >
                {job.companyName}
            </div>
        );
    });

    const renderedContent = content.map((arr) => {
        return <li>{arr}</li>;
    });

    return (
        <div className="pb-24 flex justify-center items-center mx-auto flex-col">
            <div className="flex items-center">
                <h1 className=" mb-3 text-4xl text-gray-700 pb-1.5 font-semibold">
                    Working Experiences
                </h1>
            </div>
            <div className="rounded-lg shadow-lg flex justify-center px-12 items-start py-12 h-4/5 w-2/4 mx-auto flex-row">
                <div className="w-1/4">{renderedJobs}</div>
                <div className="w-4/5">
                    <ul className="space-y-1 text-gray-700 list-outside list-disc">
                        {renderedContent}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
