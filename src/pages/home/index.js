import Landing from "./Landing";
import About from "./About";
import ExperiencePage from "../../components/Experience";
import Contact from "./Contact";
import Portfolio from "../../components/Portfolio";

const Homepage = () => {
    return (
        <div>
            <Landing />
            <About />
            <ExperiencePage />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Homepage;
