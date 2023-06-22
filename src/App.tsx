import Assistant from "./components/Assistant";
import Chart from "./components/Chart";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Nav from "./components/Nav";

const App = () => {
    return (
        
        <Router>
            <Nav></Nav>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/chart" Component={Chart}></Route>
                <Route path="/assistant" Component={Assistant}></Route>
            </Routes>
        </Router>
    );
};

export default App;
