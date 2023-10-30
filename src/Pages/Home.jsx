import Dashboard from "../Components/Dashboard";


const Home = ({ isLoading, setIsLoading, newsHub, setNewsHub, setCurrentCategory }) => {
    return (
        <section>
            <Dashboard isLoading={isLoading} setIsLoading={setIsLoading} newsHub={newsHub} setNewsHub={setNewsHub} setCurrentCategory={setCurrentCategory} />
        </section>
    )
}

export default Home;
