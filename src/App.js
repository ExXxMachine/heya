import './App.css';
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {NewsPage} from "./pages/NewsPage"
import {Layout} from "./components/Layout"
import {InfoNews} from "./pages/InfoNews"
import  {Profile} from "./components/Profile"
import {Login} from "./components/Login"
import {Registration} from "./components/Registration";
import {PrivateRoute} from "./features/router/PrivateRoute";

function App() {
  return (
        <>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route element={<PrivateRoute/>}>
                    <Route path={"profile"} element={<Profile/>}/>
                </Route>
                <Route path={"registration"} element={<Registration/>}/>
                <Route index element={<HomePage/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"news"} element={<NewsPage/>}/>
                <Route path={"info"} element={<InfoNews/>}/>
            </Route>
        </Routes>
        </>
  );
}

export default App;
