// import { Route, Routes } from 'react-router-dom'

import './App.css'
import AxiosApi from './Axios-Api/Axios-Api'
import { useState, useEffect } from "react"
import Dashboard from './Components/Dashboard'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [newsHub, setNewsHub] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")
  const [keyword, setKeyword] = useState("")




  useEffect(() => {
    const getNewsHub = async () => {

      try {
        setIsLoading(true)
        const response = await AxiosApi.get("/news-datas",
          {
            params: {
              category: currentCategory ? currentCategory.toUpperCase() : undefined
            }
          }
        )

        setNewsHub(response.data.data)
        if (response.status === 200) {
          setIsLoading(false)
        }

      }

      catch (error) {
        console.log(error);
      }

    }

    getNewsHub();
  }, [currentCategory])

  const filteredNews = keyword.length === 0 ? newsHub : newsHub.filter(
    ({ attributes: { headline, hashtags } }) => headline.toLowerCase().includes(keyword.toLowerCase()) || hashtags.toLowerCase().includes(keyword.toLowerCase())
  );


  return (
    <section>


      <Dashboard newsHub={newsHub} setNewsHub={setNewsHub} isLoading={isLoading} setCurrentCategory={setCurrentCategory} keyword={keyword} setKeyword={setKeyword} filteredNews={filteredNews} />
    </section>
  )
}

export default App
