import Sidebar from "./components/Sidebar"
import NewsSection from "./pages/NewsSection"

const App = () => {
  return (
    <div className="flex ">
      <div className="w-[400px] ">
    <Sidebar/>
      </div>
    <div>
    <NewsSection/>
    </div>
    </div>
  )
}

export default App