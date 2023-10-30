// import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import AxiosApi from './Axios-Api/Axios-Api'
import { useState, useEffect } from "react"

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [newsHub, setNewsHub] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")



  const getNewsHub = async () => {

    try {
      setIsLoading(true)
      const response = await AxiosApi.get("/news-datas")

      setNewsHub(response.data.data)
      if (response.status === 200) {
        setIsLoading(false)
      }

    }

    catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {

    getNewsHub();
  }, [])


  return (
    <section>
      <Home newsHub={newsHub} setNewsHub={setNewsHub} isLoading={isLoading} setCurrentCategory={setCurrentCategory} />

    </section>
  )
}

export default App
