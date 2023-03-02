import Experience from "../pages/home/Experience";

const ExperiencePageBuilder = () => {
    const jobs = [
        {
            title: "Developer and Co-Founder",
            type: "Part Time",
            companyName: "karyakala",
            location: "Depok, Indonesia",
            start: "Jan 2023",
            end: "Present",
            jobDescription: [
                "Write modern, user-friendly, and purposeful websites for a diverse array of clients and internal projects.",
                "Build and maintain back-end and DevOps configurations for the projects.",
                "Work closely within front-end and back-end developers by mainly using MongoDB, Express, ReactJS, and NodeJS.",
            ],
        },
        {
            title: "Class Manager of Full-Stack Web Development",
            type: "Internship",
            companyName: "dibimbing.id",
            location: "Jakarta, Indonesia",
            start: "Apr 2022",
            end: "Oct 2022",
            jobDescription: [
                "Charged to manage end-to-end process of a full-stack web development bootcamp and intensively communicate with various relevant stakeholders.",
                "Improved the quality of the program learning experience by gain insights and feedbacks from the students in a daily basis.",
                "Corrected students' coding exercises regarding the basic algorithm of programming written in JavaScript.",
            ],
        },
        {
            title: "Business Innovation and Development",
            type: "Internship",
            companyName: "Paragon",
            location: "Jakarta, Indonesia",
            start: "Aug 2021",
            end: "Jan 2022",
            jobDescription: [
                "Mainly charged to analyze new business opportunities and collaborate with relevant stakeholders.",
                "Involved in the new business project of the directorate with the enablers team, precisely to standardize the business processes to be effective and efficient.",
                "Researched and elaborated the new business' possible competitors to gain applicable insights and knowledges.",
            ],
        },
    ];

    return <Experience jobs={jobs} />;
};

export default ExperiencePageBuilder;
