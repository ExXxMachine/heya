import './App.css';
import {Route, Routes} from "react-router-dom"
import {AuthorizationPage} from "./pages/AuthorizationPage"
import {HomePage} from "./pages/HomePage"
import {NewsPage} from "./pages/NewsPage"
import {Layout} from "./components/Layout"
import {InfoNews} from "./pages/InfoNews"
function App() {
  return (
        <>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"news"} element={<NewsPage/>}/>
                <Route path={"authorization"} element={<AuthorizationPage/>}/>
                <Route path={"info"} element={<InfoNews/>}/>
            </Route>
        </Routes>
        </>
  );
}

export default App;
