import { BrowserRouter } from "react-router-dom"
import App from "../App"

const WrappedRoute = () => {
  return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  )
}

export default WrappedRoute