import './App.css';
import {Header, Navbar} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Buyer, Feature, ErrorPage} from "./containers";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import AddFeature from "./containers/addFeature/AddFeature";

function App() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <BrowserRouter>
            <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            <div className="main-container">
                <div className="side-navbar">
                    <Navbar toggleMenu={toggleMenu}/>
                </div>
                <div className="content" onClick={() => setToggleMenu(false)}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/buyers" element={<Buyer/>}/>
                        <Route path="/features" element={<Feature/>}/>
                        <Route path="/features/new" element={<AddFeature/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>

    );
}

export default App;
