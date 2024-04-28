import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Create } from "./components/Create"
import { Update } from "./components/Update"
import { Read } from "./components/Read"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
