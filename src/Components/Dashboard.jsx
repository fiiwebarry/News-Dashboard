import Navbar from "./Generic-Layouts/Navbar";
import NewsHub from "./NewsHub";


const Dashboard = ({ isLoading, setIsLoading, newsHub, setNewsHub, setCurrentCategory, keyword, setKeyword, filteredNews }) => {
    return (
        <section>
            <Navbar setCurrentCategory={setCurrentCategory} keyword={keyword} setKeyword={setKeyword} filteredNews={filteredNews} />
            <NewsHub isLoading={isLoading} newsHub={newsHub} keyword={keyword} setKeyword={setKeyword} filteredNews={filteredNews} />

        </section>
    )
}

export default Dashboard;
