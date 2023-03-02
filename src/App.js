import { Route } from "./components/Route";
import Homepage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/about";
import ExperiencePage from "./pages/experience";

const App = () => {
    return (
        <div>
            <TopBar />
            <Route path="/">
                <Homepage />
            </Route>
            <Route path="/portfolio">
                <PortfolioPage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/experience">
                <ExperiencePage />
            </Route>
            <Footer />
        </div>
    );
};

export default App;
