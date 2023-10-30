import Navbar from "./Generic-Layouts/Navbar";
import NewsHub from "./NewsHub";


const Dashboard = ({ isLoading, setIsLoading, newsHub, setNewsHub, setCurrentCategory }) => {
    return (
        <section>
            <Navbar />
            <NewsHub isLoading={isLoading} newsHub={newsHub} setCurrentCategory={setCurrentCategory} />

        </section>
    )
}

export default Dashboard;
