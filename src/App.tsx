import Assistant from "./components/Assistant";
import Chart from "./components/Chart";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

const App = () => {
    return (
        
        <Router>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/chart'}>Chart</Link></li>
                    <li><Link to={'/assistant'}>Assistant</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/chart" Component={Chart}></Route>
                <Route path="/assistant" Component={Assistant}></Route>
            </Routes>
        </Router>
    );
};

export default App;
