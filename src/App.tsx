import { Routes, Route } from "react-router-dom"

import "./App.sass"
import Signup from "./pages/SIgnup"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
