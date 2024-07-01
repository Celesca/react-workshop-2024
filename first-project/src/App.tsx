import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import HookFormLogin from "./pages/HookFormLogin"
import NotFound from "./pages/NotFound"
import News from "./pages/News"

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/list" element={<HookFormLogin/>}></Route>
            <Route path="/news/:id" element={<News/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </>
  )
}

export default App