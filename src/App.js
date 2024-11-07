

import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Recomended from "./components/Recomended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App (){
return(<div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Recomended></Recomended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
  </div>
)
}

export default App