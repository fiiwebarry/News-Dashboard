import Navbar from "./Generic-Layouts/Navbar";
import NewsHub from "./NewsHub";


const Dashboard = ({ isLoading, setIsLoading, newsHub, setNewsHub, setCurrentCategory }) => {
    return (
        <section>
            <Navbar setCurrentCategory={setCurrentCategory} />
            <NewsHub isLoading={isLoading} newsHub={newsHub} />

        </section>
    )
}

export default Dashboard;
